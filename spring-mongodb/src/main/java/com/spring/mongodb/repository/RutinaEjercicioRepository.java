package com.spring.mongodb.repository;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.RutinaEjercicio;
import com.spring.mongodb.model.Usuario;


public interface RutinaEjercicioRepository extends MongoRepository<RutinaEjercicio, String> {
	List<RutinaEjercicio> findByNombre(String name);
	
	List<RutinaEjercicio> findByusuario(ObjectId usu);
	
	//List<RutinaEjercicio> findByUsuario_id(String id);
}
