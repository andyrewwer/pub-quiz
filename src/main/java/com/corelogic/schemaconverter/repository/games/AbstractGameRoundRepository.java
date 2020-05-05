package com.corelogic.schemaconverter.repository.games;


import com.corelogic.schemaconverter.entity.games.AbstractGameRound;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import java.io.Serializable;
import java.util.List;
@NoRepositoryBean
public interface AbstractGameRoundRepository<T extends AbstractGameRound, ID extends Serializable>
        extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {

    List<T> findAll();
    List<T> findByRound(Long round);

    List<T> findByPlayerId(Long playerId);

    List<T> findByPlayerIdAndPlayerGameRoomId(Long playerId, Long gameRoomId);

    List<T> findAllByPlayerGameRoomId(Long gameRoomId);
}
