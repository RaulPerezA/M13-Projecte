package com.spring.mongodb.model;

import java.util.ArrayList;
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

@Document(collection="Rutina")
public class RutinaDia {
	@Id
	private String _id;
	private String nombre;
	private String userName;
	private ArrayList<RutinaDias> rutinasDias;
	private boolean activa;
	private int diaSeguimiento;
	private Date fechaCreacion;
	private Date fechaModificacion;
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
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public ArrayList<RutinaDias> getRutinasDias() {
		return rutinasDias;
	}
	public void setRutinasDias(ArrayList<RutinaDias> rutinasDias) {
		this.rutinasDias = rutinasDias;
	}
	public boolean isActiva() {
		return activa;
	}
	public void setActiva(boolean activa) {
		this.activa = activa;
	}
	public int getDiaSeguimiento() {
		return diaSeguimiento;
	}
	public void setDiaSeguimiento(int diaSeguimiento) {
		this.diaSeguimiento = diaSeguimiento;
	}
	public Date getFechaCreacion() {
		return fechaCreacion;
	}
	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}
	public Date getFechaModificacion() {
		return fechaModificacion;
	}
	public void setFechaModificacion(Date fechaModificacion) {
		this.fechaModificacion = fechaModificacion;
	}
	public RutinaDia(String nombre, String userName, ArrayList<RutinaDias> rutinasDias, boolean activa, int diaSeguimiento, Date fechaCreacion,
			Date fechaModificacion) {
		super();
		this.nombre = nombre;
		this.userName = userName;
		this.rutinasDias = rutinasDias;
		this.activa=activa;
		this.diaSeguimiento=diaSeguimiento;
		this.fechaCreacion = fechaCreacion;
		this.fechaModificacion = fechaModificacion;
	}
	
	
	
}
