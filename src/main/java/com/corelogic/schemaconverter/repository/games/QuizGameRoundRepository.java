package com.corelogic.schemaconverter.repository.games;


import com.corelogic.schemaconverter.entity.games.QuizGameRound;

import java.util.List;

public interface QuizGameRoundRepository extends AbstractGameRoundRepository<QuizGameRound, Long> {

    List<QuizGameRound> findAll();

    List<QuizGameRound> findByRound(Long round);

    List<QuizGameRound> findByPlayerId(Long playerId);

    List<QuizGameRound> findByPlayerIdAndPlayerGameRoomId(Long playerId, Long gameRoomId);

    List<QuizGameRound> findAllByPlayerGameRoomId(Long gameRoomId);
}
