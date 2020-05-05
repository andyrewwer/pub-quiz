package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.entity.GameRound;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.service.games.AbstractGameService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/games/{gameRoomType}")
public class GameController {

    private final Map<GameRoomType, AbstractGameService> gameRoomTypeServiceMap;

    public GameController(Map<GameRoomType, AbstractGameService> gameRoomTypeServiceMap) {
        this.gameRoomTypeServiceMap = gameRoomTypeServiceMap;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GameRound createGame(@RequestBody GameRound player, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).save(player);
    }

    @GetMapping("/{id}")
    public GameRound findGame(@PathVariable Long id, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findById(id);
    }

    @GetMapping("/round/{round}")
    public List<GameRound> findGamesInRound(@PathVariable Long round, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findByRound(round);
    }

    @GetMapping()
    public List<GameRound> findGames(@PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findAll();
    }

    @GetMapping("/gameRoom/{gameRoomId}")
    public List<GameRound> findGamesInGameRoom(@PathVariable Long gameRoomId, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findAllForGameRoom(gameRoomId);
    }

    @GetMapping("/player/{playerId}")
    public List<GameRound> findGamesForPlayer(@PathVariable Long playerId, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findGamesForPlayer(playerId);
    }

    @GetMapping("/player/{playerId}/gameRoom/{gameRoomId}")
    public List<GameRound> findGamesForPlayerAndRound(@PathVariable Long playerId, @PathVariable Long gameRoomId, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findGamesForPlayerAndRound(playerId, gameRoomId);
    }
}
