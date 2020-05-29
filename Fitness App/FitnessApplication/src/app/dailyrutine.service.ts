import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DailyrutineService {

  constructor(private http:HttpClient) { }

  public API = 'http://localhost:9003';
  public DAILY = this.API + '/rutina/createDaily';


  //Hacemos una petición al controlador de spring para que guarde una rutina dia creada..
  saveDailyRutine(id:string, nombre:string) {
     return this.http.get(this.DAILY+"?idGeneral="+id+"&name="+nombre);
  }
  

}
