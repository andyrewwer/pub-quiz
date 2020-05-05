package com.corelogic.schemaconverter.service.games;

import com.corelogic.schemaconverter.entity.GameRound;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.repository.GameRoundRepository;

import java.util.List;

public abstract class AbstractGameService {
    private final GameRoundRepository gameRoundRepository;

    public AbstractGameService(GameRoundRepository gameRoundRepository) {
        this.gameRoundRepository = gameRoundRepository;
    }

    public abstract GameRound save(GameRound gameRound);

    public GameRound findById(Long id) { return gameRoundRepository.findOne(id); }

    public List<GameRound> findAll() { return gameRoundRepository.findAll(); }

    public List<GameRound> findByRound(Long round) { return gameRoundRepository.findByRound(round); }

    public List<GameRound> findGamesForPlayer(Long playerId) {
        return gameRoundRepository.findByPlayerId(playerId);
    }

    public List<GameRound> findGamesForPlayerAndRound(Long playerId, Long gameRoomId) {
        return gameRoundRepository.findByPlayerIdAndPlayerGameRoomId(playerId, gameRoomId);

    }

    public List<GameRound> findAllForGameRoom(Long gameRoomId) {
        return gameRoundRepository.findAllByPlayerGameRoomId(gameRoomId);
    }

    public abstract GameRoomType getGameRoomType();

}
