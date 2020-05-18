package com.corelogic.schemaconverter.games.imagine.entity;

import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImagineIfGameRound {

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ImagineIfGameRoundSeq")
    @SequenceGenerator(name = "ImagineIfGameRoundSeq", sequenceName = "imagine_if_game_round_id_seq", allocationSize = 1)
    @Id
    private Long id;

    @OneToOne
    private GameRoom gameRoom;

    @OneToOne
    private Player player;

    private int round;

    private int answer;

    private int selectedPlayerId;

    @OneToOne
    private ImagineIfQuestion question;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Transient
    private GameRoomType type = GameRoomType.IMAGINE_IF;
}

