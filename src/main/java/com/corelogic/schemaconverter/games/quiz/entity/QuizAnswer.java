package com.corelogic.schemaconverter.games.quiz.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@javax.persistence.Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizAnswer {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "QuizAnswerSeq")
    @SequenceGenerator(name = "QuizAnswerSeq", sequenceName = "quiz_answer_id_seq", allocationSize = 1)
    @Id
    private Long id;

    private String answer;

    private Boolean correct;
    private Boolean bonus;

}

