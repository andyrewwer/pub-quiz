package com.corelogic.schemaconverter.games.imagine.controller;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import com.corelogic.schemaconverter.games.imagine.service.ImagineIfGameService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gameRound/imagine")
public class ImagineGameRoundController {

    private final ImagineIfGameService imagineIfGameService;

    public ImagineGameRoundController(ImagineIfGameService imagineIfGameService) {
        this.imagineIfGameService = imagineIfGameService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ImagineIfGameRound save(@RequestBody ImagineIfGameRound gameRound) {
        return imagineIfGameService.save(gameRound);
    }

    @GetMapping("/question/{questionId}")
    public ImagineIfQuestion findQuestionById(@PathVariable long questionId) {
        return imagineIfGameService.getQuestion(questionId);
    }
    @GetMapping("/questions")
    public List<ImagineIfQuestion> findAllQuestions() {
        return imagineIfGameService.findAllQuestions();
    }

    @GetMapping("/question/gameRoom/{gameRoomId}")
    public ImagineIfQuestion findQuestionByGameRoom(@PathVariable long gameRoomId) {
        return imagineIfGameService.getQuestionByGameRoom(gameRoomId);
    }

    @PostMapping("/question")
    public ImagineIfQuestion createNewQuestion(@RequestBody ImagineIfQuestion question) {
        return imagineIfGameService.saveQuestion(question);
    }

    @GetMapping("gameRoom/{gameRoomId}/round/{round}")
    public List<ImagineIfGameRound> findGamesInRound(@PathVariable Long gameRoomId, @PathVariable int round) {
        return imagineIfGameService.findByGameRoomIdAndRound(gameRoomId, round);
    }

    @GetMapping("/gameRoom/{gameRoomId}")
    public List<ImagineIfGameRound> findGamesInGameRoom(@PathVariable Long gameRoomId) {
        return imagineIfGameService.findAllGamesForGameRoom(gameRoomId);
    }

    @GetMapping("/player/{playerId}/gameRoom/{gameRoomId}")
    public List<ImagineIfGameRound> findGamesForPlayerAndGameRoom(@PathVariable Long playerId, @PathVariable Long gameRoomId) {
        return imagineIfGameService.findGamesForPlayerAndGameRoom(playerId, gameRoomId);
    }

    @GetMapping("/player/{playerId}/round/{round}")
    public ImagineIfGameRound findGamesForPlayerAndRound(@PathVariable Long playerId, @PathVariable int round) {
        return imagineIfGameService.findGamesForPlayerAndRound(playerId, round);
    }
}
