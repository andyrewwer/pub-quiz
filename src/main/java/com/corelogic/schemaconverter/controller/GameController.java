package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.entity.GameRound;
import com.corelogic.schemaconverter.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
public class GameController {

    private GameService gameRoundService;

    public GameController(GameService gameRoundService) {
        this.gameRoundService = gameRoundService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GameRound createGame(@RequestBody GameRound player) {
        return gameRoundService.save(player);
    }

    @GetMapping("/{id}")
    public GameRound findGame(@PathVariable Long id) {
        return gameRoundService.findById(id);
    }

    @GetMapping("/round/{round}")
    public List<GameRound> findGamesInRound(@PathVariable Long round) {
        return gameRoundService.findByRound(round);
    }

    @GetMapping()
    public List<GameRound> findGames() {
        return gameRoundService.findAll();
    }

    @GetMapping("/gameRoom/{gameRoomId}")
    public List<GameRound> findGamesInGameRoom(@PathVariable Long gameRoomId) {
        return gameRoundService.findAllForGameRoom(gameRoomId);
    }

    @GetMapping("/player/{playerId}")
    public List<GameRound> findGamesForPlayer(@PathVariable Long playerId) {
        return gameRoundService.findGamesForPlayer(playerId);
    }

    @GetMapping("/player/{playerId}/gameRoom/{gameRoomId}")
    public List<GameRound> findGamesForPlayerAndRound(@PathVariable Long playerId, @PathVariable Long gameRoomId) {
        return gameRoundService.findGamesForPlayerAndRound(playerId, gameRoomId);
    }
}
