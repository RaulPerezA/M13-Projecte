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
  public SETRUTINAACTIVA = this.API + '/rutina/comprobeActiveRoutine';
  public DIASELECCIONADO = this.API +'/rutina/findDiaSeleccionado';
  

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

  //Devuelve el dia seleccionado con sus ejercicios
  getDiaSeleccionado(idGeneral:string,diaria:string){
    return this.http.get(this.DIASELECCIONADO+"?idGeneral="+idGeneral+"&diaria="+diaria);
  }
  
  //Cambia y devuelve el dia siguiente de la rutina activa del usuario que se le pasa por parametro.
  cambiarDia(userName:string){
    return this.http.get(this.CAMBIARDIA+"?user="+userName);
  }

  //Obtenemos la lista de las rutinas diarias según la id de la rutina General.
  getDays(idGeneral:string){
    return this.http.get(this.GETDAYS+"?idGeneral="+idGeneral);
  }

  //Obtenemos una rutina de la BD según el id que le hayamos pasado al controlador de spring.
  getOneRoutine(idGeneral:string){
    return this.http.get(this.GETRUTINAXID+"?idGeneral="+idGeneral);
  }
  
  //Permite eliminar una rutina general de la base de datos.
  removeRoutineGeneral(idGeneral:string){
    return this.http.get(this.REMOVEROUTINEGENERAL+"?idGeneral="+idGeneral);
  }
  
  //Permite activar una rutina y actualizar la rutina activada en la base de datos.
  setRoutineActive(idGeneral:string){
    return this.http.get(this.SETRUTINAACTIVA+"?idGeneral="+idGeneral);
  }
}