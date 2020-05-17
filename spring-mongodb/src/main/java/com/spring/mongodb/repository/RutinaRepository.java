package com.spring.mongodb.repository;

import java.util.List;

import javax.management.Query;

import org.springframework.data.annotation.QueryAnnotation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.Receta;
import com.spring.mongodb.model.Rutina;

public interface RutinaRepository extends MongoRepository<Rutina, String>{
	

}
