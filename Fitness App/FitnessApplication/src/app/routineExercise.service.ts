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
    return this.http.get(this.EXERCICE+"?idGeneral="+id+"&diaria="+diaria+"&ejercicios="+ejercicios);
  }

 getExercice(){
  return this.ejercicio;
 }

 createExercice(exercice:RutinaEjercicio) {
  this.ejercicio = exercice;
 }

}
