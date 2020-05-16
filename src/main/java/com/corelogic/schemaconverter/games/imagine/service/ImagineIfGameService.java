package com.corelogic.schemaconverter.games.imagine.service;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import com.corelogic.schemaconverter.games.imagine.repository.ImagineIfGameRoundRepository;
import com.corelogic.schemaconverter.service.GameRoomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ImagineIfGameService  {

    private final ImagineIfGameRoundRepository gameRoundRepository;
    private final ImagineIfQuestionService questionService;
    private final GameRoomService gameRoomService;

    @Autowired
    public ImagineIfGameService(ImagineIfGameRoundRepository gameRoundRepository, ImagineIfQuestionService imagineIfQuestionRepository, GameRoomService gameRoomService) {
        this.gameRoundRepository = gameRoundRepository;
        this.questionService = imagineIfQuestionRepository;
        this.gameRoomService = gameRoomService;
    }

    public ImagineIfGameRound save(ImagineIfGameRound gameRound) {
        log.info("Saving imagineIfGameRound {}", gameRound);
        return gameRoundRepository.save(gameRound);
    }

    public GameRoom generateNewRound(GameRoom gameRoom) {
        gameRoomService.findOne(gameRoom);
        long random = generateNewQuestionId();
        gameRoom.setRound(gameRoom.getRound() + 1);
        gameRoom.setQuestion(random);
        return gameRoomService.save(gameRoom);
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

    public List<ImagineIfGameRound> findByGameRoomIdAndRound(Long gameRoomId, Long round) {
        return gameRoundRepository.findByGameRoomIdAndRound(gameRoomId, round);
    }

    public long generateNewQuestionId() {
        return questionService.generateNewQuestionId();
    }

    public ImagineIfQuestion saveQuestion(ImagineIfQuestion question) {
        return questionService.save(question);
    }

    public List<ImagineIfQuestion> findAllQuestions() {
        return questionService.findAll();
    }

    public ImagineIfQuestion getQuestionByGameRoom(long gameRoomId) {
        return questionService.getQuestion(gameRoomService.findById(gameRoomId).getId());
    }
}
