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
import com.spring.mongodb.model.RutinaEjercicio;
import com.spring.mongodb.repository.RecetaRepository;
import com.spring.mongodb.repository.RutinaDiasRepository;

@RestController
public class RutinaDiaController {
	@Autowired
	private RutinaDiasRepository repository;

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/findAll")
	public List<RutinaDia> getRutinas() {
		return repository.findAll();
	}

	/*
	 * Devuelve todas las rutinas de un usuario
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/findRutinasUser")
	public List<RutinaDia> getRutinasOneUser(@RequestParam String user) {
		return repository.findByUserName(user);
	}

	/*
	 * Devuelve la rutina activa de un usuario
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/findRutinaUserActiva")
	public @ResponseBody Optional<RutinaDia> getRutinaOneUserActiva(@RequestParam String user) {

		List<RutinaDia> rutinasUser = repository.findByUserName(user);

		for (RutinaDia rd : rutinasUser) {
			if (rd.isActiva()) {
				return repository.findById(rd.get_id());
			}

		}
		return null;
	}

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/findDiaEjercicio")
	public @ResponseBody RutinaDias getDiaEjercicio(@RequestParam String user, @RequestParam int posicion) {

		List<RutinaDia> rutinasUser = repository.findByUserName(user);

		for (RutinaDia rg : rutinasUser) {
			if (rg.isActiva()) {
				return rg.getRutinasDias().get(posicion);
			}

		}
		return null;
	}

	/*
	 * Añade una rutina general con las rutinaDias vacia.
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/createGeneral")
	public @ResponseBody RutinaDia createGeneral(@RequestParam String user, @RequestParam String nombre,
			@RequestParam boolean activa) {

		boolean activated = false;

		List<RutinaDia> rutinasUser = repository.findByUserName(user);

		for (RutinaDia rutinaDia : rutinasUser) {
			if (rutinaDia.isActiva()) {
				activated = true;
			}
		}

		if (activated == true) {
			activa = false;
		}

		Date hoy = new Date();
		ArrayList<RutinaDias> rutinaDias = new ArrayList<RutinaDias>();

		RutinaDia rDia = new RutinaDia(nombre, user, rutinaDias, activa, 0, hoy, hoy);
		repository.save(rDia);
		return rDia;
	}

	/*
	 * Añade una rutina diaria a la rutina general.
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/createDaily")
	public @ResponseBody RutinaDias createDaily(@RequestParam String idGeneral, @RequestParam String name) {

		Optional<RutinaDia> rd = repository.findById(idGeneral);

		if (rd.isPresent()) {

			System.out.println("idGeneral " + idGeneral);
			System.out.println("nombre " + name);

			System.out.println("funciona la rutinaDia");
			ArrayList<RutinaEjercicio> ejercicios = new ArrayList<RutinaEjercicio>();
			ArrayList<RutinaDias> diarias = new ArrayList<RutinaDias>();
			// Rutina diaria
			RutinaDias rDiaria = new RutinaDias(name, ejercicios);
			// Array de diarias

			rd.get().getRutinasDias().add(rDiaria);

			// rd.get().setRutinasDias(rutinas);
			RutinaDia rutinaDia = rd.get();
			repository.save(rutinaDia);

			return rDiaria;
		}

		return null;
	}

	/*
	 * Añade un conjunto de ejercicios a una rutina diaria.
	 */

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/saveExercice")
	// @RequestParam Object ejercicios
	public @ResponseBody RutinaDia saveExercices(@RequestParam String idGeneral, @RequestParam String diaria,
			@RequestParam String nombre, @RequestParam String ejercicio, @RequestParam int series, @RequestParam String modoEjercitar, @RequestParam String repeticionesSerie,
			@RequestParam String segundosSerie, @RequestParam int segundosDescanso) {

		Optional<RutinaDia> rd = repository.findById(idGeneral);
		int repeticionesS = 0;
		int segundosS = 0;
		Integer repsS = null;
		Integer segS = null;
		RutinaEjercicio rEjercicio = null;
		
		if (rd.isPresent()) {
			System.out.println("general encontrada");
			
			for (int i = 0; i<rd.get().getRutinasDias().size(); i++) {
				
				if(rd.get().getRutinasDias().get(i).getNombre().equals(diaria)) {
					
					System.out.println("Diaria encontrada " + diaria);
					
					
					if(modoEjercitar.equals("repeticiones")) {
						
						System.out.println("<====== MODO REPETICIONES ======>");
						System.out.println("nombre " + nombre);
						System.out.println("ejercicio " + ejercicio);
						System.out.println("series " + series);
						System.out.println("modoEjercitar " + modoEjercitar);
						repeticionesS = Integer.parseInt(repeticionesSerie);
						repsS = new Integer(repeticionesS);
						System.out.println("repeticionesSerie " + repsS);
						System.out.println("segundosDescanso " + segundosDescanso);
						
						rEjercicio = new RutinaEjercicio(nombre,ejercicio,series,modoEjercitar,repsS,null,segundosDescanso);
						rd.get().getRutinasDias().get(i).getEjercicios().add(rEjercicio);
						
					}
					else if(modoEjercitar.equals("tiempo")) {
						
						System.out.println("<====== MODO TIEMPO ======>");
						System.out.println("nombre " + nombre);
						System.out.println("ejercicio " + ejercicio);
						System.out.println("series " + series);
						System.out.println("modoEjercitar " + modoEjercitar);
						segundosS = Integer.parseInt(segundosSerie);
						segS = new Integer(segundosS);					
						System.out.println("segundosSerie " + segS);
						System.out.println("segundosDescanso " + segundosDescanso);
						
						rEjercicio = new RutinaEjercicio(nombre,ejercicio,series,modoEjercitar,null,segS,segundosDescanso);
						rd.get().getRutinasDias().get(i).getEjercicios().add(rEjercicio);
						
					}
					
					
					/*System.out.println("nombre " + nombre);
					System.out.println("ejercicio " + ejercicio);
					System.out.println("series " + series);
					System.out.println("modoEjercitar " + modoEjercitar);
					//repeticionesS = Integer.parseInt(repeticionesSerie);
					//repsS = new Integer(repeticionesS);
					//System.out.println("repeticionesSerie " + repsS);
					System.out.println("repeticionesSerie " + repeticionesSerie);
					//segundosS = Integer.parseInt(segundosSerie);
					//segS = new Integer(segundosS);					
					//System.out.println("segundosSerie " + segS);
					System.out.println("segundosSerie " + segundosSerie);
					System.out.println("segundosDescanso " + segundosDescanso);*/
				
				
				}
				
			}
			
			RutinaDia rutinaDia = rd.get();
			
			repository.save(rutinaDia);
			return rutinaDia;
			
		}

		return null;
	}

	/*
	 * Cambia y devuelve un dia mas de seguimiento de entrenamiento
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/cambiarDia")
	public @ResponseBody RutinaDia getChangeDay(@RequestParam String user) {

		List<RutinaDia> rutinasUser = repository.findByUserName(user);

		for (RutinaDia rd : rutinasUser) {
			if (rd.isActiva()) {
				if (rd.getDiaSeguimiento() + 1 < rd.getRutinasDias().size()) {
					rd.setDiaSeguimiento(rd.getDiaSeguimiento() + 1);
				} else {
					rd.setDiaSeguimiento(0);
				}
				repository.save(rd);
				return rd;
			}

		}
		return null;
	}

	/*
	 * Editar ejercicio de una rutina.
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/editarEjercicio")
	public @ResponseBody RutinaDia getEditExercice(@RequestParam String user, @RequestParam String idGeneral,
			@RequestParam String diaria, @RequestParam int posicion, @RequestParam String nombre,
			@RequestParam String modo, @RequestParam int series, @RequestParam Integer segundosSeries,
			@RequestParam int segundosDescanso, @RequestParam Integer repeticiones) {

		List<RutinaDia> rutinasUser = repository.findByUserName(user);

		RutinaDia rd = null;

		for (RutinaDia rutinaDia : rutinasUser) {
			for (RutinaDias rutinaDias : rutinaDia.getRutinasDias()) {
				if (rutinaDias.getNombre().equals(diaria)) {
					// rutinaDias.getEjercicios().get(posicion)
					if (modo.equals("repeticiones")) {
						rutinaDias.getEjercicios().get(posicion).setNombre(nombre);
						rutinaDias.getEjercicios().get(posicion).setModoEjercitar(modo);
						rutinaDias.getEjercicios().get(posicion).setRepeticionesSerie(repeticiones);
						rutinaDias.getEjercicios().get(posicion).setSeries(series);
						rutinaDias.getEjercicios().get(posicion).setSegundosDescanso(segundosDescanso);
						rutinaDias.getEjercicios().get(posicion).setSegundosSerie(null);
					} else if (modo.equals("tiempo")) {
						rutinaDias.getEjercicios().get(posicion).setNombre(nombre);
						rutinaDias.getEjercicios().get(posicion).setModoEjercitar(modo);
						rutinaDias.getEjercicios().get(posicion).setSeries(series);
						rutinaDias.getEjercicios().get(posicion).setSegundosSerie(segundosSeries);
						rutinaDias.getEjercicios().get(posicion).setSegundosDescanso(segundosDescanso);
						rutinaDias.getEjercicios().get(posicion).setRepeticionesSerie(null);
					}
					rd = rutinaDia;
				}
			}
		}

		repository.save(rd);

		return rd;
	}

	/*
	 * Devuelve los dias de una rutina general
	 */

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/getDaysOneRoutine")
	public @ResponseBody List<RutinaDias> getDaysOneRoutine(@RequestParam String idGeneral) {
		Optional<RutinaDia> rd = repository.findById(idGeneral);
		List<RutinaDias> rutinas = new ArrayList<RutinaDias>();
		if (rd.isPresent()) {
			rutinas = rd.get().getRutinasDias();
		}
		return rutinas;

	}

	/*
	 * Devuelve una rutina general que se le pasa la id por parametro
	 */

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/findRutinaId")
	public @ResponseBody Optional<RutinaDia> getRoutine(@RequestParam String idGeneral) {
		return repository.findById(idGeneral);
	}

	/*
     * Elimina la rutina general que se le pasa por id
     */
    @CrossOrigin(origins = "http://localhost:8100")
    @GetMapping(path = "/rutina/removeRoutineGeneralId")
    public @ResponseBody List<RutinaDia> removeRoutine(@RequestParam String idGeneral) {
        System.out.println(idGeneral);
        Optional<RutinaDia> rut= repository.findById(idGeneral);
        if(rut.isPresent()) {
            RutinaDia rutOF=rut.get();
            String user=rutOF.getUserName();
            System.out.println(rutOF.toString());
            repository.delete(rutOF);
            return repository.findByUserName(user);
        }
        return null;
       // repository.deleteById(idGeneral);
    }

}
