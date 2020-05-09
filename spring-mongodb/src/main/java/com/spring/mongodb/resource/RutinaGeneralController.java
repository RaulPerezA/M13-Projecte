package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.RutinaGeneral;
import com.spring.mongodb.repository.RutinaGeneralRepository;

@RestController
public class RutinaGeneralController {
	@Autowired
	private RutinaGeneralRepository repository;
	
	@PostMapping("/RutinaGeneral/add")
	public String saveRutinaGeneral(@RequestBody RutinaGeneral RutinaGeneral) {
		repository.save(RutinaGeneral);
		return "RutinaGeneral "+RutinaGeneral+" añadido";
	}

	@GetMapping("/RutinaGeneral/findAll")
	public List<RutinaGeneral> getRutinasGenerales(){
		return repository.findAll();
	}
	
	
	@GetMapping("/RutinaGeneral/findOne/{id}")
	public Optional<RutinaGeneral> getRutinaGeneral(@PathVariable String id) {
		Optional<RutinaGeneral> RutinaGeneral = repository.findById(id);
		if (RutinaGeneral.isPresent())
			return RutinaGeneral;
		else {
			return null;
		}
	}
	
	@GetMapping("/RutinaGeneral/deleteOne/{id}")
	public String deleteRutinaGeneral(@PathVariable String id) {
		Optional<RutinaGeneral> RutinaGeneral = repository.findById(id);
		repository.deleteById(id);
		return "Rutina General "+RutinaGeneral+" eliminada";
	}

}
