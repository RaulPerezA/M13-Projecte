package com.spring.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Alimento")
public class Alimento {
	@Id
	private String _id;
	private String Nombre;
	private int Calorias;
	private String Imagen;
	
}
