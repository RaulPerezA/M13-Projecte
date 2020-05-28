import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Receta } from "./Objects/Receta";
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public API = 'http://localhost:9003';
  public RECETAS = this.API + '/Receta/findAll';
  
  constructor(private http: HttpClient) { }

  //Obtenemos todas las recetas de la base de datos mediante el controlador de spring.
  createRecetas() {
    return this.http.get(this.RECETAS);
  }

}