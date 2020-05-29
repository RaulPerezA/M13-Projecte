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
  public EJERCICIOS = this.API + '/Ejercicio/findAll';

  constructor(private http: HttpClient) { }

  
  //Devuelve un ejercicio el qual se le pasa la id
  createExercise(idEjercicio:string) {
    
    return this.http.get(this.EJERCICIO+"?nombre="+idEjercicio);
  }

  //Obtenemos todos los ejercicios de la base de datos.
  getAllExercices() {
    return this.http.get(this.EJERCICIOS);
  }


}