package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spring.mongodb.repository.RutinaDiasRepository;

@Service("RutinaDiaServiceBD")
public class RutinaDiaServiceBD {
	@Autowired
	private RutinaDiasRepository repositori;
}

