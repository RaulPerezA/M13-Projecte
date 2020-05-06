package com.spring.mongodb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.Ejercicio;


public interface EjercicioRepository extends MongoRepository<Ejercicio, String> {

}

