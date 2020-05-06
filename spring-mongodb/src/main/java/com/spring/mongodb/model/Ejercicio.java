package com.spring.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Ejercicio")
public class Ejercicio {
	@Id
	private String _id;
	private String Nombre_Ejercicio;
	private String Imagen;
	private String Video;
	private String Descripcion;
	private String Dificultad;
	private String Especificacion;
	private String Grupo_Muscular;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getNombre_Ejercicio() {
		return Nombre_Ejercicio;
	}
	public void setNombre_Ejercicio(String nombre_Ejercicio) {
		Nombre_Ejercicio = nombre_Ejercicio;
	}
	public String getImagen() {
		return Imagen;
	}
	public void setImagen(String imagen) {
		Imagen = imagen;
	}
	public String getVideo() {
		return Video;
	}
	public void setVideo(String video) {
		Video = video;
	}
	public String getDescripcion() {
		return Descripcion;
	}
	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}
	public String getDificultad() {
		return Dificultad;
	}
	public void setDificultad(String dificultad) {
		Dificultad = dificultad;
	}
	public String getEspecificacion() {
		return Especificacion;
	}
	public void setEspecificacion(String especificacion) {
		Especificacion = especificacion;
	}
	public String getGrupo_Muscular() {
		return Grupo_Muscular;
	}
	public void setGrupo_Muscular(String grupo_Muscular) {
		Grupo_Muscular = grupo_Muscular;
	}
	public Ejercicio(String _id, String nombre_Ejercicio, String imagen, String video, String descripcion,
			String dificultad, String especificacion, String grupo_Muscular) {
		super();
		this._id = _id;
		Nombre_Ejercicio = nombre_Ejercicio;
		Imagen = imagen;
		Video = video;
		Descripcion = descripcion;
		Dificultad = dificultad;
		Especificacion = especificacion;
		Grupo_Muscular = grupo_Muscular;
	}
	
	public Ejercicio(String _id, String nombre_Ejercicio, String imagen, String video, String descripcion,
			String dificultad, String grupo_Muscular) {
		super();
		this._id = _id;
		Nombre_Ejercicio = nombre_Ejercicio;
		Imagen = imagen;
		Video = video;
		Descripcion = descripcion;
		Dificultad = dificultad;
		Grupo_Muscular = grupo_Muscular;
	}
	
	
	@Override
	public String toString() {
		return "Ejercicio [_id=" + _id + ", Nombre_Ejercicio=" + Nombre_Ejercicio + ", Imagen=" + Imagen + ", Video="
				+ Video + ", Descripcion=" + Descripcion + ", Dificultad=" + Dificultad + ", Especificacion="
				+ Especificacion + ", Grupo_Muscular=" + Grupo_Muscular + "]";
	}
	
	
	
}


