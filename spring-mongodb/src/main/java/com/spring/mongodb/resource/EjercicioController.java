package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Ejercicio;
import com.spring.mongodb.repository.EjercicioRepository;


@RestController
public class EjercicioController {
	@Autowired
	private EjercicioRepository repository;
	
	@PostMapping("/addEjercicio")
	public String saveUsuario(@RequestBody Ejercicio Ejercicio) {
		repository.save(Ejercicio);
		return "Ejercicio "+Ejercicio+" añadido";
	}

	@GetMapping("/findAllEjercicios")
	public List<Ejercicio> getEjercicios(){
		return repository.findAll();
	}
	
	
	@GetMapping("/findOneEjercicio/{id}")
	public Optional<Ejercicio> getEjercicio(@PathVariable String id) {
		Optional<Ejercicio> Ejercicio = repository.findById(id);
		if (Ejercicio.isPresent())
			return Ejercicio;
		else {
			return null;
		}
	}
	
	@GetMapping("/deleteOneEjercicio/{id}")
	public String deleteEjercicio(@PathVariable String id) {
		Optional<Ejercicio> Ejercicio = repository.findById(id);
		repository.deleteById(id);
		return "Ejercicio "+Ejercicio+" eliminado";
	}

}
