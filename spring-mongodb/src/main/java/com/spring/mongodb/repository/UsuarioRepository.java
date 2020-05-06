package com.spring.mongodb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.mongodb.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

}
