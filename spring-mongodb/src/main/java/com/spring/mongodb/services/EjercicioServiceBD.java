package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongodb.repository.EjercicioRepository;

@Service("EjercicioServiceBD")
public class EjercicioServiceBD {
	@Autowired
	private EjercicioRepository repositori;
}
