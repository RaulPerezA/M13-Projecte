import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { aliment } from '../Objects/aliment';

@Component({
  selector: 'app-onealiment',
  templateUrl: './onealiment.page.html',
  styleUrls: ['./onealiment.page.scss'],
})
export class OnealimentPage implements OnInit {

  //aliment:aliment;
  alimentData=[];

  constructor(private storage:Storage) { }

  //Inicializamos la página.
  ngOnInit() {
     //Acceder al storage para obtener los datos de la aliment.
    /* this.storage.get('aliment').then((aliment)=>{
      console.log('aliment',aliment);
     // this.aliment = new aliment(aliment.aliment, aliment.alimentos, aliment.explicacion, aliment.tipoaliment, aliment.calorias);
      this.alimentData = ["manzana", "pera", "platano", "naranja"];
    })*/
  }

  //Destruimos la página cuando la abandonamos.
  ngOnDestroy() {
    console.log("Pagina de la aliment destruida.");
  }


}
