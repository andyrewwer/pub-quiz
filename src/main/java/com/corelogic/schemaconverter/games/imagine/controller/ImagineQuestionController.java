package com.corelogic.schemaconverter.games.imagine.controller;

import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import com.corelogic.schemaconverter.games.imagine.service.ImagineIfGameService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gameRound/imagine")
public class ImagineQuestionController {

    private final ImagineIfGameService imagineIfGameService;

    public ImagineQuestionController(ImagineIfGameService imagineIfGameService) {
        this.imagineIfGameService = imagineIfGameService;
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
}
