package com.spring.mongodb.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.RutinaDia;


public interface RutinaDiaRepository extends MongoRepository<RutinaDia, String> {
	List<RutinaDia> findByusuario(ObjectId usu);
}
