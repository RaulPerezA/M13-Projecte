package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongodb.repository.RutinaDiaRepository;

@Service("RutinaDiaServiceBD")
public class RutinaDiaServiceBD {
	@Autowired
	private RutinaDiaRepository repositori;
}
	

