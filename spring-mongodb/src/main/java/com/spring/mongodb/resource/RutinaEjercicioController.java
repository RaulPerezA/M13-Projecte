package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.RutinaEjercicio;
import com.spring.mongodb.repository.RutinaEjercicioRepository;


@RestController
public class RutinaEjercicioController {
	@Autowired
	private RutinaEjercicioRepository repository;
	
	@PostMapping("/addRutinaEjercicio")
	public String saveRutina(@RequestBody RutinaEjercicio Ejercicio) {
		repository.save(Ejercicio);
		return "Ejercicio "+Ejercicio+" añadido";
	}

	@GetMapping("/findAllRutinaEjercicios")
	public List<RutinaEjercicio> getRutinaEjercicios(){
		return repository.findAll();
	}
	
	
	@GetMapping("/findOneRutinaEjercicio/{id}")
	public Optional<RutinaEjercicio> getRutinaEjercicio(@PathVariable String id) {
		Optional<RutinaEjercicio> Ejercicio = repository.findById(id);
		if (Ejercicio.isPresent())
			return Ejercicio;
		else {
			return null;
		}
	}
	
	@GetMapping("/deleteOneRutinaEjercicio/{id}")
	public String deleteRutinaEjercicio(@PathVariable String id) {
		Optional<RutinaEjercicio> Ejercicio = repository.findById(id);
		repository.deleteById(id);
		return "Ejercicio "+Ejercicio+" eliminado";
	}

}
