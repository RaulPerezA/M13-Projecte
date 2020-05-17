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
import com.spring.mongodb.repository.RecetaRepository;

@RestController
public class RecetaController {
	@Autowired
	private RecetaRepository repository;
	
	@PostMapping("/Receta/add")
	public String saveReceta(@RequestBody Receta Receta) {
		repository.save(Receta);
		return "Receta "+Receta+" añadido";
	}

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/Receta/findAll")
	public List<Receta> getRecetas(){
		return repository.findAll();
	}
	
	@GetMapping("/Receta/findOne/{id}")
	public Optional<Receta> getReceta(@PathVariable String id) {
		Optional<Receta> receta = repository.findById(id);
		if (receta.isPresent())
			return receta;
		else {
			return null;
		}
	}
	
	@GetMapping("/Receta/deleteOne/{id}")
	public String deleteReceta(@PathVariable String id) {
		Optional<Receta> Receta = repository.findById(id);
		repository.deleteById(id);
		return "Receta "+Receta+" eliminado";
	}

}
