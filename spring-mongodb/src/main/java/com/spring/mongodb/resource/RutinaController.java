package com.spring.mongodb.resource;


import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.mongodb.model.Rutina;
import com.spring.mongodb.model.Usuario;
import com.spring.mongodb.repository.RutinaRepository;
import com.spring.mongodb.repository.UsuarioRepository;

@RestController
public class RutinaController {
	@Autowired
	private RutinaRepository repository;	
	MongoTemplate mongoTemplate;
	

	@CrossOrigin(origins = "http://localhost:8100/")
	@GetMapping("/rutina/findAll")
	public List<Rutina> getUsuarios(){
		return repository.findAll();
	}
	


}
