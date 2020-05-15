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

  editUser() {
    //username la inicial mayuscula, contraseña todo en minusculas
    console.log("pasa por el editUser");
    console.log(this.EDIT+"?usuario=register");
    return this.http.get(this.EDIT+"?usuario=register");
  }

}
