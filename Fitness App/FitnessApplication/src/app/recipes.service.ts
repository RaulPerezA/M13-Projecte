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

  //Usaremos esta funcion para que devuelva todas las recetas
  createRecetas() {
    return this.http.get(this.RECETAS);
  }

}