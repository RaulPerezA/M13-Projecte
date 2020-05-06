package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongodb.repository.UsuarioRepository;

@Service("UsuarioServiceBD")
public class UsuarioServiceBD {
	@Autowired
	private UsuarioRepository repositori;

	
}