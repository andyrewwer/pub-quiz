package com.corelogic.schemaconverter.service.games;

import com.corelogic.schemaconverter.entity.games.AbstractGameRound;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.repository.games.AbstractGameRoundRepository;

import java.util.List;

public abstract class AbstractGameService <T extends AbstractGameRound> {
    private final AbstractGameRoundRepository gameRoundRepository;

    public AbstractGameService(AbstractGameRoundRepository gameRoundRepository) {
        this.gameRoundRepository = gameRoundRepository;
    }

    public abstract T save(T gameRound);

    public T findById(Long id) { return (T) gameRoundRepository.findOne(id); }

    public List<T> findAll() { return gameRoundRepository.findAll(); }

    public List<T> findByRound(Long round) { return gameRoundRepository.findByRound(round); }

    public List<T> findGamesForPlayer(Long playerId) {
        return gameRoundRepository.findByPlayerId(playerId);
    }

    public List<T> findGamesForPlayerAndRound(Long playerId, Long gameRoomId) {
        return gameRoundRepository.findByPlayerIdAndPlayerGameRoomId(playerId, gameRoomId);

    }

    public List<T> findAllForGameRoom(Long gameRoomId) {
        return gameRoundRepository.findAllByPlayerGameRoomId(gameRoomId);
    }

    public abstract GameRoomType getGameRoomType();

}
