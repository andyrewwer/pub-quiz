package com.corelogic.schemaconverter.controller;

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
    public Player createPlayer(@RequestBody Player player) {
        return playerService.save(player);
    }

    @GetMapping("/{id}")
    public Player findPlayer(@PathVariable Long id) {
        return playerService.findById(id);
    }

    @GetMapping()
    public List<Player> findPlayers() {
        return playerService.findAll();
    }

}
