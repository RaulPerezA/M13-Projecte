import { Component, OnInit } from '@angular/core';
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
    });*/
  }

  ngOnDestroy() {
    console.log("Pagina de la receta destruida.");
  }
}
