import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from "./Objects/User";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public API = 'http://localhost:9003';
  public REGISTER = this.API + '/Usuario/register';
  
  constructor(private http: HttpClient) { }

  createRegister(user:User) {
    //username la inicial mayuscula, contraseña todo en minusculas
    return this.http.get(this.REGISTER+"?nombre="+user.getName()+"&apellidos="+user.getSurnames()+"&email="+user.getEmail()+"&UserName="+user.getUsername()+"&pw="+user.getPassword()+"&birthdate="+user.getBirthdate()+"&peso="+user.getWeight()+"&altura="+user.getHeight()+"&avatar=avatar");
  }

}