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
	private String email;
	private String userName;
	private String Contraseña;
	private Date Fecha_nacimiento;
	private int Peso;
	private int Altura;
	private String Imagen;
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
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getContraseña() {
		return Contraseña;
	}
	public void setContraseña(String contraseña) {
		Contraseña = contraseña;
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
	public String getImagen() {
		return Imagen;
	}
	public void setImagen(String imagen) {
		Imagen = imagen;
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
	
	
	public Usuario(String Nombre, String Apellidos, String email, String userName, String Contraseña, Date Fecha_nacimiento,int Peso, int Altura, String Imagen, Date Fecha_creacion, Date Fecha_modificacion) {
		super();
		this.Nombre = Nombre;
		this.Apellidos = Apellidos;
		this.email=email;
		this.userName=userName;
		this.Contraseña=Contraseña;
		this.Fecha_nacimiento = Fecha_nacimiento;
		this.Peso = Peso;
		this.Altura = Altura;
		this.Imagen = Imagen;
		this.Fecha_creacion=Fecha_creacion;
		this.Fecha_modificacion=Fecha_modificacion;
	}
	
	
	@Override
	public String toString() {
		return "Usuario [_id=" + _id + ", Nombre=" + Nombre + ", Apellidos=" + Apellidos + ", email=" + email
				+ ", userName=" + userName + ", Contraseña=" + Contraseña + ", Fecha_nacimiento=" + Fecha_nacimiento
				+ ", Peso=" + Peso + ", Altura=" + Altura + ", Imagen=" + Imagen + ", Fecha_creacion=" + Fecha_creacion
				+ ", Fecha_modificacion=" + Fecha_modificacion + "]";
	}
}
