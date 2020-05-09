package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.RutinaDia;
import com.spring.mongodb.repository.RutinaDiaRepository;

@RestController
public class RutinaDiaController {
	@Autowired
	private RutinaDiaRepository repository;
	
	@PostMapping("/RutinaDia/add")
	public String saveRutinaDia(@RequestBody RutinaDia RutinaDia) {
		repository.save(RutinaDia);
		return "Rutina de Dia "+RutinaDia+" añadido";
	}

	@GetMapping("/RutinaDia/findAll")
	public List<RutinaDia> getRutinaDia(){
		return repository.findAll();
	}
	
	@GetMapping("/RutinaDia/findOne/{id}")
	public Optional<RutinaDia> getRutinaDia(@PathVariable String id) {
		Optional<RutinaDia> RutinaDia = repository.findById(id);
		if (RutinaDia.isPresent())
			return RutinaDia;
		else {
			return null;
		}
	}
	
	@GetMapping("/RutinaDia/deleteOne/{id}")
	public String deleteRutinaDia(@PathVariable String id) {
		Optional<RutinaDia> RutinaDia = repository.findById(id);
		repository.deleteById(id);
		return "Usuario "+RutinaDia+" eliminado";
	}

}
