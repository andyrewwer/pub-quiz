package com.corelogic.schemaconverter.games.quiz.entity;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizGameRound {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "QuizGameRoundSeq")
    @SequenceGenerator(name = "QuizGameRoundSeq", sequenceName = "quiz_game_round_id_seq", allocationSize = 1)
    @Id
    private Long id;

    private Long round;

    @OneToOne
    private GameRoom gameRoom;

    @OneToOne
    private Player player;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer1;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer2;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer3;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer4;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer5;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer6;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer7;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer8;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer9;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answer10;

    @ManyToOne(cascade = CascadeType.ALL)
    private QuizAnswer answerTheme;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Transient
    private GameRoomType type = GameRoomType.QUIZ;
}

