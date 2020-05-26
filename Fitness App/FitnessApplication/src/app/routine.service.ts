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
  public CAMBIARDIA = this.API + '/rutina/cambiarDia';
  public GETDAYS = this.API + '/rutina/getDaysOneRoutine';
  public GETRUTINAXID = this.API + '/rutina/findRutinaId';
  public REMOVEROUTINEGENERAL = this.API + '/rutina/removeRoutineGeneralId';

  constructor(private http: HttpClient) { }

  
  //Devuelve todas las rutinas de un usuario
  createRutinas(userName:string) {
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
  
  //Cambia y devuelve el dia siguiente de la rutina activa del usuario que se le pasa por parametro.
  cambiarDia(userName:string){
    return this.http.get(this.CAMBIARDIA+"?user="+userName);
  }

  getDays(idGeneral:string){
    return this.http.get(this.GETDAYS+"?idGeneral="+idGeneral);
  }

  getOneRoutine(idGeneral:string){
    return this.http.get(this.GETRUTINAXID+"?idGeneral="+idGeneral);
  }
  
  removeRoutineGeneral(idGeneral:string){
    console.log("llegaaaaa", idGeneral);
    return this.http.get(this.REMOVEROUTINEGENERAL+"?idGeneral="+idGeneral);
  }
}