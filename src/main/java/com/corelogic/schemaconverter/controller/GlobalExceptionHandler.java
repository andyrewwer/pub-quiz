package com.corelogic.schemaconverter.controller;

import com.corelogic.schemaconverter.dto.error.GameRoomNotFoundException;
import com.corelogic.schemaconverter.dto.error.InvalidSetRoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(GameRoomNotFoundException.class)
    public ResponseEntity handleGameRoomNotFoundException(GameRoomNotFoundException gameRoomNotFoundException) throws DataIntegrityViolationException {

        return new ResponseEntity<>(gameRoomNotFoundException.getMessage(), HttpStatus.PRECONDITION_FAILED);
    }

    @ExceptionHandler(InvalidSetRoundException.class)
    public ResponseEntity handleInvalidSetRoundException(InvalidSetRoundException gameRoomNotFoundException) throws DataIntegrityViolationException {

        return new ResponseEntity<>(gameRoomNotFoundException.getMessage(), HttpStatus.PRECONDITION_FAILED);
    }

}
