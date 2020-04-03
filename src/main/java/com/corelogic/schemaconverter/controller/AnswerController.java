package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.entity.Answer;
import com.corelogic.schemaconverter.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {

    private AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Answer createAnswer(@RequestBody Answer player) {
        return answerService.save(player);
    }

    @GetMapping("/{id}")
    public Answer findAnswer(@PathVariable Long id) {
        return answerService.findById(id);
    }

    @GetMapping()
    public List<Answer> findAnswers() {
        return answerService.findAll();
    }

}
