package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongodb.repository.RutinaGeneralRepository;

@Service("RutinaGeneralServiceBD")
public class RutinaGeneralServiceBD {
	@Autowired
	private RutinaGeneralRepository repositori;
}
