package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongodb.repository.RecetaRepository;
import com.spring.mongodb.repository.RutinaRepository;

@Service("RutinaServiceBD")
public class RutinaServiceBD {
	@Autowired
	private RutinaRepository repositori;

}
