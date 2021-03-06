package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.dto.error.InvalidSetRoundException;
import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.entity.enums.GameRoomStatus;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import com.corelogic.schemaconverter.games.imagine.service.ImagineIfGameService;
import com.corelogic.schemaconverter.games.imagine.service.ImagineIfQuestionService;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.List;

@Service
@Slf4j
@Transactional
public class GameRoomService {
    private final GameRoomRepository gameRoomRepository;
    private final ImagineIfGameService imagineIfGameService;
    private final PlayerService playerService;

    @Autowired
    public GameRoomService(GameRoomRepository gameRoomRepository, ImagineIfGameService imagineIfGameService, PlayerService playerService) {
        this.gameRoomRepository = gameRoomRepository;
        this.imagineIfGameService = imagineIfGameService;
        this.playerService = playerService;
    }

    public GameRoom create(GameRoom gameRoom) {
        if (ObjectUtils.isEmpty(gameRoom.getId())) {
            gameRoom.setRound(1);
        }
        switch (gameRoom.getType()) {
            case IMAGINE_IF:
                gameRoom = imagineIfGameService.setUpNewRound(gameRoom, 1);
        }
        // CHECK FOR DUPLICATE GAME ROOM CODES
        gameRoom.setStatus(GameRoomStatus.CREATED);
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom save(GameRoom gameRoom) {
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom findById(Long id) { return gameRoomRepository.findOne(id); }
    public GameRoom findOne(GameRoom gameRoom) { return findById(gameRoom.getId()); }

    public List<GameRoom> findAll() { return gameRoomRepository.findAllByOrderByName(); }

    public Integer getCurrentRoundForGameRoom(Long id) {
        return findById(id).getRound();
    }

    public GameRoom setCurrentRoundForGameRoom(Long id, Integer round) {
        GameRoom gameRoom = gameRoomRepository.findOne(id);
        if (Math.abs(gameRoom.getRound()-round) != 1) {
            throw new InvalidSetRoundException("Expected to increment round by 1 but was " + Math.abs(gameRoom.getRound()-round));
        }
        gameRoom.setStatus(GameRoomStatus.ROUND_STARTED);
        switch (gameRoom.getType()) {
            case IMAGINE_IF:
                gameRoom = imagineIfGameService.setUpNewRound(gameRoom, round);

                // TODO check if question has already come up
                // See the to-do in PlayerService. Same change will do both
                // May require refactor to ImagineIfGameRound instead of 1 per player
                // 1 per round and then sub-entity
                // :man-shrugging:
        }
        gameRoom.setRound(round);
        log.info("Setting gameRoom [{}]", gameRoom);
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom startGame(Long id) {
        GameRoom gameRoom = findById(id);
        gameRoom.setStatus(GameRoomStatus.ROUND_STARTED);
        return gameRoomRepository.save(gameRoom);
    }

    public List<GameRoom> findAllForGameRoomType(GameRoomType type) {
        return gameRoomRepository.findAllByTypeOrderByNameAsc(type);
    }

    public GameRoom restartGame(Long id) {
        GameRoom gameRoom = findById(id);
        gameRoom.setRound(1);
        gameRoom.setStatus(GameRoomStatus.CREATED);
        gameRoom.setTimeRemaining(45);
        List<ImagineIfGameRound> rounds = imagineIfGameService.findAllGamesForGameRoom(id);
        imagineIfGameService.deleteGames(rounds);
        List<Player> players = playerService.findAllForGameRoom(id);
        for (Player player: players) {
            player.setScore(0);
            playerService.save(player);
        }
        return gameRoomRepository.save(gameRoom);
    }
}
