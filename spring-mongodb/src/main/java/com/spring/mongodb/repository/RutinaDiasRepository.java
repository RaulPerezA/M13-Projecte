package com.spring.mongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.RutinaDia;

public interface RutinaDiasRepository extends MongoRepository<RutinaDia, String> {
	List<RutinaDia> findByUserName(String user);
	
	//RutinaDia findByActiva(String user);
}