import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from './Objects/Ejercicio';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  public API = 'http://localhost:9003';
  public EJERCICIO = this.API + '/Ejercicio/findOneEjercicio';

  constructor(private http: HttpClient) { }

  
  //Devuelve todas las rutinas de un usuario
  createRutinas(idEjercicio:string) {
    //return this.http.get(this.RUTINAS);
    //CUANDO SE CREE EL METODO EN SPRING HABRÁ QUE PONERLO ASI:
    return this.http.get(this.EJERCICIO+"?nombre="+idEjercicio);
  }
}