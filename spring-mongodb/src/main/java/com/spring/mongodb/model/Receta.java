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

@Document(collection="Receta")

public class Receta {
	@Id
	private String _id;
	private String Nombre_receta;
	private List<String> Alimentos;
	private String Explicacion;
	private int Calorias;
	private Date Fecha_creacion;
	private Date Fecha_modificacion;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getNombre_receta() {
		return Nombre_receta;
	}
	public void setNombre_receta(String nombre_receta) {
		Nombre_receta = nombre_receta;
	}
	public List<String> getAlimentos() {
		return Alimentos;
	}
	public void setAlimentos(List<String> alimentos) {
		Alimentos = alimentos;
	}
	public String getExplicacion() {
		return Explicacion;
	}
	public void setExplicacion(String explicacion) {
		Explicacion = explicacion;
	}
	public int getCalorias() {
		return Calorias;
	}
	public void setCalorias(int calorias) {
		Calorias = calorias;
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
		return "Receta [_id=" + _id + ", Nombre_receta=" + Nombre_receta + ", Alimentos=" + Alimentos + ", Explicacion="
				+ Explicacion + ", Calorias=" + Calorias + ", Fecha_creacion=" + Fecha_creacion
				+ ", Fecha_modificacion=" + Fecha_modificacion + "]";
	}
	public Receta(String _id, String nombre_receta, List<String> alimentos, String explicacion, int calorias,
			Date fecha_creacion, Date fecha_modificacion) {
		super();
		this._id = _id;
		Nombre_receta = nombre_receta;
		Alimentos = alimentos;
		Explicacion = explicacion;
		Calorias = calorias;
		Fecha_creacion = fecha_creacion;
		Fecha_modificacion = fecha_modificacion;
	}
	
	
	
}
