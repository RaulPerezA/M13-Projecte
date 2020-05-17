package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Receta;
import com.spring.mongodb.model.RutinaDia;
import com.spring.mongodb.repository.RecetaRepository;
import com.spring.mongodb.repository.RutinaDiasRepository;

@RestController
public class RutinaDiaController {
	@Autowired
	private RutinaDiasRepository repository;

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path ="/rutina/findAll")
	public List<RutinaDia> getRecetas(){
		return repository.findAll();
	}
	
	

}
