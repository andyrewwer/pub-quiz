package com.corelogic.schemaconverter.repository;


import com.corelogic.schemaconverter.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    Player findByNameAndGameRoomIdAndActiveTrue(String name, Long id);
    Player findByNameAndGameRoomId(String name, Long id);

    List<Player> findAllByGameRoomIdAndActiveTrue(Long gameRoomId);

    List<Player> findAllByGameRoomIdAndActiveTrueOrderByScoreDesc(Long gameRoomId);

}
