package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.service.GameRoomService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gameRooms")
public class GameRoomController {

    private GameRoomService gameRoomService;

    public GameRoomController(GameRoomService gameRoomService) {
        this.gameRoomService = gameRoomService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GameRoom createGame(@RequestBody GameRoom gameRoom) {
        return gameRoomService.create(gameRoom);
    }

    @GetMapping("/{id}")
    public GameRoom findGame(@PathVariable Long id) {
        return gameRoomService.findById(id);
    }

    @GetMapping()
    public List<GameRoom> findGames() {
        return gameRoomService.findAll();
    }

    @GetMapping("/type/{type}")
    public List<GameRoom> findGamesForGameRoomType(@PathVariable String type) {
        return gameRoomService.findAllForGameRoomType(GameRoomType.valueOf(type));
    }


    @GetMapping("{id}/round")
    public Integer getCurrentRound(@PathVariable Long id) {
        return gameRoomService.getCurrentRoundForGameRoom(id);
    }

    @PostMapping("{id}/round/{round}")
    public GameRoom setCurrentRound(@PathVariable Long id, @PathVariable Integer round) {
        return gameRoomService.setCurrentRoundForGameRoom(id, round);
    }

    @GetMapping("{id}/start")
    public GameRoom startGame(@PathVariable Long id) {
        return gameRoomService.startGame(id);
    }

    @GetMapping("{id}/restart")
    public GameRoom restartGame(@PathVariable Long id) {
        return gameRoomService.restartGame(id);
    }

}
