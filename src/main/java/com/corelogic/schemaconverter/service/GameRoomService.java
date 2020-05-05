package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.enums.GameRoomStatus;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.Arrays;
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
        if (ObjectUtils.isEmpty(gameRoom.getId())) {
            gameRoom.setRound(1);
            gameRoom.setStatus(GameRoomStatus.CREATED);
        }
        return gameRoomRepository.save(gameRoom);
    }

    public GameRoom findById(Long id) { return gameRoomRepository.findOne(id); }

    public List<GameRoom> findAll() { return gameRoomRepository.findAll(); }

    public Integer getCurrentRoundForGameRoom(Long id) {
        return findById(id).getRound();
    }

    public GameRoom setCurrentRoundForGameRoom(Long id, Integer round) {
        GameRoom gameRoom = gameRoomRepository.findOne(id);
        gameRoom.setRound(round);
        return gameRoomRepository.save(gameRoom);
    }

    public String test() {
        List<String> strings = Arrays.asList("Andrew", "Ben", "Sophie");
        String string = "My siblings are {name}, {noun} and {999}!";
        for (String _s: strings) {
            string = string.replaceFirst("\\{\\w*}", _s);
        }
        return string;
    }
}
