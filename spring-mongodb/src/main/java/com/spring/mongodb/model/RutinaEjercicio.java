package com.spring.mongodb.model;

import java.util.Date;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.spring.mongodb.repository.UsuarioRepository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "RutinaEjercicio")
public class RutinaEjercicio {
	private UsuarioRepository repository;
	@Id
	private String _id;
	private String nombre;
	private String ejercicio;
	private String usuario;
	private int series;
	private String modo_ejercitar;
	private int repeticiones_serie;
	private int segundos_serie;
	private int segundos_descanso;
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

	public String getEjercicio() {
		return ejercicio;
	}

	public void setEjercicio(String ejercicio) {
		this.ejercicio = ejercicio;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public int getSeries() {
		return series;
	}

	public void setSeries(int series) {
		this.series = series;
	}

	public String getModo_ejercitar() {
		return modo_ejercitar;
	}

	public void setModo_ejercitar(String modo_ejercitar) {
		this.modo_ejercitar = modo_ejercitar;
	}

	public int getRepeticiones_serie() {
		return repeticiones_serie;
	}

	public void setRepeticiones_serie(int repeticiones_serie) {
		this.repeticiones_serie = repeticiones_serie;
	}

	public int getSegundos_serie() {
		return segundos_serie;
	}

	public void setSegundos_serie(int segundos_serie) {
		this.segundos_serie = segundos_serie;
	}

	public int getSegundos_descanso() {
		return segundos_descanso;
	}

	public void setSegundos_descanso(int segundos_descanso) {
		this.segundos_descanso = segundos_descanso;
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

	public RutinaEjercicio(String nombre, String ejercicio, String usuario, int series, String modo_ejercitar,
			int repeticiones_serie, int segundos_serie, int segundos_descanso, Date Fecha_creacion,
			Date Fecha_modificacion) {
		super();
		this.nombre = nombre;
		this.ejercicio = ejercicio;
		this.usuario = usuario;
		this.series = series;
		this.modo_ejercitar = modo_ejercitar;
		this.repeticiones_serie = repeticiones_serie;
		this.segundos_serie = segundos_serie;
		this.segundos_descanso = segundos_descanso;
		this.Fecha_creacion = Fecha_creacion;
		this.Fecha_modificacion = Fecha_modificacion;
	}

	@Override
	public String toString() {
		return "RutinaEjercicio [_id=" + _id + ", nombre=" + nombre + ", ejercicio=" + ejercicio + ", usuario="
				+ usuario + ", series=" + series + ", modo_ejercitar=" + modo_ejercitar + ", repeticiones_serie="
				+ repeticiones_serie + ", segundos_serie=" + segundos_serie + ", segundos_descanso=" + segundos_descanso
				+ ", Fecha_creacion=" + Fecha_creacion + ", Fecha_modificacion=" + Fecha_modificacion + "]";
	}

}
