package com.spring.mongodb.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="RutinaDia")
public class RutinaDia {
	@Id
	private String _id;
	private String Usuario;
	private List<String> Ejercicios;
	private Date Fecha_creacion;
	private Date Fecha_modificacion;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getUsuario() {
		return Usuario;
	}
	public void setUsuario(String usuario) {
		Usuario = usuario;
	}
	public List<String> getEjercicios() {
		return Ejercicios;
	}
	public void setEjercicios(List<String> ejercicios) {
		Ejercicios = ejercicios;
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
		return "RutinaDia [_id=" + _id + ", Usuario=" + Usuario + ", Ejercicios=" + Ejercicios + ", Fecha_creacion="
				+ Fecha_creacion + ", Fecha_modificacion=" + Fecha_modificacion + "]";
	}
	public RutinaDia(String _id, String usuario, List<String> ejercicios, Date fecha_creacion,
			Date fecha_modificacion) {
		super();
		this._id = _id;
		Usuario = usuario;
		Ejercicios = ejercicios;
		Fecha_creacion = fecha_creacion;
		Fecha_modificacion = fecha_modificacion;
	}
	
	
}
