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
	private String Usuario;
	private int Num_dias;
	private List<String> Rutinas_dias;
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
	public int getNum_dias() {
		return Num_dias;
	}
	public void setNum_dias(int num_dias) {
		Num_dias = num_dias;
	}
	public List<String> getRutinas_dias() {
		return Rutinas_dias;
	}
	public void setRutinas_dias(List<String> rutinas_dias) {
		Rutinas_dias = rutinas_dias;
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
		return "RutinaGeneral [_id=" + _id + ", Usuario=" + Usuario + ", Num_dias=" + Num_dias + ", Rutinas_dias="
				+ Rutinas_dias + ", Fecha_creacion=" + Fecha_creacion + ", Fecha_modificacion=" + Fecha_modificacion
				+ "]";
	}
	public RutinaGeneral(String _id, String usuario, int num_dias, List<String> rutinas_dias, Date fecha_creacion,
			Date fecha_modificacion) {
		super();
		this._id = _id;
		Usuario = usuario;
		Num_dias = num_dias;
		Rutinas_dias = rutinas_dias;
		Fecha_creacion = fecha_creacion;
		Fecha_modificacion = fecha_modificacion;
	}
	
	
}
