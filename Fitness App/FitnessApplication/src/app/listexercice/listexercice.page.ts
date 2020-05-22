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

  ngOnInit() {

    this.exercices = new Array<RutinaDia>();
    this.storage.get('dailyGeneral').then( general => {
      for(let r of general.rutinasDias){
         for(let e of r.ejercicios){
           this.exercices.push(e);
         }
      }
    });

  }

  createExercice() {
    console.log("createexercice");
    this.navCtrl.navigateForward('/createexercice');
  }

}
