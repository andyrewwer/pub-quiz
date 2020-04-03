package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.entity.Answer;
import com.corelogic.schemaconverter.repository.AnswerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    @Autowired
    public AnswerService(AnswerRepository answer) {
        this.answerRepository = answer;
    }

    public Answer save(Answer answer) {
        return answerRepository.save(answer);
    }

    public Answer findById(Long id) { return answerRepository.findOne(id); }

    public List<Answer> findAll() { return answerRepository.findAll(); }

}
