package com.corelogic.schemaconverter.repository;


import com.corelogic.schemaconverter.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    Player findByNameAndGameRoomId(String name, Long id);

    List<Player> findAllByGameRoomId(Long gameRoomId);

}
