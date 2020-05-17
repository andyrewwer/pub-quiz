package com.corelogic.schemaconverter.games.imagine.service;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import com.corelogic.schemaconverter.games.imagine.repository.ImagineIfGameRoundRepository;
import com.corelogic.schemaconverter.games.imagine.repository.ImagineIfQuestionRepository;
import com.corelogic.schemaconverter.service.GameRoomService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ImagineIfQuestionService {

    private final ImagineIfQuestionRepository questionRepository;

    @Autowired
    public ImagineIfQuestionService(ImagineIfQuestionRepository imagineIfQuestionRepository) {
        this.questionRepository = imagineIfQuestionRepository;
    }

    public ImagineIfQuestion getQuestion(long questionId) {
        return questionRepository.findOne(questionId);
    }

    public long generateNewQuestionId() {
        return (int) (Math.random() * (questionRepository.count())) + 1;
    }

    public ImagineIfQuestion save(ImagineIfQuestion question) {
        return questionRepository.save(question);
    }

    public List<ImagineIfQuestion> findAll() {
        return questionRepository.findAll();
    }
}
