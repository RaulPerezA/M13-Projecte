import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
    return this.http.get(this.LOGIN+"?user="+username+"&pw="+password);
  }

  getLoginUser(email:string) {
    //username la inicial mayuscula, contraseña todo en minusculas
    console.log("Pasa por aqui");
    return this.http.get(this.USERDATA+"?email="+email);
  }

}
