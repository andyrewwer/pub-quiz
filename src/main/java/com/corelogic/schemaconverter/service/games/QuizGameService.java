package com.corelogic.schemaconverter.service.games;

import com.corelogic.schemaconverter.entity.Answer;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.entity.games.QuizGameRound;
import com.corelogic.schemaconverter.repository.games.QuizGameRoundRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class QuizGameService extends AbstractGameService<QuizGameRound> {

    private final QuizGameRoundRepository gameRoundRepository;

    @Autowired
    public QuizGameService(QuizGameRoundRepository gameRoundRepository) {
        super(gameRoundRepository);
        this.gameRoundRepository = gameRoundRepository;
    }

    public QuizGameRound save(QuizGameRound gameRound) {
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
//        TODO CHECK IF game already exists based on player & gameroom & round
        return gameRoundRepository.save(gameRound);
    }

    public QuizGameRound findById(Long id) { return gameRoundRepository.findOne(id); }

    public List<QuizGameRound> findAll() { return gameRoundRepository.findAll(); }

    public List<QuizGameRound> findByRound(Long round) { return gameRoundRepository.findByRound(round); }

    public List<QuizGameRound> findGamesForPlayer(Long playerId) {
        return gameRoundRepository.findByPlayerId(playerId);
    }

    public List<QuizGameRound> findGamesForPlayerAndRound(Long playerId, Long gameRoomId) {
        return gameRoundRepository.findByPlayerIdAndPlayerGameRoomId(playerId, gameRoomId);

    }

    public List<QuizGameRound> findAllForGameRoom(Long gameRoomId) {
        return gameRoundRepository.findAllByPlayerGameRoomId(gameRoomId);
    }

    @Override
    public GameRoomType getGameRoomType() {
        return GameRoomType.QUIZ;
    }
}
