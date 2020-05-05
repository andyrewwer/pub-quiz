package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.entity.games.AbstractGameRound;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.service.games.AbstractGameService;
import org.springframework.http.HttpStatus;
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
    public AbstractGameRound createGame(@RequestBody AbstractGameRound gameRound, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).save(gameRound);
    }

    @GetMapping("/{id}")
    public AbstractGameRound findGame(@PathVariable Long id, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findById(id);
    }

    @GetMapping("/round/{round}")
    public List<AbstractGameRound> findGamesInRound(@PathVariable Long round, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findByRound(round);
    }

    @GetMapping()
    public List<AbstractGameRound> findGames(@PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findAll();
    }

    @GetMapping("/gameRoom/{gameRoomId}")
    public List<AbstractGameRound> findGamesInGameRoom(@PathVariable Long gameRoomId, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findAllForGameRoom(gameRoomId);
    }

    @GetMapping("/player/{playerId}")
    public List<AbstractGameRound> findGamesForPlayer(@PathVariable Long playerId, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findGamesForPlayer(playerId);
    }

    @GetMapping("/player/{playerId}/gameRoom/{gameRoomId}")
    public List<AbstractGameRound> findGamesForPlayerAndRound(@PathVariable Long playerId, @PathVariable Long gameRoomId, @PathVariable String gameRoomType) {
        return gameRoomTypeServiceMap.get(GameRoomType.valueOf(gameRoomType)).findGamesForPlayerAndRound(playerId, gameRoomId);
    }
}
