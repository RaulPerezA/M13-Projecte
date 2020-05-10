package com.spring.mongodb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.Receta;

public interface RecetaRepository extends MongoRepository<Receta, String>{

}
