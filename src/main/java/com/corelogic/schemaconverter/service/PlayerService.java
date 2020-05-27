package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.dto.PlayerJoinRequest;
import com.corelogic.schemaconverter.dto.error.GameRoomNotFoundException;
import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.repository.GameRoomRepository;
import com.corelogic.schemaconverter.repository.PlayerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
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
        if (ObjectUtils.isEmpty(player)) {
            player = Player.builder()
                    .gameRoom(gameRoom)
                    .name(playerJoinRequest.getName())
                    .active(true).build();
            player = playerRepository.save(player);
        } else {
            player.setActive(true);
            player = playerRepository.save(player);
        }
        if (gameRoom.getPlayerId() == 0) {
            gameRoom.setPlayerId(player.getId());
            gameRoomRepository.save(gameRoom);
        }
        return player;
    }

    public Player findById(Long id) {
        return playerRepository.findOne(id);
    }

    public List<Player> findAll() {
        return playerRepository.findAll();
    }

    public List<Player> findAllForGameRoom(Long gameRoomId) {
        return playerRepository.findAllByGameRoomIdAndActiveTrue(gameRoomId);
    }

    public long generateNewRandomPlayerIdForGameRoom(GameRoom gameRoom) {
        // TODO This should be random not ordered
        // May require refactor to ImagineIfGameRound instead of 1 per player
        // 1 per round and then sub-entity
        // :man-shrugging:
        List<Player> playersInGame = findAllForGameRoom(gameRoom.getId());
        return playersInGame.size() > 0 ? playersInGame.get(gameRoom.getRound() % playersInGame.size()).getId() : 0;

    }

    public Player save(Player player) {
        return playerRepository.save(player);
    }

    public List<Player> findAllForGameRoomOrderByScore(Long gameRoomId) {
        return playerRepository.findAllByGameRoomIdAndActiveTrueOrderByScoreDesc(gameRoomId);
    }

    public Player deactivatePlayer(Long id) {
        Player player = this.playerRepository.findOne(id);
        player.setActive(false);
        return playerRepository.save(player);
    }
}
