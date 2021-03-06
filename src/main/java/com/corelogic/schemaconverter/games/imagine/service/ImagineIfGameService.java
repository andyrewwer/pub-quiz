package com.corelogic.schemaconverter.games.imagine.service;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.entity.enums.GameRoomStatus;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import com.corelogic.schemaconverter.games.imagine.repository.ImagineIfGameRoundRepository;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import com.corelogic.schemaconverter.service.PlayerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.*;

@Service
@Slf4j
public class ImagineIfGameService  {

    private final ImagineIfGameRoundRepository gameRoundRepository;
    private final ImagineIfQuestionService questionService;
    private final GameRoomRepository gameRoomRepository;
    private final PlayerService playerService;

    @Autowired
    public ImagineIfGameService(ImagineIfGameRoundRepository gameRoundRepository, ImagineIfQuestionService imagineIfQuestionRepository, GameRoomRepository gameRoomRepository, PlayerService playerService) {
        this.gameRoundRepository = gameRoundRepository;
        this.questionService = imagineIfQuestionRepository;
        this.gameRoomRepository = gameRoomRepository;
        this.playerService = playerService;
    }

    public ImagineIfGameRound save(ImagineIfGameRound gameRound) {
        // TODO validate if it already exists
        // if (gameRoundRepo.findByPlayer&Round exists)
        // do nothing
        // else
        log.info("Saving imagineIfGameRound {}", gameRound);
        gameRound = gameRoundRepository.save(gameRound);
        checkIfRoundIsComplete(gameRound);
        return gameRoundRepository.save(gameRound);
    }

    private void checkIfRoundIsComplete(ImagineIfGameRound round) {
        List<Player> playersForGameRoom = playerService.findAllForGameRoom(round.getGameRoom().getId());
        List<ImagineIfGameRound> answersForGameRound = findByGameRoomIdAndRound(round.getGameRoom().getId(), round.getRound());

        if (playersForGameRoom.size() != answersForGameRound.size()) {
            return;
        }
        gameRoomRepository.save(finishRound(round.getGameRoom()));
    }

    public ImagineIfQuestion getQuestion(long questionId) {
        return questionService.getQuestion(questionId);
    }

    public List<ImagineIfGameRound> findAllGamesForGameRoom(long gameRoomId) {
        return gameRoundRepository.findAllByGameRoomId(gameRoomId);
    }

    public List<ImagineIfGameRound> findGamesForPlayerAndGameRoom(Long playerId, Long gameRoomId) {
        return gameRoundRepository.findByPlayerIdAndGameRoomId(playerId, gameRoomId);
    }

    public List<ImagineIfGameRound> findByGameRoomIdAndRound(Long gameRoomId, int round) {
        return gameRoundRepository.findByGameRoomIdAndRound(gameRoomId, round);
    }

    public ImagineIfGameRound findFirstByGameRoomIdAndRound(Long gameRoomId, int round) {
        List<ImagineIfGameRound> games = gameRoundRepository.findByGameRoomIdAndRound(gameRoomId, round);
        if (games.size() == 0) {
            return null;
        }
        return games.get(0);
    }

    public ImagineIfQuestion saveQuestion(ImagineIfQuestion question) {
        return questionService.save(question);
    }

    public List<ImagineIfQuestion> findAllQuestions() {
        return questionService.findAll();
    }

    public ImagineIfQuestion getQuestionByGameRoom(long gameRoomId) {
        return questionService.getQuestion(gameRoomRepository.findOne(gameRoomId).getQuestion());
    }

    public ImagineIfGameRound findGamesForPlayerAndRound(Long playerId, int round) {
        return gameRoundRepository.findByPlayerIdAndRound(playerId, round);
    }

    public GameRoom updateScoresForGameRoomIdAndRound(GameRoom room) {
        List<ImagineIfGameRound> games = findByGameRoomIdAndRound(room.getId(), room.getRound());
        if (games.size() == 0) {
            return room;
        }
        Map<Integer, List<ImagineIfGameRound>> answerNumberGamesMap = new HashMap<>();
        games.forEach(game -> {
            answerNumberGamesMap.putIfAbsent(game.getAnswer(), new ArrayList<>());
            List<ImagineIfGameRound> imagineIfGameRounds = answerNumberGamesMap.get(game.getAnswer());
            imagineIfGameRounds.add(game);
        });

        Map<Integer, List<ImagineIfGameRound>> answerCountGameMap = new HashMap<>();
        for (int key: answerNumberGamesMap.keySet()) {
            int size = answerNumberGamesMap.get(key).size();
            answerCountGameMap.putIfAbsent(size, new ArrayList<>());
            List<ImagineIfGameRound> gamesForAnswerNumber = answerCountGameMap.get(size);
            gamesForAnswerNumber.addAll(answerNumberGamesMap.get(key));
        }

        List<Player> players = new ArrayList<>();
        for (ImagineIfGameRound game: answerCountGameMap.get(Collections.max((answerCountGameMap).keySet()))) {
            Player player = game.getPlayer();
            players.add(player);
            if (game.getSelectedPlayerId() == game.getPlayer().getId()) {
                player.setScore(player.getScore() + 1);
            }
            player.setScore(player.getScore() + 1);
            playerService.save(player);
        }
        for (Player player : players) {
            if (player.getScore() >= 10) {
                room.setStatus(GameRoomStatus.COMPLETE);
                return gameRoomRepository.save(room);
            }
        }
        return room;
    }

    public void updateTimersForAllGameRooms() {
        List<GameRoom> gameRooms = gameRoomRepository.findByTypeAndStatusAndTimeRemainingGreaterThanEqual(GameRoomType.IMAGINE_IF, GameRoomStatus.ROUND_STARTED,  0);
        gameRooms.forEach(
                room -> {
                    int newTime = room.getTimeRemaining() - 1;
                    room.setTimeRemaining(newTime);
                    if (newTime < 0) {
                        finishRound(room);
                    }
                });

        gameRoomRepository.save(gameRooms);
        log.info("Game Rooms! [{}]", gameRooms);
    }

    private GameRoom finishRound(GameRoom room) {
        room.setStatus(GameRoomStatus.ROUND_FINISHED);
        return updateScoresForGameRoomIdAndRound(room);
    }

    public GameRoom setUpNewRound(GameRoom gameRoom, int round) {
        ImagineIfGameRound gameRound = null;
        if (!ObjectUtils.isEmpty(gameRoom.getId())) {
            gameRound = findFirstByGameRoomIdAndRound(gameRoom.getId(), round);
        }
        gameRoom.setTimeRemaining(45);
        if (gameRound != null && gameRound.getQuestion() != null) {
            gameRoom.setQuestion(gameRound.getQuestion().getId());
            gameRoom.setPlayerId(gameRound.getSelectedPlayerId());
        } else {
            gameRoom.setQuestion(questionService.generateNewQuestionId());
            gameRoom.setPlayerId(playerService.generateNewRandomPlayerIdForGameRoom(gameRoom));
        }
        return gameRoom;
    }

    public void deleteGames(List<ImagineIfGameRound> rounds) {
        gameRoundRepository.delete(rounds);
    }
}
