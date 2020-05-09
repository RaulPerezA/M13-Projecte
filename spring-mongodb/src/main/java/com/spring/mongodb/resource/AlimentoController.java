package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Alimento;
import com.spring.mongodb.repository.AlimentoRepository;

@RestController
public class AlimentoController {
	@Autowired
	private AlimentoRepository repository;
	
	@PostMapping("/Alimento/add")
	public String saveAlimento(@RequestBody Alimento Alimento) {
		repository.save(Alimento);
		return "Alimento "+Alimento+" añadido";
	}

	@GetMapping("/Alimento/findAll")
	public List<Alimento> getAlimentos(){
		return repository.findAll();
	}
	
	
	@GetMapping("/Alimento/findOne/{id}")
	public Optional<Alimento> getAlimento(@PathVariable String id) {
		Optional<Alimento> Alimento = repository.findById(id);
		if (Alimento.isPresent())
			return Alimento;
		else {
			return null;
		}
	}
	
	@GetMapping("/Alimento/deleteOne/{id}")
	public String deleteAlimento(@PathVariable String id) {
		Optional<Alimento> Alimento = repository.findById(id);
		repository.deleteById(id);
		return "Alimento "+Alimento+" eliminado";
	}

}
