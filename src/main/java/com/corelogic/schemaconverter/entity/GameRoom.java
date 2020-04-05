package com.corelogic.schemaconverter.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GameRoom {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GameRoomSeq")
    @SequenceGenerator(name = "GameRoomSeq", sequenceName = "game_room_id_seq", allocationSize = 1)
    @Id
    private Long id;

    private String code;
    private String type; // TODO ENUM?
    private String name;
    private Integer round;
}

