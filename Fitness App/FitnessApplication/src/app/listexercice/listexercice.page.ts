import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RutinaDia } from '../Objects/RutinaDia';
import { Storage } from '@ionic/storage';
import { Ejercicio } from '../Objects/Ejercicio';
import { Observable } from 'rxjs';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-listexercice',
  templateUrl: './listexercice.page.html',
  styleUrls: ['./listexercice.page.scss'],
})
export class ListexercicePage implements OnInit {

  bienvenida:boolean=false;
  resultEjercicio: Observable<any>;
  ejercicios:Ejercicio[]=[];
  ejercicio:Ejercicio;
  titulo:string;
  exercices:Array<RutinaDia>;
  constructor(private navCtrl: NavController, private storage:Storage, private exerciseService:ExerciseService) { }

  //Inicializamos la página.
  ngOnInit() {
    //Inicializamos un nuevo array de ejercicios que tiene una rutina dia.
    this.exercices = new Array<RutinaDia>();
    this.storage.get('dailyDay').then( dia => {
      this.titulo=dia.nombre;
      console.log(dia);
      //Recorremos con un for los datos que obtenemos del storage.
      for(let e of dia.ejercicios){
        //Añadimos a un array los ejercicios que hemos obtenido. 
        this.exercices.push(e);
      }

      if(this.exercices.length==0){
        this.bienvenida=true;
      }
    });

    this.storage.get('ejercicios').then( ejercicios => {
      this.ejercicios=ejercicios;
    });
    
  }

  redirect(){
    this.navCtrl.navigateForward('/editgeneral');
  }

  //Método que nos redirecciona a la página donde podremos crear una nueva rutina de ejercicios.
  createExercice() {
    console.log("createexercice");
    this.navCtrl.navigateForward('/createexercice');
  }
  
  editExercise(evento){
    this.resultEjercicio = this.exerciseService.createExercise(evento.ejercicio);
    let promesa3:Promise<any>;
    promesa3 = this.resultEjercicio.toPromise();
    promesa3.then(datos => {
      this.ejercicio=new Ejercicio(datos._id,datos.ejercicio,datos.imagen, datos.video, datos.descripcion, datos.dificultad, datos.especificacion, datos.grupoMuscular);
      console.log(this.ejercicio);
      this.storage.set('exercice',this.ejercicio);
      this.storage.set('createExercise',true);
      this.storage.set('exerciseConfigure',evento);
      this.navCtrl.navigateForward('/configure-exercice');
    });
  }

  removeExercise(evento){
    //AQUI TENDRÁ QUE ELIMINAR EL OBJETO SELECCIONADO
  }

}
