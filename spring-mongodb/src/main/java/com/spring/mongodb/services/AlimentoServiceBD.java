package com.spring.mongodb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mongodb.repository.AlimentoRepository;

@Service("AlimentoServiceBD")
public class AlimentoServiceBD {
	@Autowired
	private AlimentoRepository repositori;
}
