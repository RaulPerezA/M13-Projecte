import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { Observable } from 'rxjs';
import { Ejercicio } from '../Objects/Ejercicio';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RoutineExercise } from '../routineExercise.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-createexercice',
  templateUrl: './createexercice.page.html',
  styleUrls: ['./createexercice.page.scss'],
})
export class CreateexercicePage implements OnInit {

  tituloDiaria:string;
  idGeneral:string;
  textoBuscar:string;
  filter: boolean = false;
  chipsSelected: boolean[] = [false,false,false,false,false,false];
  nombres:string[]=[];
  exercices:Ejercicio[]=[];
  listExercices: Observable<any>;
  ejercicio:Ejercicio;
  ejercicios:Array<RutinaEjercicio> = [];
  rEjercicio:FormGroup;

  constructor(private exerciceService: ExerciseService, private storage:Storage, private navCtrl:NavController, private formBuilder:FormBuilder, private createExerciceService:RoutineExercise, private alertCtrl: AlertController) {

    //Obtenemos el array de ejercicios configurados por el usuario.
    this.rEjercicio = this.formBuilder.group({
     ejercicios: [this.ejercicios]  
    });

   }

   //Inicializamos l a página.
  ngOnInit() {
    this.createExerciceService.vaciarEjercicio();
    this.ejercicios = new Array<RutinaEjercicio>();
    this.nombres=[];
    this.exercices=[];
    this.nombres=[];
    this.exercices=[];
    this.textoBuscar='';
    //Obtenemos los ejercicios de la base de datos 
    this.listExercices = this.exerciceService.getAllExercices();

    this.listExercices.toPromise().then(ejercicios => {
           
      for(let i of ejercicios) {

        this.ejercicio = new Ejercicio(i._id,i.ejercicio, i.imagen, i.video, i.descripcion, i.dificultad, i.especificacion, i.grupoMuscular);

        //Los ejercicios obtenidos de la BD los almacenamos en un array par mostrarlo en el html mediante un *ngFor. 
        this.exercices.push(this.ejercicio);

      }

    });

    this.storage.get('dailyDay').then( dia => {
      this.tituloDiaria=dia.nombre;
     
    });

  }

  //Método de ionic, cuando estemos entrando en la página obtendremos el ejercicio configurado que le hemos enviado al servicio CreateExerciceService.
  ionViewWillEnter() {
    
    if(this.createExerciceService.getExercice()!=null || undefined) {
      
      this.ejercicios.push(this.createExerciceService.getExercice());
    }
    
    this.createExerciceService.vaciarEjercicio();
  }

  //Destruimos la página.
  ngOnDestroy() {
    this.createExerciceService.vaciarEjercicio();
    this.ejercicios.length = 0;
    this.nombres=[];
    this.exercices=[];
  }

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
    
    this.chipsSelected[position] = !this.chipsSelected[position];
    
  }

  //Método que nos permite navegar a la página de configuración de un ejercicio según el ejercicio seleccionado
  confexercice(exercice:Ejercicio) {
    //Guardamos los datos del ejercicio seleccionado en el storage.
    this.storage.set('exercice',exercice);
    this.storage.set('createExercise',false);
    this.navCtrl.navigateForward('/configure-exercice')
  }

  //Método que nos permite crear la rutina de ejercicios con todos los ejercicios configurados por el usuario.
  create() {
    
    for(let i of this.nombres) {
      this.nombres.pop();
    }

    for(let i of this.ejercicios){
     
        
        this.nombres.push(i.getNombre());
      
    }

    
    
    

    //Mostrar pop up con los ejercicios
    this.alert();

  }

  //Alerta que mostrará un pop up con los ejercicios que vamos a introducir
  async alert() {

    const alert = await this.alertCtrl.create({
      cssClass:'my-alert',
      subHeader: 'Se creará una rutina con los siguientes ejercicios',
      message: this.nombres.toString(),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (option) => {
            
            
            for(let i of this.nombres) {
              this.nombres.pop();
            }

          }
        },
        {
          text: 'Crear',
          role: 'create',
          handler: (option) => {
            this.nombres = [];
            
            this.storage.get('idGeneral').then(async id => {
             
              let observable:Observable<any>;

              for(let i = 0; i<this.ejercicios.length; i++){
                


                observable = this.createExerciceService.saveExercices(id,this.tituloDiaria,this.ejercicios[i]);
              
                    await observable.toPromise().then( datos => {
                      
  
                      this.storage.set('dailyDay',datos);
                      
                        if(i==this.ejercicios.length-1){
                          this.navCtrl.navigateBack('/listexercice');
                        }
                      });

              }

          });
            
        }
        }
      ]
    });
    await alert.present();
  }
}
