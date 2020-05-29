import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  public API = 'http://localhost:9003';
  public EDIT = this.API + '/Usuario/edituser';

  constructor(private http: HttpClient) { }

  //Método que nos permite guardar los campos editados en la base de datos.
  editUser(user:string, name:string, surnames:string, height:number, weight:number) {
    return this.http.get(this.EDIT+"?usuario="+user+"&nombre="+name+"&apellidos="+surnames+"&altura="+height+"&peso="+weight);
  }

}
