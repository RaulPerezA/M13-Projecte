import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralRutineService {

  constructor(private http:HttpClient) { }

  public API = 'http://localhost:9003';
  public GENERAL = this.API + '/rutina/createGeneral';

  //Nos comunicamos con el controlador de spring para guardar la rutina general.
  saveGeneralRutine(user:string, nombre:string, activa:boolean) {
    return this.http.get(this.GENERAL+"?user="+user+"&nombre="+nombre+"&activa="+activa);
  }


}
