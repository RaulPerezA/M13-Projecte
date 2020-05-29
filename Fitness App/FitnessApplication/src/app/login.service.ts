import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
declare var require: any

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public API = 'http://localhost:9003';
  public LOGIN = this.API + '/Usuario/login';
  public USERDATA = this.API + '/Usuario/findOneEmail';
  private credentials: boolean = false;

  constructor(private http: HttpClient) { }

  //Método que nos permite validar el login y cifrar la contraseña que introduce el usuario.
  getLogin(username:string, password:string) {
    // Hay que cifrar la contraseña para enviarlo de forma segura a la URL
    var SHA256 = require("crypto-js/sha256");
    return this.http.get(this.LOGIN+"?user="+username+"&pw="+SHA256(password).toString());
  }
  
  getLoginUser(email:string) {
    //username la inicial mayuscula, contraseña todo en minusculas
    return this.http.get(this.USERDATA+"?email="+email);
  }

  //Método para guardar los datos del login en los campos de login (username y password), de esta forma el usuario no tendra que volver a escribirlos.
  saveCredentials(){
    this.credentials = !this.credentials;
  }

  resetCredentials() {
    this.credentials = false;
  }

  getSaveCredentials() {
    return this.credentials;
  }

}
