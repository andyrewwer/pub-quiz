package com.corelogic.schemaconverter.games.quiz.repository;


import com.corelogic.schemaconverter.games.quiz.entity.QuizGameRound;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizGameRoundRepository extends JpaRepository<QuizGameRound, Long> {

    List<QuizGameRound> findAll();

    List<QuizGameRound> findByPlayerIdAndGameRoomId(Long playerId, Long gameRoomId);

    List<QuizGameRound> findAllByGameRoomId(Long gameRoomId);
}
