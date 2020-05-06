package com.spring.mongodb.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Usuario;
import com.spring.mongodb.repository.UsuarioRepository;

@RestController
public class UsuarioController {
	@Autowired
	private UsuarioRepository repository;
	
	@PostMapping("/addUsuario")
	public String saveUsuario(@RequestBody Usuario user) {
		repository.save(user);
		return "Usuario "+user+" añadido";
	}

	@GetMapping("/findAllUsuarios")
	public List<Usuario> getUsuarios(){
		return repository.findAll();
	}
	
	
	@GetMapping("/findOneUsuarios/{id}")
	public Optional<Usuario> getUsuario(@PathVariable String id) {
		Optional<Usuario> user = repository.findById(id);
		if (user.isPresent())
			return user;
		else {
			return null;
		}
	}
	
	@GetMapping("/deleteOneUsuario/{id}")
	public String deleteUsuario(@PathVariable String id) {
		Optional<Usuario> user = repository.findById(id);
		repository.deleteById(id);
		return "Usuario "+user+" eliminado";
	}

}
