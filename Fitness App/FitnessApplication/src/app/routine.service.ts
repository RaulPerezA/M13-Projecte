import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rutina } from "./Objects/Rutina";
@Injectable({
  providedIn: 'root'
})
export class RoutineService {


  public API = 'http://localhost:9003';
  public RUTINAS = this.API + '/rutina/findAll';
  
  constructor(private http: HttpClient) { }

  //Usaremos esta funcion para que devuelva todas las rutinas
  createRutinas(userName) {
    return this.http.get(this.RUTINAS);
    //CUANDO SE CREE EL METODO EN SPRING HABRÁ QUE PONERLO ASI:
    //return this.http.get(this.RUTINAS+"?userName="+userName);
  }

}