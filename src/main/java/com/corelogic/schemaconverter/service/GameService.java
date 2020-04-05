package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.entity.Answer;
import com.corelogic.schemaconverter.entity.GameRound;
import com.corelogic.schemaconverter.repository.GameRoundRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class GameService {
    private final GameRoundRepository gameRoundRepository;

    @Autowired
    public GameService(GameRoundRepository gameRoundRepository) {
        this.gameRoundRepository = gameRoundRepository;
    }

    public GameRound save(GameRound gameRound) {
        log.info("GR {}", gameRound);
        if (gameRound.getAnswer1() == null) {
            gameRound.setAnswer1(new Answer());
        }
        if (gameRound.getAnswer2() == null) {
            gameRound.setAnswer2(new Answer());
        }
        if (gameRound.getAnswer3() == null) {
            gameRound.setAnswer3(new Answer());
        }
        if (gameRound.getAnswer4() == null) {
            gameRound.setAnswer4(new Answer());
        }
        if (gameRound.getAnswer5() == null) {
            gameRound.setAnswer5(new Answer());
        }
        if (gameRound.getAnswer6() == null) {
            gameRound.setAnswer6(new Answer());
        }
        if (gameRound.getAnswer7() == null) {
            gameRound.setAnswer7(new Answer());
        }
        if (gameRound.getAnswer8() == null) {
            gameRound.setAnswer8(new Answer());
        }
        if (gameRound.getAnswer9() == null) {
            gameRound.setAnswer9(new Answer());
        }
        if (gameRound.getAnswer10() == null) {
            gameRound.setAnswer10(new Answer());
        }
        if (gameRound.getAnswerTheme() == null) {
            gameRound.setAnswerTheme(new Answer());
        }
//        TODO CHECK IF game already exists based on player & round
        return gameRoundRepository.save(gameRound);
    }

    public GameRound findById(Long id) { return gameRoundRepository.findOne(id); }

    public List<GameRound> findAll() { return gameRoundRepository.findAll(); }

    public List<GameRound> findByRound(Long round) { return gameRoundRepository.findByRound(round); }

    public List<GameRound> findGamesForPlayer(Long playerId) {
        return gameRoundRepository.findByPlayerId(playerId);
    }

    public List<GameRound> findGamesForPlayerAndRound(Long playerId, Long gameRoomId) {
        return gameRoundRepository.findByPlayerIdAndPlayerGameRoomId(playerId, gameRoomId);

    }
}
