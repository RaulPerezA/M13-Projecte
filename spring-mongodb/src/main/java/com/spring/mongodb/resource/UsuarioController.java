package com.spring.mongodb.resource;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
	 * Devuelve un boleano, si el usuario no existe lo añade en la base de datos y devuelve true, si el usuario existe devuelve false.
	 */
	@CrossOrigin(origins = "http://localhost:8100/")
    @GetMapping(path = "/Usuario/register")
    public @ResponseBody boolean addNewUser(@RequestParam String nombre, @RequestParam String apellidos,
            @RequestParam String email, @RequestParam String UserName, @RequestParam String pw,
            @RequestParam String birthdate, @RequestParam int peso, @RequestParam int altura,
            @RequestParam String avatar) {

		String pwEncrypt = null;
        Date hoy = new Date();
        try {
        	MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] passBytes = pw.getBytes();
            md.reset();
            byte[] digested = md.digest(passBytes);
            StringBuffer sb = new StringBuffer();
            for(int i=0;i<digested.length;i++){
                sb.append(Integer.toHexString(0xff & digested[i]));
            }
            pwEncrypt=sb.toString();
        } catch (NoSuchAlgorithmException ex) {
            System.out.println(ex);
        }
        //  ionic  2020-05-11T21:10:32.066 02:00
        //  bd    1997-12-16T23:00:00.000+00:00
       
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
        Date date = new Date();
        try {
        	date = formatter.parse(birthdate.replaceAll("T$", "T23:00:00.000+00:00"));
          //  System.out.println(date);
         //   System.out.println(formatter.format(date));

        } catch (ParseException e) {
            e.printStackTrace();
        }

        Usuario user = new Usuario(nombre, apellidos, email, UserName, pwEncrypt, date, peso, altura, avatar, hoy, hoy);

        Optional<Usuario> email1 = repository.findByEmail(user.getEmail());
        Optional<Usuario> uname = repository.findByuserName(user.getUserName());

        if (email1.isPresent() || uname.isPresent()) {
            return false;
        } 
            repository.save(user);
            return true;

    }
	
	
	
	/*
	 * Devuelve true si el usuario existe y si la contraseña al cifrar coincide con la correspondiente en la base de datos. 
	 */
	@CrossOrigin(origins = "http://localhost:8100/")
	@GetMapping("/Usuario/login")
	public @ResponseBody boolean login(@RequestParam String user, @RequestParam String pw) {
		boolean b;
		String pwEncrypt = null;
		try {
        	MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] passBytes = pw.getBytes();
            md.reset();
            byte[] digested = md.digest(passBytes);
            StringBuffer sb = new StringBuffer();
            for(int i=0;i<digested.length;i++){
                sb.append(Integer.toHexString(0xff & digested[i]));
            }
            pwEncrypt=sb.toString();
        } catch (NoSuchAlgorithmException ex) {
            System.out.println(ex);
        }
		Optional<Usuario> email = repository.findByEmail(user);
		Optional<Usuario> uname = repository.findByuserName(user);
		
		if (email.isPresent()) {
			b = (email.get().getContraseña().equals(pwEncrypt) ? true : false);
			return b;
		} 

		if (uname.isPresent()) {
			b = (uname.get().getContraseña().equals(pwEncrypt) ? true : false);
			return b;
		} 
		
		return false;
	}
	
	
	/*
	 * En la siguiente función añadir los campos para editar un usuario.
	 */
	/*@GetMapping("/Usuario/editUser")
	public Boolean editUser(){
		
		repository.save(user);
		return true;
	}
	
	*/
	
	
	@GetMapping("/Usuario/findOne/{id}")
	public Optional<Usuario> getUsuario(@PathVariable String id) {
		Optional<Usuario> user = repository.findById(id);
		if (user.isPresent())
			return user;
		else {
			return null;
		}
	}

	
	@GetMapping("/Usuario/findAll")
	public List<Usuario> getUsuarios(){
		return repository.findAll();
	}
	
	
	@GetMapping("/Usuario/deleteOne/{id}")
	public String deleteUsuario(@PathVariable String id) {
		Optional<Usuario> user = repository.findById(id);
		repository.deleteById(id);
		return "Usuario "+user+" eliminado";
	}

}
