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

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/rutina/findDiaSeleccionado")
	public @ResponseBody RutinaDias getDiaSeleccionado(@RequestParam String idGeneral, @RequestParam String diaria) {

		Optional<RutinaDia> rd = repository.findById(idGeneral);

		if(rd.isPresent()) {
			
			for (RutinaDias rDias: rd.get().getRutinasDias()){
				if(rDias.getNombre().equals(diaria)) {
					return rDias;
				}
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
	public @ResponseBody RutinaDias saveExercices(@RequestParam String idGeneral, @RequestParam String diaria,
			@RequestParam String nombre, @RequestParam String ejercicio, @RequestParam int series, @RequestParam String modoEjercitar, @RequestParam String repeticionesSerie,
			@RequestParam String segundosSerie, @RequestParam int segundosDescanso) {

		Optional<RutinaDia> rd = repository.findById(idGeneral);
		int repeticionesS = 0;
		int segundosS = 0;
		Integer repsS = null;
		Integer segS = null;
		RutinaEjercicio rEjercicio = null;
		RutinaDias dias = null;
		
		if (rd.isPresent()) {
			System.out.println("general encontrada");
			
			for (int i = 0; i<rd.get().getRutinasDias().size(); i++) {
				
				if(rd.get().getRutinasDias().get(i).getNombre().equals(diaria)) {
					
					System.out.println("Diaria encontrada " + diaria);
					
					System.out.println("TAMAÑO ====> " + rd.get().getRutinasDias().get(i).getEjercicios().size());
					System.out.println("EJERCICIOS ====> " + rd.get().getRutinasDias().get(i).getEjercicios());
					
					if(modoEjercitar.equals("repeticiones")) {
						
						
						repeticionesS = Integer.parseInt(repeticionesSerie);
						repsS = new Integer(repeticionesS);
						
						
						rEjercicio = new RutinaEjercicio(nombre,ejercicio,series,modoEjercitar,repsS,null,segundosDescanso);
						rd.get().getRutinasDias().get(i).getEjercicios().add(rEjercicio);
						
						System.out.println("ejercicios introducidos: " + rd.get().getRutinasDias().get(i).getEjercicios());
						
					}
					else if(modoEjercitar.equals("tiempo")) {
						
						segundosS = Integer.parseInt(segundosSerie);
						segS = new Integer(segundosS);					
						
						
						rEjercicio = new RutinaEjercicio(nombre,ejercicio,series,modoEjercitar,null,segS,segundosDescanso);
						rd.get().getRutinasDias().get(i).getEjercicios().add(rEjercicio);
						
						System.out.println("ejercicios introducidos: " + rd.get().getRutinasDias().get(i).getEjercicios());
						
					}
					dias = rd.get().getRutinasDias().get(i);
				
				}
				
			}
			
			RutinaDia rutinaDia = rd.get();
			
			System.out.println("RUTINA DIA FINAL: " + rutinaDia.toString());
			
			repository.save(rutinaDia);
			return dias;
			
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
    
    /*
     * Comprueba si la rutina que se le pasa por parametro esta activa, si lo esta la pone en false y acaba, 
     * si no lo esta comprueba si hay otra rutina activa, si no hay otra, pone esta a activa y acaba,
     * si hay otra activa desactiva la otra y activa esta.
     * Devuelve la lista de rutinas actualizadas.
     */
    @CrossOrigin(origins = "http://localhost:8100")
    @GetMapping(path = "/rutina/comprobeActiveRoutine")
    public @ResponseBody List<RutinaDia> comprobeActiveRoutine(@RequestParam String idGeneral) {
        System.out.println(idGeneral);
        Optional<RutinaDia> rut= repository.findById(idGeneral);
        if(rut.isPresent()) {
            RutinaDia rutOF=rut.get();
            if(rutOF.isActiva() ) {
                rutOF.setActiva(false);
            }
            else {
                List<RutinaDia> rutinasUsuario = repository.findByUserName(rutOF.getUserName());
                for(RutinaDia rd:rutinasUsuario) {
                    if(rd.isActiva()) {
                        rd.setActiva(false);
                        repository.save(rd);
                    }
                }
                rutOF.setActiva(true);
            }

            System.out.println(rutOF.toString());
            repository.save(rutOF);

            //volvemos a llamar al metodo findByUsername para que devuelva la lista ya actualizada!!!! 
            return repository.findByUserName(rutOF.getUserName());
        }
        return null;
    }
    

}
