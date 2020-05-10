package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongodb.repository.RecetaRepository;

@Service("RecetaServiceBD")
public class RecetaServiceBD {
	@Autowired
	private RecetaRepository repositori;

}
