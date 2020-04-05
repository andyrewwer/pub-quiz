package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.dto.PlayerJoinRequest;
import com.corelogic.schemaconverter.dto.error.GameRoomNotFoundException;
import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import com.corelogic.schemaconverter.repository.PlayerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.util.List;

@Service
@Slf4j
public class PlayerService {
    private final PlayerRepository playerRepository;
    private GameRoomRepository gameRoomRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository,
                         GameRoomRepository gameRoomRepository) {
        this.playerRepository = playerRepository;
        this.gameRoomRepository = gameRoomRepository;
    }

    public Player joinGame(PlayerJoinRequest playerJoinRequest) {
        GameRoom gameRoom = gameRoomRepository.findByCode(playerJoinRequest.getQuizcode());
        if (ObjectUtils.isEmpty(gameRoom)) {
            throw new GameRoomNotFoundException("Game Room not found!");
        }
        Player player = playerRepository.findByNameAndGameRoomId(playerJoinRequest.getName(), gameRoom.getId());
        return ObjectUtils.isEmpty(player) ? playerRepository.save(Player.builder().gameRoom(gameRoom).name(playerJoinRequest.getName()).build()) : player;
    }

    public Player findById(Long id) {
        return playerRepository.findOne(id);
    }

    public List<Player> findAll() {
        return playerRepository.findAll();
    }

}
