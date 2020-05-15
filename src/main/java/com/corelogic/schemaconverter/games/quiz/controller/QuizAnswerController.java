package com.corelogic.schemaconverter.games.quiz.controller;

import com.corelogic.schemaconverter.games.quiz.entity.QuizAnswer;
import com.corelogic.schemaconverter.games.quiz.service.QuizAnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz/answers")
public class QuizAnswerController {

    private QuizAnswerService quizAnswerService;

    public QuizAnswerController(QuizAnswerService quizAnswerService) {
        this.quizAnswerService = quizAnswerService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public QuizAnswer createAnswer(@RequestBody QuizAnswer player) {
        return quizAnswerService.save(player);
    }

    @GetMapping("/{id}")
    public QuizAnswer findAnswer(@PathVariable Long id) {
        return quizAnswerService.findById(id);
    }

    @GetMapping()
    public List<QuizAnswer> findAnswers() {
        return quizAnswerService.findAll();
    }

}
