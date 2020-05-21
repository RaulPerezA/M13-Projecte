package com.spring.mongodb.resource;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Receta;
import com.spring.mongodb.model.RutinaDia;
import com.spring.mongodb.model.RutinaDias;
import com.spring.mongodb.repository.RecetaRepository;
import com.spring.mongodb.repository.RutinaDiasRepository;

@RestController
public class RutinaDiaController {
	@Autowired
	private RutinaDiasRepository repository;

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path ="/rutina/findAll")
	public List<RutinaDia> getRutinas(){
		return repository.findAll();
	}

	/*
	 * Devuelve todas las rutinas de un usuario
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path ="/rutina/findRutinasUser")
	public List<RutinaDia> getRutinasOneUser(@RequestParam String user){
		return repository.findByUserName(user);
	}
	
	/*
	 * Devuelve la rutina activa de un usuario
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path ="/rutina/findRutinaUserActiva")
	public @ResponseBody Optional<RutinaDia> getRutinaOneUserActiva(@RequestParam String user){

		List<RutinaDia> rutinasUser= repository.findByUserName(user);
		
		for (RutinaDia rd: rutinasUser) {
			if(rd.isActiva()) {
				return repository.findById(rd.get_id());
			}
			
		}
		return null;
	}
	
	
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path ="/rutina/findDiaEjercicio")
	public @ResponseBody RutinaDias getDiaEjercicio(@RequestParam String user, @RequestParam int posicion){
		
		List<RutinaDia> rutinasUser= repository.findByUserName(user);
		
		for (RutinaDia rg: rutinasUser) {
			if(rg.isActiva()) {
				return rg.getRutinasDias().get(posicion);
			}
			
		}
		return null;
	}
	
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path ="/rutina/createGeneral")
	public @ResponseBody RutinaDia createGeneral(@RequestParam String user, @RequestParam String nombre, @RequestParam boolean activa){
		
		boolean activated = false;
		
		List<RutinaDia> rutinasUser= repository.findByUserName(user);
		
		for (RutinaDia rutinaDia : rutinasUser) {
			if(rutinaDia.isActiva()) {
				activated=true;
			}
		}
		
		if(activated==true) {
			activa=false;
		}
		
		Date hoy = new Date();
		ArrayList<RutinaDias> rutinaDias = new ArrayList<RutinaDias>();
		
		
		
		RutinaDia rDia = new RutinaDia(nombre,user,rutinaDias,activa,0,hoy,hoy);
		repository.save(rDia);
		return rDia;
	}
	
	

}
