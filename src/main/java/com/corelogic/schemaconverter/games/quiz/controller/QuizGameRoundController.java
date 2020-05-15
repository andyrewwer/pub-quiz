package com.corelogic.schemaconverter.games.quiz.controller;

import com.corelogic.schemaconverter.games.quiz.entity.QuizGameRound;
import com.corelogic.schemaconverter.games.quiz.service.QuizGameService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gameRound/quiz")
public class QuizGameRoundController {

    private final QuizGameService quizGameService;

    public QuizGameRoundController(QuizGameService quizGameService) {
        this.quizGameService = quizGameService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public QuizGameRound createGame(@RequestBody QuizGameRound gameRound) {
        return quizGameService.save(gameRound);
    }

    @GetMapping("gameRoomCode/{gameRoomId}/round/{round}")
    public List<QuizGameRound> findGamesInRound(@PathVariable Long round, @PathVariable Long gameRoomId) {
//        return quizGameService.findByGameRoomCodeAndRound(gameRoomId, round);
        return null;
    }

    @GetMapping("/gameRoom/{gameRoomId}")
    public List<QuizGameRound> findGamesInGameRoom(@PathVariable Long gameRoomId) {
        return quizGameService.findAllForGameRoom(gameRoomId);
    }

    @GetMapping("/player/{playerId}/gameRoom/{gameRoomId}")
    public List<QuizGameRound> findGamesForPlayerAndGameRoom(@PathVariable Long playerId, @PathVariable Long gameRoomId) {
        return quizGameService.findGamesForPlayerAndGameRoom(playerId, gameRoomId);
    }
}
