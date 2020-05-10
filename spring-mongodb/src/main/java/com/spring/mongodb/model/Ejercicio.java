package com.spring.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "Ejercicio")
public class Ejercicio {
	@Id
	private String _id;
	private String ejercicio;
	private String imagen;
	private String video;
	private String descripcion;
	private String dificultad;
	private String especificacion;
	private String grupoMuscular;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getEjercicio() {
		return ejercicio;
	}
	public void setEjercicio(String ejercicio) {
		this.ejercicio = ejercicio;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getDificultad() {
		return dificultad;
	}
	public void setDificultad(String dificultad) {
		this.dificultad = dificultad;
	}
	public String getEspecificacion() {
		return especificacion;
	}
	public void setEspecificacion(String especificacion) {
		this.especificacion = especificacion;
	}
	public String getGrupoMuscular() {
		return grupoMuscular;
	}
	public void setGrupoMuscular(String grupoMuscular) {
		this.grupoMuscular = grupoMuscular;
	}
	
	public Ejercicio(String ejercicio, String imagen, String video, String descripcion, String dificultad,
			String especificacion, String grupoMuscular) {
		super();
		this.ejercicio = ejercicio;
		this.imagen = imagen;
		this.video = video;
		this.descripcion = descripcion;
		this.dificultad = dificultad;
		this.especificacion = especificacion;
		this.grupoMuscular = grupoMuscular;
	}
	
	@Override
	public String toString() {
		return "Ejercicio [_id=" + _id + ", ejercicio=" + ejercicio + ", imagen=" + imagen + ", video=" + video
				+ ", descripcion=" + descripcion + ", dificultad=" + dificultad + ", especificacion=" + especificacion
				+ ", grupoMuscular=" + grupoMuscular + "]";
	}

	

}
