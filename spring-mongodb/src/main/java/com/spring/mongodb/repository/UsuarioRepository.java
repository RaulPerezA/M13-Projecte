package com.spring.mongodb.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

	Optional<Usuario> findByEmail(String user);

	Optional<Usuario> findByuserName(String user);
	
}
