import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutinaEjercicio } from './Objects/RutinaEjercicio';

@Injectable({
  providedIn: 'root'
})
export class RoutineExercise {

  constructor(private http:HttpClient) { }

  public API = 'http://localhost:9003';
  public EXERCICE = this.API + '/rutina/saveExercice';
  private ejercicio:RutinaEjercicio;

  //método que nos permite guardar todos los datos del ejercicio configurado y añadirlo a la rutina diaria.
  saveExercices(id:string, diaria:string ,ejercicios:RutinaEjercicio ){
    return this.http.get(this.EXERCICE+"?idGeneral="+id+"&diaria="+diaria+"&nombre="+ejercicios.getNombre()+"&ejercicio="+ejercicios.getEjercicio()+"&series="+ejercicios.getSeries()+"&modoEjercitar="+ejercicios.getModoEjercitar()+"&repeticionesSerie="+ejercicios.getRepeticionesSerie()+"&segundosSerie="+ejercicios.getSegundosSerie()+"&segundosDescanso="+ejercicios.getSegundosDescanso());
  }

  //Obtener el ejercicio configurado a través de otra página.
  getExercice(){
    return this.ejercicio;
  }

  //Vaciar el objeto ejercicio.
 vaciarEjercicio() {
   this.ejercicio = null;
 }

 //Método para guardar el ejercicio configurado en una variabla para obtenerlo más tarde con el método getExercice().
 createExercice(exercice:RutinaEjercicio) {
  this.ejercicio = exercice;
 }

}
