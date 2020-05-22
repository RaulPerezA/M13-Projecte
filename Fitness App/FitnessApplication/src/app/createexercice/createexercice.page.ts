import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Observable } from 'rxjs';
import { Ejercicio } from '../Objects/Ejercicio';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateExerciceService } from '../create-exercice.service';

@Component({
  selector: 'app-createexercice',
  templateUrl: './createexercice.page.html',
  styleUrls: ['./createexercice.page.scss'],
})
export class CreateexercicePage implements OnInit {

  idGeneral:string;
  textoBuscar:string;
  filter: boolean = false;
  chipsSelected: boolean[] = [false,false,false,false,false,false];
  //exercices:string[]= ["Plancha", "Crunch", "Doble crunch", "Pecho", "Espalda", "Biceps", "Triceps", "Quadriceps", "Femoral", "Gemelos"];
  exercices:Ejercicio[]=[];
  listExercices: Observable<any>;
  ejercicio:Ejercicio;
  ejercicios:Array<RutinaEjercicio> = [];
  rEjercicio:FormGroup;

  constructor(private exerciceService: ExerciseService, private storage:Storage, private navCtrl:NavController, private formBuilder:FormBuilder, private createExerciceService:CreateExerciceService) {

    this.rEjercicio = this.formBuilder.group({
     ejercicios: [this.ejercicios]  
    });

   }

  ngOnInit() {

    this.textoBuscar='';
    this.listExercices = this.exerciceService.getAllExercices();

    this.listExercices.toPromise().then(ejercicios => {
      console.log(ejercicios);
      
      for(let i of ejercicios) {

        console.log("i",i);
        this.ejercicio = new Ejercicio(i._id,i.ejercicio, i.imagen, i.video, i.descripcion, i.dificultad, i.especificacion, i.grupoMuscular);

        this.exercices.push(this.ejercicio);

      }

    });

  }

  ionViewWillEnter() {
    console.log("Vamos a entrar");
    this.ejercicios.push(this.createExerciceService.getExercice());
  }

  ngOnDestroy() {}

  search(event) {
    this.textoBuscar = event.detail.value;

  }

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

  create() {
      
    //Eliminar elemento undefined del array.
    this.ejercicios.reverse();
    for(let i of this.ejercicios){
      if(i===undefined){
        console.log("undefined");
        this.ejercicios.pop();
      }
      else {
        console.log(i);
      }
    }
    this.ejercicios.reverse();
    console.log("this.ejercicios",this.ejercicios);

    //Guardar array de ejercicios en la BD
    this.storage.get('idGeneral').then(id => {
      let observable:Observable<any>;
      observable = this.createExerciceService.saveExercices(id,this.ejercicios);
      observable.toPromise().then( datos => {
       console.log("datos",datos);
      });
    });
    
    
  }

}
