import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-createexercices',
  templateUrl: './createexercices.page.html',
  styleUrls: ['./createexercices.page.scss'],
})
export class CreateexercicesPage implements OnInit {

  filter: boolean = false;
  chipsSelected: boolean[] = [false,false,false,false,false,false];
  exercices:string[]= ["Plancha", "Crunch", "Doble crunch", "Pecho", "Espalda", "Biceps", "Triceps", "Quadriceps", "Femoral", "Gemelos"];

  constructor(private navCtrl:NavController, private storage:Storage) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Crear ejercicios destruido.");
  }

  showFilter() {
    this.filter = !this.filter;
  }

  selectChip(position: number) {
    console.log(position);
    this.chipsSelected[position] = !this.chipsSelected[position];
    console.log(this.chipsSelected);
  }

  confexercice(title:string) {
    this.storage.set('titleExercice',title);
    this.navCtrl.navigateForward('/exercice');    
  }

}
