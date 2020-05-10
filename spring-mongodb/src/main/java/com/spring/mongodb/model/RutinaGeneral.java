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

@Document(collection="RutinaGeneral")
public class RutinaGeneral {
	@Id
	private String _id;
	private String nombre;
	private String usuario;
	private List<String> rutinasDias;
	private Date Fecha_creacion;
	private Date Fecha_modificacion;
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
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public List<String> getRutinasDias() {
		return rutinasDias;
	}
	public void setRutinasDias(List<String> rutinasDias) {
		this.rutinasDias = rutinasDias;
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
	public RutinaGeneral(String nombre, String usuario, List<String> rutinasDias, Date Fecha_creacion,
			Date Fecha_modificacion) {
		super();
		this.nombre = nombre;
		this.usuario = usuario;
		this.rutinasDias = rutinasDias;
		this.Fecha_creacion = Fecha_creacion;
		this.Fecha_modificacion = Fecha_modificacion;
	}
	@Override
	public String toString() {
		return "RutinaGeneral [_id=" + _id + ", nombre=" + nombre + ", usuario=" + usuario + ", rutinasDias="
				+ rutinasDias + ", Fecha_creacion=" + Fecha_creacion + ", Fecha_modificacion=" + Fecha_modificacion
				+ "]";
	}
	
	
	
}
