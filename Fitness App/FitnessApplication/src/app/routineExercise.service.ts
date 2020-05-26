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

  saveExercices(id:string, diaria:string ,ejercicios:RutinaEjercicio ){
    console.log("id",id);
    console.log("dia",diaria);
    console.log("ejercicios",ejercicios);
    console.log("ejercicio.getRepeticionesSerie()",ejercicios.getRepeticionesSerie())
    console.log("getSegundosSerie",ejercicios.getSegundosSerie());
    return this.http.get(this.EXERCICE+"?idGeneral="+id+"&diaria="+diaria+"&nombre="+ejercicios.getNombre()+"&ejercicio="+ejercicios.getEjercicio()+"&series="+ejercicios.getSeries()+"&modoEjercitar="+ejercicios.getModoEjercitar()+"&repeticionesSerie="+ejercicios.getRepeticionesSerie()+"&segundosSerie="+ejercicios.getSegundosSerie()+"&segundosDescanso="+ejercicios.getSegundosDescanso());
  }

 getExercice(){
  return this.ejercicio;
 }

 createExercice(exercice:RutinaEjercicio) {
  this.ejercicio = exercice;
 }

}
