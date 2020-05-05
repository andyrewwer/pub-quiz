package com.corelogic.schemaconverter.config;

import com.corelogic.schemaconverter.entity.enums.GameRoomType;
import com.corelogic.schemaconverter.service.games.AbstractGameService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
public class GameRoomStrategyConfiguration {

    private final List<AbstractGameService> gameServices;

    public GameRoomStrategyConfiguration(List<AbstractGameService> gameServices) {
        this.gameServices = gameServices;
    }

    @Bean
    public Map<GameRoomType, AbstractGameService> gameRoomTypeServiceMap() {
        Map<GameRoomType, AbstractGameService> strategyMap = new HashMap<>();
        gameServices.forEach(strategy -> strategyMap.put(strategy.getGameRoomType(), strategy));

        return strategyMap;
    }
}
