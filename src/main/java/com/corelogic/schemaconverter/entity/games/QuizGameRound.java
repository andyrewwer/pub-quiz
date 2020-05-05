package com.corelogic.schemaconverter.entity.games;

import com.corelogic.schemaconverter.entity.Answer;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "game_round")
public class QuizGameRound extends AbstractGameRound {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GameRoundSeq")
    @SequenceGenerator(name = "GameRoundSeq", sequenceName = "game_round_id_seq", allocationSize = 1)
    @Id
    private Long id;

    private Long round;

    @OneToOne
    private Player player;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer1;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer2;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer3;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer4;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer5;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer6;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer7;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer8;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer9;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answer10;

    @ManyToOne(cascade = CascadeType.ALL)
    private Answer answerTheme;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Transient
    private GameRoomType type = GameRoomType.QUIZ;
    // TODO ARRAY INSTEAD OF LIST?
}

