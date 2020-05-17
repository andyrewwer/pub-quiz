package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.enums.GameRoomStatus;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import com.corelogic.schemaconverter.games.imagine.service.ImagineIfGameService;
import com.corelogic.schemaconverter.games.imagine.service.ImagineIfQuestionService;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;

@Service
@Slf4j
public class GameRoomService {
    private final GameRoomRepository gameRoomRepository;
    private final ImagineIfQuestionService imagineIfQuestionService;
    private final ImagineIfGameService imagineIfGameService;

    @Autowired
    public GameRoomService(GameRoomRepository gameRoomRepository, ImagineIfQuestionService imagineIfQuestionService, ImagineIfGameService imagineIfGameService) {
        this.gameRoomRepository = gameRoomRepository;
        this.imagineIfQuestionService = imagineIfQuestionService;
        this.imagineIfGameService = imagineIfGameService;
    }

    public GameRoom create(GameRoom gameRoom) {
        if (ObjectUtils.isEmpty(gameRoom.getId())) {
            gameRoom.setRound(1);
            gameRoom.setStatus(GameRoomStatus.CREATED);
        }

        switch (gameRoom.getType()) {
            case IMAGINE_IF:
                gameRoom.setQuestion(imagineIfQuestionService.generateNewQuestionId());
        }
        // CHECK FOR DUPLICATE GAME ROOM CODES
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom save(GameRoom gameRoom) {
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom findById(Long id) { return gameRoomRepository.findOne(id); }
    public GameRoom findOne(GameRoom gameRoom) { return findById(gameRoom.getId()); }

    public List<GameRoom> findAll() { return gameRoomRepository.findAll(); }

    public Integer getCurrentRoundForGameRoom(Long id) {
        return findById(id).getRound();
    }

    public GameRoom setCurrentRoundForGameRoom(Long id, Integer round) {
        GameRoom gameRoom = gameRoomRepository.findOne(id);
        gameRoom.setRound(round);
        switch (gameRoom.getType()) {
            case IMAGINE_IF:
                gameRoom.setQuestion(findExistingQuestionOrGenerateNewQuestion(id, round));
                // TODO check if question has already come up
                // TODO check if duplicate questions??
                // TODO how to determine subject?
        }
        log.info("Setting gameRoom [{}]", gameRoom);
        return gameRoomRepository.save(gameRoom);
    }

    private Long findExistingQuestionOrGenerateNewQuestion(Long gameRoomId, int round) {
        long questionId = findQuestionIdIfAlreadyCreated(gameRoomId, round);
        log.info("Finding question ID [{}]", questionId);
        long random = imagineIfQuestionService.generateNewQuestionId();
        log.info("Setting question to: [{}]", questionId == 0 ? random : questionId);
        return questionId == 0 ? random : questionId;
    }

    private long findQuestionIdIfAlreadyCreated(Long gameRoomId, int round) {
        ImagineIfGameRound game = imagineIfGameService.findFirstByGameRoomIdAndRound(gameRoomId, round);
        return game == null ? 0 : game.getQuestion().getId();
    }

}
