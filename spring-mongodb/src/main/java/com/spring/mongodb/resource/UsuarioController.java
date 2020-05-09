package com.spring.mongodb.resource;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Usuario;
import com.spring.mongodb.repository.UsuarioRepository;

@RestController
public class UsuarioController {
	@Autowired
	private UsuarioRepository repository;	
	
	// register
	@GetMapping(path = "/Usuario/register")
	public @ResponseBody String addNewUser(@RequestParam String nombre, @RequestParam String apellidos, @RequestParam String email,
			@RequestParam String UserName, @RequestParam String pw, @RequestParam String birthdate, @RequestParam int peso, 
			@RequestParam int altura, @RequestParam String avatar) {

		
		
		
		Date hoy=new Date();
		
		DateFormat objSDF = new SimpleDateFormat("YYYY-mm-dd"); 
		
		Date cumple = null;
		try {
			cumple = objSDF.parse(birthdate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
       
		Usuario user= new Usuario(nombre, apellidos, email, UserName, pw, cumple, peso, altura, avatar,hoy,hoy);
		repository.save(user);
		return "Usuario "+user+" añadido";
	

	}
	
	/*
	@PostMapping("/Usuario/add")
	public String saveUsuario(@RequestBody Usuario user) {
		repository.save(user);
		return "Usuario "+user+" añadido";
	}
*/
	
	
	// login
	@GetMapping("/Usuario/login")
	public @ResponseBody boolean login(@RequestParam String user, @RequestParam String pw) {
		boolean b;

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
		Optional<Usuario> u = repository.findById(user);
		if (u.isPresent()) {
			b = (u.get().getContraseña().equals(pw) ? true : false);
			return b;
		} else {
			return false;
		}
*/
	}
	
	@GetMapping("/Usuario/findAll")
	public List<Usuario> getUsuarios(){
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

	
	
	@GetMapping("/Usuario/deleteOne/{id}")
	public String deleteUsuario(@PathVariable String id) {
		Optional<Usuario> user = repository.findById(id);
		repository.deleteById(id);
		return "Usuario "+user+" eliminado";
	}

}
