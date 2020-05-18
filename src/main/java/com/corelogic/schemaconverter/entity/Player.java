package com.corelogic.schemaconverter.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@javax.persistence.Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Player {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PlayerIdSeq")
    @SequenceGenerator(name = "PlayerIdSeq", sequenceName = "player_id_seq", allocationSize = 1)
    @Id
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private GameRoom gameRoom;

    private String name;
    private int score;

}

