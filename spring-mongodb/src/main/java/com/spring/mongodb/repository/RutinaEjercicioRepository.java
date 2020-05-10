package com.spring.mongodb.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.RutinaEjercicio;

public interface RutinaEjercicioRepository extends MongoRepository<RutinaEjercicio, String> {
	List<RutinaEjercicio> findByNombre(String name);
	
	List<RutinaEjercicio> findByusuario(ObjectId usu);
	
	Optional<RutinaEjercicio> findByEjercicio(ObjectId ejercicio);
	
	//ArrayList<Optional<RutinaEjercicio>> add(Optional<RutinaEjercicio> rut);
	//Ejercicio findById(ObjectId ejercicio);
	//List<RutinaEjercicio> findByUsuario_id(String id);
}
