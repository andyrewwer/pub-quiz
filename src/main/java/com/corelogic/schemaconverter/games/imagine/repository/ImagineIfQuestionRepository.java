package com.corelogic.schemaconverter.games.imagine.repository;


import com.corelogic.schemaconverter.games.imagine.entity.ImagineIfQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagineIfQuestionRepository extends JpaRepository<ImagineIfQuestion, Long> {

    long count();
}
