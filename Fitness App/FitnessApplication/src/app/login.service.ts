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
  
  constructor(private http: HttpClient) { }

  getLogin(username:string, password:string) {
    //username la inicial mayuscula, contraseña todo en minusculas
    // Hay que cifrar la contraseña para enviarlo de forma segura a la URL
    var SHA256 = require("crypto-js/sha256");
    return this.http.get(this.LOGIN+"?user="+username+"&pw="+SHA256(password).toString());
  }

  getLoginUser(email:string) {
    //username la inicial mayuscula, contraseña todo en minusculas
    console.log("Pasa por aqui");
    return this.http.get(this.USERDATA+"?email="+email);
  }

}
