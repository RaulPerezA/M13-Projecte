package com.spring.mongodb.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.RutinaGeneral;

public interface RutinaGeneralRepository extends MongoRepository<RutinaGeneral, String>{

	List<RutinaGeneral> findByusuario(ObjectId usu);
}
