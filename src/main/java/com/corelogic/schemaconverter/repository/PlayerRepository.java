package com.corelogic.schemaconverter.repository;


import com.corelogic.schemaconverter.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    Player findByName(String name);
}
