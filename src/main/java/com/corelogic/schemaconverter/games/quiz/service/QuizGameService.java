package com.corelogic.schemaconverter.games.quiz.service;

import com.corelogic.schemaconverter.games.quiz.entity.QuizAnswer;
import com.corelogic.schemaconverter.games.quiz.entity.QuizGameRound;
import com.corelogic.schemaconverter.games.quiz.repository.QuizGameRoundRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class QuizGameService {

    private final QuizGameRoundRepository gameRoundRepository;

    @Autowired
    public QuizGameService(QuizGameRoundRepository gameRoundRepository) {
        this.gameRoundRepository = gameRoundRepository;
    }

    public QuizGameRound save(QuizGameRound gameRound) {
        log.info("GR {}", gameRound);
        if (gameRound.getAnswer1() == null) {
            gameRound.setAnswer1(new QuizAnswer());
        }
        if (gameRound.getAnswer2() == null) {
            gameRound.setAnswer2(new QuizAnswer());
        }
        if (gameRound.getAnswer3() == null) {
            gameRound.setAnswer3(new QuizAnswer());
        }
        if (gameRound.getAnswer4() == null) {
            gameRound.setAnswer4(new QuizAnswer());
        }
        if (gameRound.getAnswer5() == null) {
            gameRound.setAnswer5(new QuizAnswer());
        }
        if (gameRound.getAnswer6() == null) {
            gameRound.setAnswer6(new QuizAnswer());
        }
        if (gameRound.getAnswer7() == null) {
            gameRound.setAnswer7(new QuizAnswer());
        }
        if (gameRound.getAnswer8() == null) {
            gameRound.setAnswer8(new QuizAnswer());
        }
        if (gameRound.getAnswer9() == null) {
            gameRound.setAnswer9(new QuizAnswer());
        }
        if (gameRound.getAnswer10() == null) {
            gameRound.setAnswer10(new QuizAnswer());
        }
        if (gameRound.getAnswerTheme() == null) {
            gameRound.setAnswerTheme(new QuizAnswer());
        }
//        TODO CHECK IF game already exists based on player & gameroom & round
        return gameRoundRepository.save(gameRound);
    }

    public List<QuizGameRound> findAllForGameRoom(Long gameRoomId) {
        return gameRoundRepository.findAllByGameRoomId(gameRoomId);
    }

    public List<QuizGameRound> findGamesForPlayerAndGameRoom(Long playerId, Long gameRoomId) {
        return gameRoundRepository.findByPlayerIdAndGameRoomId(playerId, gameRoomId);
    }
}
