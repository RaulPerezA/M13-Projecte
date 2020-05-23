import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { CreateExerciceService } from '../create-exercice.service';
import { NavController } from '@ionic/angular';

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

  constructor(private storage:Storage, private formBuildeR: FormBuilder, private createExerciceService:CreateExerciceService, private navCtrl:NavController) {

    //Formulario para obtener los datos introducidos por el usuario para configurar el ejercicio.
    this.exerciceForm = this.formBuildeR.group({
        name: ['', Validators.required],
        series: ['', Validators.required],
        repeticiones: ['', Validators.required],
        segundos: ['', Validators.required],
        descanso: ['', Validators.required],
        modo: ['', Validators.required]
      });
  
   }

   //Inicialicamos la página.
  ngOnInit() {

    this.arrayEjercicios = new Array<RutinaEjercicio>();
    this.timeBoolean = false;
    this.seriesBoolean = true;
    this.repsActive = false;
    this.timeActive = false;

    //Obtenemos los datos del ejercicio y los guardamos en variables.
    this.storage.get('exercice').then( ejercicio => {
      console.log("exercice",ejercicio);
      this.title = ejercicio.ejercicio;
      this.description = ejercicio.descripcion;
      this.level = ejercicio.dificultad;
      this.muscle = ejercicio.grupoMuscular;
    });

    //Obtenemos el nombre del usuario que se ha logueado.
    this.storage.get('user').then( username => {
      console.log("username",username);
    });
  }
 
  //Método de ionic, cuando esta declarado todo lo que este dentro de este método se ejecutara cuando hayamos abandonado la pàgina y aun estemos entrando/cargando la siguiente página.
  ionViewWillLeave() {
    console.log("Nos vamos a ir");
   
    if(this.rutinaEjercicio!=null){
      //Utilizamos el servicio CreateExerciceService declarado como variable, de esta forma podemos usar sus métodos, en este caso
      //estamos guardando un objeto RutinaEjercicio con los datos introducidos por el usuario para poder obtenerlo en otra pàgina.
      this.createExerciceService.createExercice(this.rutinaEjercicio);
    }
    
  }

  //Método para indicar que modo ha seleccionado el usuario.
  reps() {
    
    this.repsActive = true;
    this.timeActive = false;
    this.modo = "repeticiones";
    this.seriesBoolean = true;
    this.timeBoolean = false;
    this.exerciceForm.reset();
    
  }

  //Método para indicar que modo ha seleccionado el usuario.
  time() {
    
    this.timeActive = true;
    this.repsActive = false;
    this.modo = "tiempo";
    this.timeBoolean = true;
    this.seriesBoolean = false;
    this.exerciceForm.reset();
    
  }

  //Método que nos permite crear el ejercicio mediante los datos introducidos por el usuario, también según el modo que haya seleccionado el usuario el campo "modo"
  //del formulario se cambiará por el valor "tiempo" o "repeticiones".
  saveExercice() {
       
    if(this.timeBoolean == true){
      this.exerciceForm.value.modo = 'tiempo';
    }
    else if(this.seriesBoolean == true) {
      this.exerciceForm.value.modo = 'repeticiones';
    }
    
    //Creamos el ejercicio mediante los datos del formulario.
    this.rutinaEjercicio = new RutinaEjercicio(this.exerciceForm.value.name, this.title, this.exerciceForm.value.series, this.exerciceForm.value.modo, this.exerciceForm.value.repeticiones, this.exerciceForm.value.segundos, this.exerciceForm.value.descanso);
    console.log("this.rutinaEjercicio",this.rutinaEjercicio);
    this.arrayEjercicios.push(this.rutinaEjercicio);
    console.log("array",this.arrayEjercicios);

    this.navCtrl.pop();

  }

}
