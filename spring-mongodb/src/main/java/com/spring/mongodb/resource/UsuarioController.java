package com.spring.mongodb.resource;


import java.text.DateFormat;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Usuario;
import com.spring.mongodb.repository.UsuarioRepository;

@RestController
public class UsuarioController {
	@Autowired
	private UsuarioRepository repository;

	/*
	 * Devuelve un boleano, si el usuario no existe lo añade en la base de datos y
	 * devuelve true, si el usuario existe devuelve false.
	 */
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping(path = "/Usuario/register")
	public @ResponseBody boolean addNewUser(@RequestParam String nombre, @RequestParam String apellidos,
			@RequestParam String email, @RequestParam String UserName, @RequestParam String pw,
			@RequestParam String birthdate, @RequestParam int peso, @RequestParam int altura,
			@RequestParam String avatar) {

		System.out.println("usuario registrado");

		System.out.println("birthdate: " + birthdate);

		Date hoy = new Date();
		// ionic 2020-05-11T21:10:32.066 02:00

		// bd 1997-12-16T23:00:00.000+00:00

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
		Date date = new Date();
		try {
			date = formatter.parse(birthdate.replaceAll("T$", "T23:00:00.000+00:00"));
			// System.out.println(date);
			// System.out.println(formatter.format(date));

		} catch (ParseException e) {
			e.printStackTrace();
		}

		Usuario user = new Usuario(nombre, apellidos, email, UserName, pw, date, peso, altura, avatar, hoy, hoy);

		Optional<Usuario> email1 = repository.findByEmail(user.getEmail());
		Optional<Usuario> uname = repository.findByuserName(user.getUserName());

		if (email1.isPresent() || uname.isPresent()) {
			return false;
		}
		repository.save(user);
		return true;

	}

	/*
	 * @CrossOrigin(origins = "http://localhost:8100")
	 * 
	 * @GetMapping("/Usuario/add") public String saveUsuario(@RequestBody Usuario
	 * user) { System.out.println("Usuario registrado: " + user);
	 * repository.save(user); return "Usuario "+user+" añadido"; }
	 */

	// login
	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/Usuario/login")
	public @ResponseBody boolean login(@RequestParam String user, @RequestParam String pw) {
		boolean b;

		// System.out.println("Pasa por el login");

		Optional<Usuario> email = repository.findByEmail(user);
		Optional<Usuario> uname = repository.findByuserName(user);

		if (email.isPresent()) {
			b = (email.get().getContraseña().equals(pw) ? true : false);
			return b;
		}

		if (uname.isPresent()) {
			b = (uname.get().getContraseña().equals(pw) ? true : false);
			return b;
		}

		return false;

		/*
		 * Optional<Usuario> u = repository.findById(user); if (u.isPresent()) { b =
		 * (u.get().getContraseña().equals(pw) ? true : false); return b; } else {
		 * return false; }
		 */
	}

	// Editar usuario
		@CrossOrigin(origins = "http://localhost:8100")
		@GetMapping("/Usuario/edituser")
		public @ResponseBody boolean editUser(@RequestParam String usuario, @RequestParam String nombre, @RequestParam String apellidos,
				@RequestParam int altura, @RequestParam int peso) {

			System.out.println("Pasa por el edit User");
			System.out.println("Usuario " + usuario);
			
			Optional<Usuario> uname = repository.findByuserName(usuario);

			System.out.println(uname.get());
			if (uname.isPresent()) {
				System.out.println("Usuario encontrado.");
				uname.get().setNombre(nombre);
				uname.get().setApellidos(apellidos);
				uname.get().setAltura(altura);
				uname.get().setPeso(peso);
				System.out.println(uname.get());
				Usuario user = uname.get();
				repository.save(user);
				return true;
			}

			return false;

			/*
			 * Optional<Usuario> u = repository.findById(user); if (u.isPresent()) { b =
			 * (u.get().getContraseña().equals(pw) ? true : false); return b; } else {
			 * return false; }
			 */
		}

	@GetMapping("/Usuario/findAll")
	public List<Usuario> getUsuarios() {
		return repository.findAll();
	}


	@GetMapping("/Usuario/findOne/{id}")
	public Optional<Usuario> getUsuario(@PathVariable String id) {
		Optional<Usuario> user = repository.findById(id);
		if (user.isPresent())
			return user;
		else {
			return null;
		}
	}

	@CrossOrigin(origins = "http://localhost:8100")
	@GetMapping("/Usuario/findOneEmail")
	public Optional<Usuario> getUsuarioEmail(@RequestParam String email) {
		System.out.println("Pasa por el email " + email);
		Optional<Usuario> user = repository.findByEmail(email);

		Optional<Usuario> username = repository.findByuserName(email);
		if (user.isPresent())
			return user;
		else if(username.isPresent())
			return username;
		else {
			return null;
		}
	}


	@GetMapping("/Usuario/deleteOne/{id}")
	public String deleteUsuario(@PathVariable String id) {
		Optional<Usuario> user = repository.findById(id);
		repository.deleteById(id);
		return "Usuario " + user + " eliminado";
	}

}
