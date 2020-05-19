package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Ejercicio;
import com.spring.mongodb.repository.EjercicioRepository;


@RestController
public class EjercicioController {
	@Autowired
	private EjercicioRepository repository;
	
	@PostMapping("/Ejercicio/add")
	public String saveEjercicio(@RequestBody Ejercicio Ejercicio) {
		repository.save(Ejercicio);
		return "Ejercicio "+Ejercicio+" añadido";
	}

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/Ejercicio/findAll")
	public List<Ejercicio> getEjercicios(){
		System.out.println("recoge los ejercicios");
		return repository.findAll();
	}
	
	
	/*
	 * Devuelve un ejercicio con el nombre que se le pasa por variable.
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/Ejercicio/findOneEjercicio")
	public Optional<Ejercicio> getEjercicioId(@RequestParam String nombre) {
		Optional<Ejercicio> Ejercicio = repository.findById(nombre);
		if (Ejercicio.isPresent())
			return Ejercicio;
		else {
			return null;
		}
	}
	
	/*
	 * Devuelve un ejercicio con el nombre que se le pasa por variable.
	 */
	@GetMapping("/Ejercicio/findOneNombre")
	public Optional<Ejercicio> getEjercicio(@RequestParam String nombre) {
		Optional<Ejercicio> Ejercicio = repository.findByEjercicio(nombre);
		if (Ejercicio.isPresent())
			return Ejercicio;
		else {
			return null;
		}
	}
	
	/*
	 * Devuelve una lista de los ejercicios segun la dificultad que se le pase por parametro.
	 */
	@GetMapping("/Ejercicio/findDificultad")
	public List<Ejercicio> getDificultadEjercicio(@RequestParam String dificultad) {
		return repository.findByDificultad(dificultad);
	}
	
	/*
	 * Devuelve una lista de los ejercicios segun el grupo muscular por el que se filtre.
	 */
	@GetMapping("/Ejercicio/findGrupoMuscular")
	public List<Ejercicio> getGrupoMuscularEjercicio(@RequestParam String GrupoMuscular) {
		return repository.findByGrupoMuscular(GrupoMuscular);
	}
	

	
	@GetMapping("/Ejercicio/deleteOne/{id}")
	public String deleteEjercicio(@PathVariable String id) {
		Optional<Ejercicio> Ejercicio = repository.findById(id);
		repository.deleteById(id);
		return "Ejercicio "+Ejercicio+" eliminado";
	}

}
