package com.corelogic.schemaconverter.games.quiz.service;

import com.corelogic.schemaconverter.games.quiz.entity.QuizAnswer;
import com.corelogic.schemaconverter.games.quiz.repository.QuizAnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizAnswerService {
    private final QuizAnswerRepository quizAnswerRepository;

    @Autowired
    public QuizAnswerService(QuizAnswerRepository answer) {
        this.quizAnswerRepository = answer;
    }

    public QuizAnswer save(QuizAnswer answer) {
        return quizAnswerRepository.save(answer);
    }

    public QuizAnswer findById(Long id) { return quizAnswerRepository.findOne(id); }

    public List<QuizAnswer> findAll() { return quizAnswerRepository.findAll(); }

}
