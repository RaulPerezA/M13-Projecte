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
  public RUTINASUSUARIO = this.API + '/rutina/findRutinasUser';
  public RUTINAUSUARIOACTIVA = this.API + '/rutina/findRutinaUserActiva';
  public RUTINAACTUAL = this.API + '/rutina/findDiaEjercicio';

  constructor(private http: HttpClient) { }

  
  //Devuelve todas las rutinas de un usuario
  createRutinas(userName:string) {
    //return this.http.get(this.RUTINAS);
    //CUANDO SE CREE EL METODO EN SPRING HABRÁ QUE PONERLO ASI:
    return this.http.get(this.RUTINASUSUARIO+"?user="+userName);
  }
  
  //Devuelve la rutina activa del usuario que le pasamos por parametro
  rutinaActiva(userName:string){
    return this.http.get(this.RUTINAUSUARIOACTIVA+"?user="+userName);
  }
  
  //Devuelve el día que tiene que hacer el ejercicio
  rutinaDia(userName:string, posicion:Number){
    return this.http.get(this.RUTINAACTUAL+"?user="+userName+"&posicion="+posicion);
  }

}