package com.spring.mongodb.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

public class Rutinas {
	private String nombre;
	private ArrayList<RutinaEjercicio> ejercicios;
	public Rutinas(String nombre, ArrayList<RutinaEjercicio> ejercicios) {
		super();
		this.nombre = nombre;
		this.ejercicios = ejercicios;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public ArrayList<RutinaEjercicio> getEjercicio() {
		return ejercicios;
	}
	public void setEjercicio(ArrayList<RutinaEjercicio> ejercicios) {
		this.ejercicios = ejercicios;
	}
	@Override
	public String toString() {
		return "Rutinas [nombre=" + nombre + ", ejercicio=" + ejercicios + "]";
	}
	
	

	
	
	
}
