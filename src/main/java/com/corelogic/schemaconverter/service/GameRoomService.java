package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.entity.Answer;
import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class GameRoomService {
    private final GameRoomRepository gameRoomRepository;

    @Autowired
    public GameRoomService(GameRoomRepository gameRoomRepository) {
        this.gameRoomRepository = gameRoomRepository;
    }

    public GameRoom save(GameRoom gameRoom) {
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom findById(Long id) { return gameRoomRepository.findOne(id); }

    public List<GameRoom> findAll() { return gameRoomRepository.findAll(); }

}
