package com.corelogic.schemaconverter.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@javax.persistence.Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameRound {

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

    // TODO ARRAY INSTEAD OF LIST?
}

