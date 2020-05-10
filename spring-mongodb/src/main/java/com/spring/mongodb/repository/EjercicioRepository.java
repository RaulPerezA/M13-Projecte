package com.spring.mongodb.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.Ejercicio;


public interface EjercicioRepository extends MongoRepository<Ejercicio, String> {
	Optional<Ejercicio> findByEjercicio(String ejercicio);
	List<Ejercicio> findByDificultad(String dificultad);
	List<Ejercicio> findByGrupoMuscular(String dificultad);
}

