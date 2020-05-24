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

    //Obtenemos el array de ejercicios configurados por el usuario.
    this.rEjercicio = this.formBuilder.group({
     ejercicios: [this.ejercicios]  
    });

   }

   //Inicializamos l a página.
  ngOnInit() {

    this.textoBuscar='';
    //Obtenemos los ejercicios de la base de datos 
    this.listExercices = this.exerciceService.getAllExercices();

    this.listExercices.toPromise().then(ejercicios => {
      console.log(ejercicios);
      
      for(let i of ejercicios) {

        console.log("i",i);
        this.ejercicio = new Ejercicio(i._id,i.ejercicio, i.imagen, i.video, i.descripcion, i.dificultad, i.especificacion, i.grupoMuscular);

        //Los ejercicios obtenidos de la BD los almacenamos en un array par mostrarlo en el html mediante un *ngFor. 
        this.exercices.push(this.ejercicio);

      }

    });

  }

  //Método de ionic, cuando estemos entrando en la página obtendremos el ejercicio configurado que le hemos enviado al servicio CreateExerciceService.
  ionViewWillEnter() {
    console.log("Vamos a entrar");
    this.ejercicios.push(this.createExerciceService.getExercice());
  }

  //Destruimos la página.
  ngOnDestroy() {}

  //metodo que nos permite obtener la palabra que esta escribiendo el usuario en el buscador.
  search(event) {
    this.textoBuscar = event.detail.value;

  }

  //Método que nos permite mostrar le filtro por etiquetas en la pantalla.
  showFilter() {
    this.filter = !this.filter;
  }

  //Indica que etiqueta ha sido seleccionada.
  selectChip(position: number) {
    console.log(position);
    this.chipsSelected[position] = !this.chipsSelected[position];
    console.log(this.chipsSelected);
  }

  //Método que nos permite navegar a la página de configuración de un ejercicio según el ejercicio seleccionado
  confexercice(exercice:Ejercicio) {
    //Guardamos los datos del ejercicio seleccionado en el storage.
    this.storage.set('exercice',exercice);
    this.navCtrl.navigateForward('/configure-exercice')
  }

  //Método que nos permite crear la rutina de ejercicios con todos los ejercicios configurados por el usuario.
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
