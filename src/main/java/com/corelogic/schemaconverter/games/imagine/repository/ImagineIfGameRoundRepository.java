package com.corelogic.schemaconverter.games.imagine.repository;


import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfGameRound;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImagineIfGameRoundRepository extends JpaRepository<ImagineIfGameRound, Long> {

    List<ImagineIfGameRound> findAllByGameRoomId(long gameRoomId);
    List<ImagineIfGameRound> findByPlayerIdAndGameRoomId(long playerId, long gameRoomId);
    List<ImagineIfGameRound> findByGameRoomIdAndRound(long gameRoomId, int round);

    ImagineIfGameRound findByPlayerIdAndRound(Long playerId, int round);
}
