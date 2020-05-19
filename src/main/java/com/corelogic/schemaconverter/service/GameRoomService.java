package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.enums.GameRoomStatus;
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
    private final ImagineIfQuestionService imagineIfQuestionService;
    private final ImagineIfGameService imagineIfGameService;
    private final PlayerService playerService;

    @Autowired
    public GameRoomService(GameRoomRepository gameRoomRepository, ImagineIfQuestionService imagineIfQuestionService, ImagineIfGameService imagineIfGameService, PlayerService playerService) {
        this.gameRoomRepository = gameRoomRepository;
        this.imagineIfQuestionService = imagineIfQuestionService;
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

    public List<GameRoom> findAll() { return gameRoomRepository.findAll(); }

    public Integer getCurrentRoundForGameRoom(Long id) {
        return findById(id).getRound();
    }

    public GameRoom setCurrentRoundForGameRoom(Long id, Integer round) {
        GameRoom gameRoom = gameRoomRepository.findOne(id);
        gameRoom.setStatus(GameRoomStatus.STARTED);
        switch (gameRoom.getType()) {
            case IMAGINE_IF:
                gameRoom = imagineIfGameService.setUpNewRound(gameRoom, round);

                // TODO check if question has already come up
                // TODO check if duplicate questions??
                // TODO how to determine subject?
                // TODO AUDIT TABLES
        }
        gameRoom.setRound(round);
        log.info("Setting gameRoom [{}]", gameRoom);
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom startGame(Long id) {
        GameRoom gameRoom = findById(id);
        gameRoom.setStatus(GameRoomStatus.STARTED);
        return gameRoomRepository.save(gameRoom);
    }
}
