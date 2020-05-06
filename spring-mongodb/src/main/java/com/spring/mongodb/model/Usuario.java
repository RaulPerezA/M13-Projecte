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

@Document(collection="Usuario")
public class Usuario {
	@Id
	private String _id;
	private String Nombre;
	private String Apellidos;
	private String Email;
	private Date Fecha_nacimiento;
	private int Peso;
	private int Altura;
	private Date Fecha_creacion;
	private Date Fecha_modificacion;
	
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getNombre() {
		return Nombre;
	}
	public void setNombre(String nombre) {
		Nombre = nombre;
	}
	public String getApellidos() {
		return Apellidos;
	}
	public void setApellidos(String apellidos) {
		Apellidos = apellidos;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public Date getFecha_nacimiento() {
		return Fecha_nacimiento;
	}
	public void setFecha_nacimiento(Date fecha_nacimiento) {
		Fecha_nacimiento = fecha_nacimiento;
	}
	public int getPeso() {
		return Peso;
	}
	public void setPeso(int peso) {
		Peso = peso;
	}
	public int getAltura() {
		return Altura;
	}
	public void setAltura(int altura) {
		Altura = altura;
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
	
	
	public Usuario(String _id, String Nombre, String Apellidos, String Email, Date Fecha_nacimiento,int Peso, int Altura, Date Fecha_creacion, Date Fecha_modificacion) {
		super();
		this._id = _id;
		this.Nombre = Nombre;
		this.Apellidos = Apellidos;
		this.Email=Email;
		this.Fecha_nacimiento = Fecha_nacimiento;
		this.Peso = Peso;
		this.Altura = Altura;
		this.Fecha_creacion=Fecha_creacion;
		this.Fecha_modificacion=Fecha_modificacion;
		
	}
	@Override
	public String toString() {
		return "Usuario [_id=" + _id + ", Nombre=" + Nombre + ", Apellidos=" + Apellidos + ", Email=" + Email
				+ ", Fecha_nacimiento=" + Fecha_nacimiento + ", Peso=" + Peso + ", Altura=" + Altura
				+ ", Fecha_creacion=" + Fecha_creacion + ", Fecha_modificacion=" + Fecha_modificacion + "]";
	}
	
	
	
}
