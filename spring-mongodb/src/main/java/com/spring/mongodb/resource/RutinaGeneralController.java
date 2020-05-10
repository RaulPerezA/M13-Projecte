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
import com.spring.mongodb.model.RutinaGeneral;
import com.spring.mongodb.repository.RutinaDiaRepository;
import com.spring.mongodb.repository.RutinaGeneralRepository;

@RestController
public class RutinaGeneralController {
	@Autowired
	private RutinaGeneralRepository repository;
	
	@Autowired
	private RutinaDiaRepository DiaRepository;	
	
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
	
	/*
	 * Devuelve todas las rutinas generales tiene creado un usuario.
	 */
	
	@GetMapping("/RutinaGeneral/findRutinaForUser")
	public List<RutinaGeneral> getDiasUsuario(@RequestParam String user) {
		List<RutinaGeneral> dias = repository.findByusuario(new ObjectId(user));
		return dias;
	}
	
	/*
	 * Devuelve una lista con las rutinas creadas de los dias que hay en la rutina general pasada por request. 
	 */
	
	@GetMapping("/RutinaGeneral/findDiasForUser")
	public List<Optional<RutinaDia>> getDias(@RequestParam String rutina) {
		Optional<RutinaGeneral> RutinaGeneral = repository.findById(rutina);
		List<Optional<RutinaDia>> dias= new ArrayList<Optional<RutinaDia>>() ;
		if (RutinaGeneral.isPresent()) {
			for (String dia:RutinaGeneral.get().getRutinasDias()) {
				Optional<RutinaDia> rut=DiaRepository.findById(dia);
				//ejercicios=RutEjerRepository.add(rut);
				if (rut.isPresent()) {
					dias.add(rut);
				}
			}
			return dias;
		}
		return null;
	}
	
	@GetMapping("/RutinaGeneral/deleteOne/{id}")
	public String deleteRutinaGeneral(@PathVariable String id) {
		Optional<RutinaGeneral> RutinaGeneral = repository.findById(id);
		repository.deleteById(id);
		return "Rutina General "+RutinaGeneral+" eliminada";
	}

}
