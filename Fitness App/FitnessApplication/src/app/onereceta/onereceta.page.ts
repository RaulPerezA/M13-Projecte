/*LA PRIMERA PARTE DEL CODIGO QUE ESTA COMENTADA ES LA FORMA DE OBTENER LOS DATOS DE MONGODB DIRECTAMENTE.*/
/*import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Receta } from '../Objects/Receta';
import { RecetaService } from '../receta.service'; 

@Component({
  selector: 'app-onereceta',
  templateUrl: './onereceta.page.html',
  styleUrls: ['./onereceta.page.scss'],
})
export class OnerecetaPage implements OnInit {

  receta:Receta;
  recetaData=[];
  promise:Promise<any>;

  constructor(private storage:Storage, public recetaService: RecetaService) { }

  ngOnInit() {
     //Acceder al storage para obtener los datos de la receta.
     this.storage.get('receta').then((receta)=>{
      console.log('receta',receta);
     // this.receta = new Receta(receta.receta, receta.alimentos, receta.explicacion, receta.tipoReceta, receta.calorias);
      this.recetaData = ["manzana", "pera", "platano", "naranja"];
    })
    console.log("there?");
    this.promise=this.recetaService.getRecetas();
    
    console.log(this.promise);
    /*
    this.recetaService.getRecetas().then((data) => {
      console.log("aaa");
      console.log(data);
      this.receta = data;
    });*//*
  }

  ngOnDestroy() {
    console.log("Pagina de la receta destruida.");
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Receta } from '../Objects/Receta';

@Component({
  selector: 'app-onereceta',
  templateUrl: './onereceta.page.html',
  styleUrls: ['./onereceta.page.scss'],
})
export class OnerecetaPage implements OnInit {

  receta:Receta;
  promise:Promise<any>;
  recetaNombre:string;
  recetaExpl:string;
  alimentosData=[];
  recetaCalorias:string;
  tipoReceta:string;
  imagen:string;
  
  

  constructor(private storage:Storage) { }


  //Inicializamos la página
  ngOnInit() {
    //Obtenemos los datos de la receta seleccionada
    this.storage.get('recetaEnter').then((receta)=>{

      //Creamos el objeto receta con los datos obtenidos.
      this.receta=receta;
      
      //Le pasamos la receta al método recogerReceta.
      this.recogerReceta(this.receta);
    });
  }

  //Destruimos la página al abandonarla.
  ngOnDestroy() {

  }

  //Método que nos permite obtener los datos de la receta pasada como parámetro.
  recogerReceta(receta:Receta){
    this.recetaNombre=receta['receta'];
    this.recetaExpl=receta['explicacion'];
    this.alimentosData=receta['alimentos'];
    this.tipoReceta=receta['tipoReceta'];
    this.recetaCalorias=receta['calorias'];
    this.imagen=receta['imagen'];
  }
}
