import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Observable } from 'rxjs';
import { Ejercicio } from '../Objects/Ejercicio';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createexercice',
  templateUrl: './createexercice.page.html',
  styleUrls: ['./createexercice.page.scss'],
})
export class CreateexercicePage implements OnInit {

  filter: boolean = false;
  chipsSelected: boolean[] = [false,false,false,false,false,false];
  //exercices:string[]= ["Plancha", "Crunch", "Doble crunch", "Pecho", "Espalda", "Biceps", "Triceps", "Quadriceps", "Femoral", "Gemelos"];
  exercices:Ejercicio[]=[];
  listExercices: Observable<any>;
  ejercicio:Ejercicio;

  constructor(private exerciceService: ExerciseService, private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {

    this.listExercices = this.exerciceService.getAllExercices();

    this.listExercices.toPromise().then(ejercicios => {
      console.log(ejercicios);
      
      for(let i of ejercicios) {

        console.log("i",i);
        this.ejercicio = new Ejercicio(i.ejercicio, i.imagen, i.video, i.descripcion, i.dificultad, i.especificacion, i.grupoMuscular);

        this.exercices.push(this.ejercicio);

      }

    });

  }

  ngOnDestroy() {}

  showFilter() {
    this.filter = !this.filter;
  }

  selectChip(position: number) {
    console.log(position);
    this.chipsSelected[position] = !this.chipsSelected[position];
    console.log(this.chipsSelected);
  }

  confexercice(exercice:Ejercicio) {
    this.storage.set('exercice',exercice);
    this.navCtrl.navigateForward('/configure-exercice')
  }

}
