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
  recetaData=[];

  constructor(private storage:Storage) { }

  ngOnInit() {
     //Acceder al storage para obtener los datos de la receta.
     this.storage.get('receta').then((receta)=>{
      console.log('receta',receta);
      this.receta = new Receta(receta.receta, receta.alimentos, receta.explicacion, receta.tipoReceta, receta.calorias);
      this.recetaData = ["manzana", "pera", "platano", "naranja"];
    })
  }

  ngOnDestroy() {
    console.log("Pagina de la receta destruida.");
  }


}
