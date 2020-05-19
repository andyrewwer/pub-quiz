package com.corelogic.schemaconverter.config;

import com.corelogic.schemaconverter.games.imagine.service.ImagineIfGameService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Slf4j
@Component
@Transactional
@EnableScheduling
public class SchedulerConfiguration {

    private final ImagineIfGameService imagineIfGameService;

    public SchedulerConfiguration(ImagineIfGameService imagineIfGameService) {
        this.imagineIfGameService = imagineIfGameService;
    }

    @Scheduled(cron = "0/5 * * * * *")
    public void test() {
        imagineIfGameService.updateTimersForAllGameRooms();
    }
}
