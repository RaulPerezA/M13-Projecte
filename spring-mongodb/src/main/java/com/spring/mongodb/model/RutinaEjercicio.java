package com.spring.mongodb.model;

import java.util.Date;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.spring.mongodb.repository.UsuarioRepository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class RutinaEjercicio {
	private String nombre;
	private String ejercicio;
	private int series;
	private String modoEjercitar;
	@JsonInclude(Include.NON_NULL)
	private Integer repeticionesSerie;
	@JsonInclude(Include.NON_NULL)
	private Integer segundosSerie;
	private int segundosDescanso;
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getEjercicio() {
		return ejercicio;
	}
	public void setEjercicio(String ejercicio) {
		this.ejercicio = ejercicio;
	}
	public int getSeries() {
		return series;
	}
	public void setSeries(int series) {
		this.series = series;
	}
	public String getModoEjercitar() {
		return modoEjercitar;
	}
	public void setModoEjercitar(String modoEjercitar) {
		this.modoEjercitar = modoEjercitar;
	}
	public Integer getRepeticionesSerie() {
		return repeticionesSerie;
	}
	public void setRepeticionesSerie(Integer repeticionesSerie) {
		this.repeticionesSerie = repeticionesSerie;
	}
	public Integer getSegundosSerie() {
		return segundosSerie;
	}
	public void setSegundosSerie(Integer segundosSerie) {
		this.segundosSerie = segundosSerie;
	}
	public int getSegundosDescanso() {
		return segundosDescanso;
	}
	public void setSegundosDescanso(int segundosDescanso) {
		this.segundosDescanso = segundosDescanso;
	}
	public RutinaEjercicio(String nombre, String ejercicio, int series, String modoEjercitar, Integer repeticionesSerie,
			Integer segundosSerie, int segundosDescanso) {
		super();
		this.nombre = nombre;
		this.ejercicio = ejercicio;
		this.series = series;
		this.modoEjercitar = modoEjercitar;
		this.repeticionesSerie = repeticionesSerie;
		this.segundosSerie = segundosSerie;
		this.segundosDescanso = segundosDescanso;
	}
	@Override
	public String toString() {
		return "RutinaEjercicio [nombre=" + nombre + ", ejercicio=" + ejercicio + ", series=" + series
				+ ", modoEjercitar=" + modoEjercitar + ", repeticionesSerie=" + repeticionesSerie + ", segundosSerie="
				+ segundosSerie + ", segundosDescanso=" + segundosDescanso + "]";
	}

	


}
