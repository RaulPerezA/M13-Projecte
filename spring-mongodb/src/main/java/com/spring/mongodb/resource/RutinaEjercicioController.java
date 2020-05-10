package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Ejercicio;
import com.spring.mongodb.model.RutinaEjercicio;
import com.spring.mongodb.repository.EjercicioRepository;
import com.spring.mongodb.repository.RutinaEjercicioRepository;

@RestController
public class RutinaEjercicioController {
	@Autowired
	private RutinaEjercicioRepository repository;
	@Autowired
	private EjercicioRepository Ejerciciorepository;

	@PostMapping("/RutinaEjercicio/add")
	public String saveRutina(@RequestBody RutinaEjercicio Ejercicio) {
		repository.save(Ejercicio);
		return "Ejercicio " + Ejercicio + " añadido";
	}

	@GetMapping("/RutinaEjercicio/findAll")
	public List<RutinaEjercicio> getRutinaEjercicios() {
		return repository.findAll();
	}

	@GetMapping("/RutinaEjercicio/findOne/{id}")
	public Optional<RutinaEjercicio> getRutinaEjercicio(@PathVariable String id) {
		Optional<RutinaEjercicio> Ejercicio = repository.findById(id);
		if (Ejercicio.isPresent())
			return Ejercicio;
		else {
			return null;
		}
	}

	@GetMapping("/RutinaEjercicio/deleteOne/{id}")
	public String deleteRutinaEjercicio(@PathVariable String id) {
		Optional<RutinaEjercicio> Ejercicio = repository.findById(id);
		repository.deleteById(id);
		return "Ejercicio " + Ejercicio + " eliminado";
	}
	
	
	/*
	 * Devuelve una lista con todas las rutinas de los ejercicios que tiene creado un usuario. 
	 */
	@GetMapping("/RutinaEjercicio/findExercisesForUser")
	public List<RutinaEjercicio> getEjerciciosUsuario(@RequestParam String user) {
		List<RutinaEjercicio> ejercicios = repository.findByusuario(new ObjectId(user));
		return ejercicios;
	}
	
	/*
	 * Devuelve el ejercicio que se esta ejecutando
	 */
	@GetMapping("/RutinaEjercicio/findEjercicio")
	public Optional<Ejercicio> getEjercicio(@RequestParam String ejercicio) {
		return Ejerciciorepository.findById(ejercicio);
	}
}
