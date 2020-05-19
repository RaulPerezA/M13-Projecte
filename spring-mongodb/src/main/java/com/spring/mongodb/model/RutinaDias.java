package com.spring.mongodb.model;

import java.util.ArrayList;

public class RutinaDias {

	private String nombre;
	private ArrayList<RutinaEjercicio> ejercicios;
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public ArrayList<RutinaEjercicio> getEjercicios() {
		return ejercicios;
	}
	public void setEjercicios(ArrayList<RutinaEjercicio> ejercicios) {
		this.ejercicios = ejercicios;
	}
	public RutinaDias(String nombre, ArrayList<RutinaEjercicio> ejercicios) {
		super();
		this.nombre = nombre;
		this.ejercicios = ejercicios;
	}
	@Override
	public String toString() {
		return "RutinaDias [nombre=" + nombre + ", ejercicios=" + ejercicios + "]";
	}
	
}

