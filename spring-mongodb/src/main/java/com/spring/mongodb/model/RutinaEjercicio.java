package com.spring.mongodb.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="RutinaEjercicio")
public class RutinaEjercicio {
	@Id
	private String _id;
	private String Ejercicio;
	private String Usuario;
	private int Series;
	private String Modo_ejercitar;
	private int Repeticiones_serie;
	private int Segundos_serie;
	private int Segundos_descanso;
	private Date Fecha_creacion;
	private Date Fecha_modificacion;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getEjercicio() {
		return Ejercicio;
	}
	public void setEjercicio(String ejercicio) {
		Ejercicio = ejercicio;
	}
	public String getUsuario() {
		return Usuario;
	}
	public void setUsuario(String usuario) {
		Usuario = usuario;
	}
	public int getSeries() {
		return Series;
	}
	public void setSeries(int series) {
		Series = series;
	}
	public String getModo_ejercitar() {
		return Modo_ejercitar;
	}
	public void setModo_ejercitar(String modo_ejercitar) {
		Modo_ejercitar = modo_ejercitar;
	}
	public int getRepeticiones_serie() {
		return Repeticiones_serie;
	}
	public void setRepeticiones_serie(int repeticiones_serie) {
		Repeticiones_serie = repeticiones_serie;
	}
	public int getSegundos_serie() {
		return Segundos_serie;
	}
	public void setSegundos_serie(int segundos_serie) {
		Segundos_serie = segundos_serie;
	}
	public int getSegundos_descanso() {
		return Segundos_descanso;
	}
	public void setSegundos_descanso(int segundos_descanso) {
		Segundos_descanso = segundos_descanso;
	}
	public Date getFecha_creacion() {
		return Fecha_creacion;
	}
	public void setFecha_creacion(Date fecha_creacion) {
		Fecha_creacion = fecha_creacion;
	}
	public Date getFecha_modificacion() {
		return Fecha_modificacion;
	}
	public void setFecha_modificacion(Date fecha_modificacion) {
		Fecha_modificacion = fecha_modificacion;
	}
	@Override
	public String toString() {
		return "RutinaEjercicio [_id=" + _id + ", Ejercicio=" + Ejercicio + ", Usuario=" + Usuario + ", Series="
				+ Series + ", Modo_ejercitar=" + Modo_ejercitar + ", Repeticiones_serie=" + Repeticiones_serie
				+ ", Segundos_serie=" + Segundos_serie + ", Segundos_descanso=" + Segundos_descanso
				+ ", Fecha_creacion=" + Fecha_creacion + ", Fecha_modificacion=" + Fecha_modificacion + "]";
	}
	public RutinaEjercicio(String _id, String ejercicio, String usuario, int series, String modo_ejercitar,
			int repeticiones_serie, int segundos_serie, int segundos_descanso, Date fecha_creacion,
			Date fecha_modificacion) {
		super();
		this._id = _id;
		Ejercicio = ejercicio;
		Usuario = usuario;
		Series = series;
		Modo_ejercitar = modo_ejercitar;
		Repeticiones_serie = repeticiones_serie;
		Segundos_serie = segundos_serie;
		Segundos_descanso = segundos_descanso;
		Fecha_creacion = fecha_creacion;
		Fecha_modificacion = fecha_modificacion;
	}
	
	
	
}
