package com.corelogic.schemaconverter.games.imagine.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.util.List;

@javax.persistence.Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImagineIfQuestion {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ImagineIfQuestionSeq")
    @SequenceGenerator(name = "ImagineIfQuestionSeq", sequenceName = "imagine_if_question_id_seq", allocationSize = 1)
    @Id
    private Long id;

    private String question;
    private String answer1;
    private String answer2;
    private String answer3;
    private String answer4;
    private String answer5;
    private String answer6;

}

