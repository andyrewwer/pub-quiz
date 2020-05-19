package com.corelogic.schemaconverter.repository;


import com.corelogic.schemaconverter.entity.GameRoom;
import com.corelogic.schemaconverter.entity.enums.GameRoomStatus;
import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRoomRepository extends JpaRepository<GameRoom, Long> {

    GameRoom findByCode(String code);

    List<GameRoom> findByTypeAndStatusAndTimeRemainingGreaterThanEqual(GameRoomType type, GameRoomStatus created, int timeRemaining);
}
