import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from "./Objects/User";
import * as CryptoJS from 'crypto-js';
declare var require: any
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public API = 'http://localhost:9003';
  public REGISTER = this.API + '/Usuario/register';
  
  constructor(private http: HttpClient) { }

  //Método con el cual podremos insertar los datos del usuario registrado en la base de datos mediante el controlador de spring.
  createRegister(user:User) {
     // Hay que cifrar la contraseña para enviarlo de forma segura a la URL
     var SHA256 = require("crypto-js/sha256");
    return this.http.get(this.REGISTER+"?nombre="+user.getName()+"&apellidos="+user.getSurnames()+"&email="+user.getEmail()+"&UserName="+user.getUsername()+"&pw="+SHA256(user.getPassword())+"&birthdate="+user.getBirthdate()+"&peso="+user.getWeight()+"&altura="+user.getHeight()+"&avatar=avatar");
  }

}