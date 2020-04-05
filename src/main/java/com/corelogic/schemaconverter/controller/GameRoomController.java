package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.entity.GameRoom;
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
    public GameRoom createGame(@RequestBody GameRoom player) {
        return gameRoomService.save(player);
    }

    @GetMapping("/{id}")
    public GameRoom findGame(@PathVariable Long id) {
        return gameRoomService.findById(id);
    }

    @GetMapping()
    public List<GameRoom> findGames() {
        return gameRoomService.findAll();
    }

}
