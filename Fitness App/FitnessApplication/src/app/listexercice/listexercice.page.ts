import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RutinaDia } from '../Objects/RutinaDia';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-listexercice',
  templateUrl: './listexercice.page.html',
  styleUrls: ['./listexercice.page.scss'],
})
export class ListexercicePage implements OnInit {

  //exercices:string[]=["RE1","RE2","RE3","RE4","RE5","RE6","RE7","RE8","RE9","RE10"];
  exercices:Array<RutinaDia>;
  constructor(private navCtrl: NavController, private storage:Storage) { }

  //Inicializamos la página.
  ngOnInit() {

    //Inicializamos un nuevo array de ejercicios que tiene una rutina dia.
    this.exercices = new Array<RutinaDia>();
    this.storage.get('dailyGeneral').then( general => {
      //Recorremos con un for los datos que obtenemos del storage.
      for(let r of general.rutinasDias){
         for(let e of r.ejercicios){
          //Añadimos a un array los ejercicios que hemos obtenido. 
          this.exercices.push(e);
         }
      }
    });

  }

  //Método que nos redirecciona a la página donde podremos crear una nueva rutina de ejercicios.
  createExercice() {
    console.log("createexercice");
    this.navCtrl.navigateForward('/createexercice');
  }

}
