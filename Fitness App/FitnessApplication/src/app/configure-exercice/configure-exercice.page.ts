import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-configure-exercice',
  templateUrl: './configure-exercice.page.html',
  styleUrls: ['./configure-exercice.page.scss'],
})
export class ConfigureExercicePage implements OnInit {

  title:string;
  description:string;
  level:string;
  muscle:string;
  seriesBoolean:boolean=true;
  timeBoolean:boolean=false;
  exerciceForm:FormGroup;
  modo:string = "repeticiones";

  constructor(private storage:Storage, private formBuildeR: FormBuilder) {

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

    this.timeBoolean = false;
    this.seriesBoolean = true;

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

  reps() {
    
    this.modo = "repeticiones";
    this.seriesBoolean = true;
    this.timeBoolean = false;
    this.exerciceForm.reset();
    
  }

  time() {
    
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
        
    console.log("modify",this.exerciceForm.value);
  }

}
