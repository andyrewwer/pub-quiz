package com.corelogic.schemaconverter.entity;

import com.corelogic.schemaconverter.entity.enums.GameRoomStatus;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
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
    @Enumerated(EnumType.STRING)
    private GameRoomType type;
    private String name;
    private Integer round;
    @Enumerated(EnumType.STRING)
    private GameRoomStatus status;

    private long question;
    private long playerId;
}

