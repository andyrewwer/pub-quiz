package com.corelogic.schemaconverter.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import static org.assertj.core.api.Assertions.assertThat;


@RunWith(MockitoJUnitRunner.class)
public class GameRoomServiceTest {
    private GameRoomService subject;

    @Test
    public void test_test() {
        subject = new GameRoomService(null);
        assertThat(subject.test()).isEqualTo("My siblings are Andrew, Ben and Sophie!!");
    }

}
