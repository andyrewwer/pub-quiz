package com.corelogic.schemaconverter.service;

import com.corelogic.schemaconverter.entity.Player;
import com.corelogic.schemaconverter.repository.PlayerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolationException;
import java.util.List;

@Service
@Slf4j
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player save(Player player) {
        try {
            // TODO CHECK ROOMCODE IS VALID
            return playerRepository.save(player);
        } catch (DataIntegrityViolationException e) {
            log.info(e.getMessage());
            // TODO CHECK ROOMATE CODE
            return findByName(player.getName());
        }
    }

    public Player findById(Long id) { return playerRepository.findOne(id); }
    public Player findByName(String name) { return playerRepository.findByName(name); }

    public List<Player> findAll() { return playerRepository.findAll(); }

}
