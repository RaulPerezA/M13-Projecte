package com.spring.mongodb.resource;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.SecureRandom;
import java.security.Security;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.text.DateFormat;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;

import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import org.bouncycastle.crypto.PBEParametersGenerator;
import org.bouncycastle.crypto.generators.PKCS5S2ParametersGenerator;
import org.bouncycastle.crypto.params.KeyParameter;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
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
			@RequestParam String avatar) throws NoSuchAlgorithmException, InvalidKeySpecException {
		//Generamos algoritmo contraseña
		String passwordsegura=generateStorngPasswordHash(pw);
		System.out.println("Esta es la pass de ionic "+pw);
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

		Usuario user = new Usuario(nombre, apellidos, email, UserName, passwordsegura, date, peso, altura, avatar, hoy, hoy);

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
	public @ResponseBody boolean login(@RequestParam String user, @RequestParam String pw)
			throws NoSuchAlgorithmException, InvalidKeySpecException {
		boolean b;

		// System.out.println("Pasa por el login");

		Optional<Usuario> email = repository.findByEmail(user);
		Optional<Usuario> uname = repository.findByuserName(user);

		if (email.isPresent()) {
			b = (email.get().getContraseña().equals(pw) ? true : false);
			return b;
		}

		if (uname.isPresent()) {

			System.out.println("Password que viene de ionic " + pw);
			
			boolean logueado=validatePassword(pw, uname.get().getContraseña());
			System.out.println("La logueacion ha dado:");
			System.out.println(logueado);
			return logueado;
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
		public @ResponseBody Usuario editUser(@RequestParam String usuario, @RequestParam String nombre, @RequestParam String apellidos,
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
				return user;
			}

			return null;

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
/*
	public static byte[] getSHA(String input) throws NoSuchAlgorithmException {
		// Static getInstance method is called with hashing SHA
		MessageDigest md = MessageDigest.getInstance("SHA-256");

		// digest() method called
		// to calculate message digest of an input
		// and return array of byte
		return md.digest(input.getBytes(StandardCharsets.UTF_8));
	}

	public static String toHexString(byte[] hash) {
		// Convert byte array into signum representation
		BigInteger number = new BigInteger(1, hash);

		// Convert message digest into hex value
		StringBuilder hexString = new StringBuilder(number.toString(16));

		// Pad with leading zeros
		while (hexString.length() < 32) {
			hexString.insert(0, '0');
		}

		return hexString.toString();
	}
*/
	// Aqui creamos el Hash de la contraseña hacia la BD mongo, previamente
	// encriptada en ionic con SHA-256
	private static String generateStorngPasswordHash(String password)
			throws NoSuchAlgorithmException, InvalidKeySpecException {
		int iterations = 1000;
		char[] chars = password.toCharArray();
		byte[] salt = getSalt();

		PBEKeySpec spec = new PBEKeySpec(chars, salt, iterations, 64 * 8);
		SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
		byte[] hash = skf.generateSecret(spec).getEncoded();
		return iterations + ":" + toHex(salt) + ":" + toHex(hash);
	}

	private static byte[] getSalt() throws NoSuchAlgorithmException {
		SecureRandom sr = SecureRandom.getInstance("SHA1PRNG");
		byte[] salt = new byte[16];
		sr.nextBytes(salt);
		return salt;
	}

	private static String toHex(byte[] array) throws NoSuchAlgorithmException {
		BigInteger bi = new BigInteger(1, array);
		String hex = bi.toString(16);
		int paddingLength = (array.length * 2) - hex.length();
		if (paddingLength > 0) {
			return String.format("%0" + paddingLength + "d", 0) + hex;
		} else {
			return hex;
		}
	}
	
	//Deshasheando la contraseña de mongo
	private static boolean validatePassword(String originalPassword, String storedPassword) throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        String[] parts = storedPassword.split(":");
        int iterations = Integer.parseInt(parts[0]);
        byte[] salt = fromHex(parts[1]);
        byte[] hash = fromHex(parts[2]);
         
        PBEKeySpec spec = new PBEKeySpec(originalPassword.toCharArray(), salt, iterations, hash.length * 8);
        SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        byte[] testHash = skf.generateSecret(spec).getEncoded();
         
        int diff = hash.length ^ testHash.length;
        for(int i = 0; i < hash.length && i < testHash.length; i++)
        {
            diff |= hash[i] ^ testHash[i];
        }
        return diff == 0;
    }
    private static byte[] fromHex(String hex) throws NoSuchAlgorithmException
    {
        byte[] bytes = new byte[hex.length() / 2];
        for(int i = 0; i<bytes.length ;i++)
        {
            bytes[i] = (byte)Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
        }
        return bytes;
    }
	
	
	
	

}
