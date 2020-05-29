import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Rutina } from '../Objects/Rutina';
import { RutinaDia } from '../Objects/RutinaDia';
import { RoutineService } from '../routine.service';
import { User } from '../Objects/User';
import { ExerciseService } from '../exercise.service';
import { Ejercicio } from '../Objects/Ejercicio';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-continueroutine',
  templateUrl: './continueroutine.page.html',
  styleUrls: ['./continueroutine.page.scss'],
})
export class ContinueroutinePage implements OnInit {

  resultRutina: Observable<any>;
  resultRutinaDia: Observable<any>;
  resultEjercicio: Observable<any>;
  rutinas:Array<Rutina>;
  user:User;
  rutina:Rutina;
  rutinaDia:RutinaDia;
  rutinaEjercicio:RutinaEjercicio;
  rutinaEjercicios:RutinaEjercicio[]=[];
  ejercicio:Ejercicio;
  ejercicios:Ejercicio[]=[];
  diaEntrenamiento:string;

  constructor(private navCtrl: NavController, private router: Router, private alertCCtrl: AlertController,  private storage:Storage, private routineService:RoutineService, private exerciseService:ExerciseService, private loadingController: LoadingController, private alertCtrl: AlertController) { }

  //Inicializamos la página y obtenemos los datos del usuario y su rutina activa
  ngOnInit() {
    this.storage.get('user').then((usuario)=>{
      this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
      this.resultRutina = this.routineService.rutinaActiva(this.user.getUsername());
     
      let promesa:Promise<any>;
      promesa = this.resultRutina.toPromise();
      promesa.then(datos => {
        this.rutina = new Rutina(datos.nombre, datos.userName, datos.rutinasDias, datos.activa, datos.diaSeguimiento, datos.fechaCreacion, datos.fechaModificacion);
        this.resultRutinaDia=this.routineService.rutinaDia(this.rutina.getUserName(), this.rutina.getDiaSeguimiento());
      
        let promesa2:Promise<any>;
        promesa2 = this.resultRutinaDia.toPromise();
        promesa2.then(datos => {
          this.rutinaDia = new RutinaDia(datos.nombre, datos.ejercicios);
          this.diaEntrenamiento=this.rutinaDia.getNombre();

          //Obtenemos los ejercicios de la rutina que vamos a realizar.
          for(let ex of this.rutinaDia.getRutinaEjercicios()){
            this.rutinaEjercicio=new RutinaEjercicio(ex['nombre'], ex['ejercicio'], ex['series'], ex['modoEjercitar'], ex['repeticionesSerie'], ex['segundosSerie'], ex['segundosDescanso']);
            this.rutinaEjercicios.push(this.rutinaEjercicio);
            this.resultEjercicio = this.exerciseService.createExercise(this.rutinaEjercicio.getEjercicio());
            
            let promesa3:Promise<any>;
            promesa3 = this.resultEjercicio.toPromise();
            promesa3.then(datos => {
              this.ejercicio=new Ejercicio(datos._id,datos.ejercicio,datos.imagen, datos.video, datos.descripcion, datos.dificultad, datos.especificacion, datos.grupoMuscular);
              this.ejercicios.push(this.ejercicio);
            });
          }
        });
      });
    });
  }

  //Destruye la página al salir.
  ngOnDestroy() {}

  //Comprueba si hay rutinas de ejercicios creadas, guarda en el storage las rutinas y va a realizar los ejercicios si hay alguna rutina creada.
  routineActive() {
    if(this.rutinaEjercicios.length>0){
      this.presentLoading();
      setTimeout( ()=>{
        this.storage.set("rutinaDia", this.rutinaDia);
        this.storage.set('RealizarEjercicios',this.rutinaEjercicios);
        this.storage.set('EjerciciosARealizar',this.ejercicios);
        this.navCtrl.navigateForward('/initroutine');
      }, 3000);
    }
    else{
      this.alertSinRutinasEjercicios();
    }
  }

  //Inicializamos todo a 0 y llamamos al servicio para cambiar el dia y que nos devuelva directamente la rutina del dia siguiente.
  pasarDia(){
    this.rutinaEjercicios.length = 0;
    this.ejercicios.length = 0;
    this.resultRutina = this.routineService.cambiarDia(this.user.getUsername());

    let promesa:Promise<any>;
    promesa = this.resultRutina.toPromise();

    promesa.then(datos => {
      this.rutina = new Rutina(datos.nombre, datos.userName, datos.rutinasDias, datos.activa, datos.diaSeguimiento, datos.fechaCreacion, datos.fechaModificacion);
      this.resultRutinaDia=this.routineService.rutinaDia(this.rutina.getUserName(), this.rutina.getDiaSeguimiento());
    
      let promesa2:Promise<any>;
      promesa2 = this.resultRutinaDia.toPromise();
      //Obtenemos los datos del siguiente dia, lo creamos y ponemos todos los datos que necesitaremos con las rutinas y los ejercicios.
      promesa2.then(datos => {
        this.rutinaDia = new RutinaDia(datos.nombre, datos.ejercicios);
        this.diaEntrenamiento=this.rutinaDia.getNombre();
        for(let ex of this.rutinaDia.getRutinaEjercicios()){
          this.rutinaEjercicio=new RutinaEjercicio(ex['nombre'], ex['ejercicio'], ex['series'], ex['modoEjercitar'], ex['repeticionesSerie'], ex['segundosSerie'], ex['segundosDescanso']);
          this.rutinaEjercicios.push(this.rutinaEjercicio);
          this.resultEjercicio = this.exerciseService.createExercise(this.rutinaEjercicio.getEjercicio());
          
          let promesa3:Promise<any>;
          promesa3 = this.resultEjercicio.toPromise();
          promesa3.then(datos => {
            this.ejercicio=new Ejercicio(datos._id,datos.ejercicio,datos.imagen, datos.video, datos.descripcion, datos.dificultad, datos.especificacion, datos.grupoMuscular);
            this.ejercicios.push(this.ejercicio);
          });
        }
      });
    });
  }

  //Espera 3 segundos para que recoja bien los datos y cargue.
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

  //Si no hay rutinas creadas muestra esta alerta para crear rutinas o cambiar de dia.
  async alertSinRutinasEjercicios(){
    const alert = await this.alertCtrl.create({
      header: 'No tienes ningun ejercicio creado para la rutina seleccionada',
      message: 'Cambia de dia o crea nuevas rutinas de ejercicios',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
        }
      ]
    });
    await alert.present();
  }

}
