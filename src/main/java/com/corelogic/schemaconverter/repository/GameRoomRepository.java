package com.corelogic.schemaconverter.repository;


import com.corelogic.schemaconverter.entity.GameRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRoomRepository extends JpaRepository<GameRoom, Long> {

    GameRoom findByCode(String code);
}
