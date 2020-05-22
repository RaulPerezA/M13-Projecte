import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutinaEjercicio } from './Objects/RutinaEjercicio';

@Injectable({
  providedIn: 'root'
})
export class CreateExerciceService {

  constructor(private http:HttpClient) { }

  public API = 'http://localhost:9003';
  public EXERCICE = this.API + '/rutina/saveExercice';
  private ejercicio:RutinaEjercicio;

  saveExercices(id:string, ejercicios:Array<RutinaEjercicio> ){
    console.log("id",id);
    return this.http.get(this.EXERCICE+"?idGeneral="+id+"&ejercicios="+ejercicios);
  }

 getExercice(){
  return this.ejercicio;
 }

 createExercice(exercice:RutinaEjercicio) {
  this.ejercicio = exercice;
 }

}
