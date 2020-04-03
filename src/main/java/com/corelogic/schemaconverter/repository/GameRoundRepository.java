package com.corelogic.schemaconverter.repository;


import com.corelogic.schemaconverter.entity.GameRound;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRoundRepository extends JpaRepository<GameRound, Long> {
    List<GameRound> findByRound(Long round);

    List<GameRound> findByPlayerId(Long playerId);
}
