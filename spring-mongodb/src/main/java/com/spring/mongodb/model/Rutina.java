package com.spring.mongodb.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Document(collection="Rutina")
public class Rutina {
	@Id
	private String _id;
	private String nombre;
	private String userName;
	private ArrayList<Rutinas> rutinasDias;
	private String fechaCreacion;
	private String fechaModificacion;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getUsername() {
		return userName;
	}
	public void setUsername(String userName) {
		this.userName = userName;
	}
	public ArrayList<Rutinas> getRutinasDias() {
		return rutinasDias;
	}
	public void setRutinasDias(ArrayList<Rutinas> rutinasDias) {
		this.rutinasDias = rutinasDias;
	}
	public String getFechaCreacion() {
		return fechaCreacion;
	}
	public void setFechaCreacion(String fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}
	public String getFechaModificacion() {
		return fechaModificacion;
	}
	public void setFechaModificacion(String fechaModificacion) {
		this.fechaModificacion = fechaModificacion;
	}
	public Rutina(String _id, String nombre, String userName, ArrayList<Rutinas> rutinasDias, String fechaCreacion,
			String fechaModificacion) {
		super();
		this._id = _id;
		this.nombre = nombre;
		this.userName = userName;
		this.rutinasDias = rutinasDias;
		this.fechaCreacion = fechaCreacion;
		this.fechaModificacion = fechaModificacion;
	}
	@Override
	public String toString() {
		return "Rutina [_id=" + _id + ", nombre=" + nombre + ", username=" + userName + ", rutinasDias=" + rutinasDias
				+ ", fechaCreacion=" + fechaCreacion + ", fechaModificacion=" + fechaModificacion + "]";
	}
	
	

	
	
	
}
