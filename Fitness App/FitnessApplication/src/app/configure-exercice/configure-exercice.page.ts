import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { CreateExerciceService } from '../create-exercice.service';

@Component({
  selector: 'app-configure-exercice',
  templateUrl: './configure-exercice.page.html',
  styleUrls: ['./configure-exercice.page.scss'],
})
export class ConfigureExercicePage implements OnInit {

  arrayEjercicios:Array<RutinaEjercicio>;
  rutinaEjercicio:RutinaEjercicio;
  title:string;
  description:string;
  level:string;
  muscle:string;
  seriesBoolean:boolean=true;
  timeBoolean:boolean=false;
  exerciceForm:FormGroup;
  modo:string = "repeticiones";
  repsActive:boolean = false;
  timeActive:boolean = false;

  constructor(private storage:Storage, private formBuildeR: FormBuilder, private createExerciceService:CreateExerciceService) {

    this.exerciceForm = this.formBuildeR.group({
        name: ['', Validators.required],
        series: ['', Validators.required],
        repeticiones: ['', Validators.required],
        segundos: ['', Validators.required],
        descanso: ['', Validators.required],
        modo: ['', Validators.required]
      });
  
   }

  ngOnInit() {

    this.arrayEjercicios = new Array<RutinaEjercicio>();
    this.timeBoolean = false;
    this.seriesBoolean = true;
    this.repsActive = false;
    this.timeActive = false;

    this.storage.get('exercice').then( ejercicio => {
      console.log("exercice",ejercicio);
      this.title = ejercicio.ejercicio;
      this.description = ejercicio.descripcion;
      this.level = ejercicio.dificultad;
      this.muscle = ejercicio.grupoMuscular;
    });

    this.storage.get('user').then( username => {
      console.log("username",username);
    });
  }

  ionViewWillLeave() {
    console.log("Nos vamos a ir");
   
    if(this.rutinaEjercicio!=null){
      
      this.createExerciceService.createExercice(this.rutinaEjercicio);
    }
    
  }


  reps() {
    
    this.repsActive = true;
    this.timeActive = false;
    this.modo = "repeticiones";
    this.seriesBoolean = true;
    this.timeBoolean = false;
    this.exerciceForm.reset();
    
  }

  time() {
    
    this.timeActive = true;
    this.repsActive = false;
    this.modo = "tiempo";
    this.timeBoolean = true;
    this.seriesBoolean = false;
    this.exerciceForm.reset();
    
  }

  saveExercice() {
       
    if(this.timeBoolean == true){
      this.exerciceForm.value.modo = 'tiempo';
    }
    else if(this.seriesBoolean == true) {
      this.exerciceForm.value.modo = 'repeticiones';
    }
        
    this.rutinaEjercicio = new RutinaEjercicio(this.exerciceForm.value.name, this.title, this.exerciceForm.value.series, this.exerciceForm.value.modo, this.exerciceForm.value.repeticiones, this.exerciceForm.value.segundos, this.exerciceForm.value.descanso);
    console.log("this.rutinaEjercicio",this.rutinaEjercicio);
    this.arrayEjercicios.push(this.rutinaEjercicio);
    console.log("array",this.arrayEjercicios);
  }

}
