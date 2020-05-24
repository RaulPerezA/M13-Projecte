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
	private String receta;
	private List<String> alimentos;
	private String explicacion;
	private String tipoReceta;
	private String calorias;
	private String imagen;
	private Date Fecha_creacion;
	private Date Fecha_modificacion;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getReceta() {
		return receta;
	}
	public void setReceta(String receta) {
		this.receta = receta;
	}
	public List<String> getAlimentos() {
		return alimentos;
	}
	public void setAlimentos(List<String> alimentos) {
		this.alimentos = alimentos;
	}
	public String getExplicacion() {
		return explicacion;
	}
	public void setExplicacion(String explicacion) {
		this.explicacion = explicacion;
	}
	public String getTipoReceta() {
		return tipoReceta;
	}
	public void setTipoReceta(String tipoReceta) {
		this.tipoReceta = tipoReceta;
	}
	public String getCalorias() {
		return calorias;
	}
	public void setCalorias(String calorias) {
		this.calorias = calorias;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
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
	public Receta(String receta, List<String> alimentos, String explicacion, String tipoReceta, String calorias,
			String imagen, Date Fecha_creacion, Date Fecha_modificacion) {
		super();
		this.receta = receta;
		this.alimentos = alimentos;
		this.explicacion = explicacion;
		this.tipoReceta = tipoReceta;
		this.calorias = calorias;
		this.imagen = imagen;
		this.Fecha_creacion = Fecha_creacion;
		this.Fecha_modificacion = Fecha_modificacion;
	}
	@Override
	public String toString() {
		return "Receta [_id=" + _id + ", receta=" + receta + ", alimentos=" + alimentos + ", explicacion=" + explicacion
				+ ", tipoReceta=" + tipoReceta + ", calorias=" + calorias + ", imagen=" + imagen + ", Fecha_creacion="
				+ Fecha_creacion + ", Fecha_modificacion=" + Fecha_modificacion + "]";
	}
	
	
	
	
	
}
