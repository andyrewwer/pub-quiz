package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.dto.PlayerJoinRequest;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Player playerJoinGame(@RequestBody PlayerJoinRequest playerJoinRequest) {
        return playerService.joinGame(playerJoinRequest);
    }

    @GetMapping("/{id}")
    public Player findPlayer(@PathVariable Long id) {
        return playerService.findById(id);
    }

    @GetMapping()
    public List<Player> findPlayers() {
        return playerService.findAll();
    }

    @GetMapping("/gameRoom/{gameRoomId}")
    public List<Player> findPlayersForGameRoom(@PathVariable Long gameRoomId) {
        return playerService.findAllForGameRoom(gameRoomId);
    }

    @GetMapping("/gameRoom/{gameRoomId}/orderByScore")
    public List<Player> findPlayersForGameRoomOrderByScore(@PathVariable Long gameRoomId) {
        return playerService.findAllForGameRoomOrderByScore(gameRoomId);
    }

    @GetMapping("/{id}/deactivate")
    public Player deactivatePlayer(@PathVariable Long id) {
        return playerService.deactivatePlayer(id);
    }

}
