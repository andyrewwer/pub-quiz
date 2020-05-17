package com.corelogic.schemaconverter.games.imagine.service;

import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import com.corelogic.schemaconverter.games.imagine.repository.ImagineIfGameRoundRepository;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ImagineIfGameService  {

    private final ImagineIfGameRoundRepository gameRoundRepository;
    private final ImagineIfQuestionService questionService;
    private final GameRoomRepository gameRoomRepository;

    @Autowired
    public ImagineIfGameService(ImagineIfGameRoundRepository gameRoundRepository, ImagineIfQuestionService imagineIfQuestionRepository, GameRoomRepository gameRoomRepository) {
        this.gameRoundRepository = gameRoundRepository;
        this.questionService = imagineIfQuestionRepository;
        this.gameRoomRepository = gameRoomRepository;
    }

    public ImagineIfGameRound save(ImagineIfGameRound gameRound) {
        log.info("Saving imagineIfGameRound {}", gameRound);
        return gameRoundRepository.save(gameRound);
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
}
