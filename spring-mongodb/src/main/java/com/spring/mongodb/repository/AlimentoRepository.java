package com.spring.mongodb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.Alimento;

public interface AlimentoRepository extends MongoRepository<Alimento, String>{

}
