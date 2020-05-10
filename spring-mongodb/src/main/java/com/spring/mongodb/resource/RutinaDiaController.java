package com.spring.mongodb.resource;

import java.util.ArrayList;
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

import com.spring.mongodb.model.RutinaDia;
import com.spring.mongodb.model.RutinaEjercicio;
import com.spring.mongodb.repository.RutinaDiaRepository;
import com.spring.mongodb.repository.RutinaEjercicioRepository;

@RestController
public class RutinaDiaController {
	@Autowired
	private RutinaDiaRepository repository;
	
	@Autowired
	private RutinaEjercicioRepository RutEjerRepository;
	
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
	
	
	/*
	 * Devuelve una lista con todas las rutinas de los dias que tiene creado un usuario.
	 */
	@GetMapping("/RutinaDia/findRutinaForUser")
	public List<RutinaDia> getEjerciciosUsuario(@RequestParam String user) {
		List<RutinaDia> ejercicios = repository.findByusuario(new ObjectId(user));
		return ejercicios;
	}
	
	
	/*
	 * Devuelve una lista con las rutinas creadas de los ejercicios que hay en la rutina de dia pasada por parametro. 
	 */
	@GetMapping("/RutinaDia/findEjerciciosDiaForUser")
	public List<Optional<RutinaEjercicio>> getEjercicio(@RequestParam String rutina) {
		Optional<RutinaDia> RutinaDia = repository.findById(rutina);
		List<Optional<RutinaEjercicio>> ejercicios= new ArrayList<Optional<RutinaEjercicio>>() ;
		if (RutinaDia.isPresent()) {
			for (String ejercicio:RutinaDia.get().getEjercicios()) {
				Optional<RutinaEjercicio> rut=RutEjerRepository.findById(ejercicio);
				//ejercicios=RutEjerRepository.add(rut);
				if (rut.isPresent()) {
					ejercicios.add(rut);
				}
			}
			return ejercicios;
		}
		return null;
	}
	
	
	@GetMapping("/RutinaDia/deleteOne/{id}")
	public String deleteRutinaDia(@PathVariable String id) {
		Optional<RutinaDia> RutinaDia = repository.findById(id);
		repository.deleteById(id);
		return "Usuario "+RutinaDia+" eliminado";
	}

}
