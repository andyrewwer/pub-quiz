package com.corelogic.schemaconverter.dto.error;

public class GameRoomNotFoundException extends RuntimeException {

    public GameRoomNotFoundException(String message) {
        super(message);
    }

}
