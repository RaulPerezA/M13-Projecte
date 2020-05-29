import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Rutina } from '../Objects/Rutina';
import { RoutineService } from '../routine.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})
export class ExercicesPage implements OnInit {
  
  //numeros:number[]=[1,2,3,4,5,6,7,8,9,10];
  rutinaDelete:Rutina;
  rutinas:Array<Rutina>;
  resultRutina: Observable<any>;
  idGeneral:string;

  constructor(private network: Network, private dialogs: Dialogs, private navCtrl: NavController, private storage:Storage, private routineService:RoutineService, private alertCtrl: AlertController, private loadingController: LoadingController) {
    //Mostrar pop up para informar al usuario que no tiene conexión
    this.network.onDisconnect().subscribe(()=>{
      this.dialogs.alert('No hay conexión, los cambios no se guardaran.');
    });
   }
   //Inicializamos la página
  ngOnInit() {
  }
  
  //Obtenemos las rutinas generales
  ionViewWillEnter(){
    
    //Declaramos un nuevo array de rutinas generales.
    this.rutinas = new Array<Rutina>();
    this.storage.get('rutinas').then(rutinas => {
      
      
      //Recorremos las rutinas obtenidas y las almacenamos en un array para poder mostrarlas en el HTML.
      for(let r of rutinas){
        this.rutinas.push(r);
      }

    });
  }

  //Puede ser que al poner el ngOnDestroy() cada vez que entre aparecera el mensaje de que no tiene conexión.
  ngOnDestroy() {
    
  }

  //Método que nos redirecciona a la página para crear una nueva rutina general.
  addGeneral() {
    this.navCtrl.navigateForward('/addgeneral');
  }

  //Añadir la rutina general seleccionada al storage para poder mostrar sus rutinas diarias
  goToGeneral(evento) {
    
    this.storage.set('idGeneral',evento._id);

    let observable:Observable<any>=this.routineService.getOneRoutine(evento._id);
    observable.toPromise().then( observable => {
      
      this.storage.set('dailyGeneral',observable);
      this.navCtrl.navigateForward('/editgeneral');
    });

   
   
  }

  removeExercise(evento){
    //AQUI TENDRÁ QUE ELIMINAR EL OBJETO SELECCIONADO
    this.rutinaDelete=evento;
    this.alert();
  }

  //Método que nos permite eliminar una rutina general, este método mostrará un pop up.
  async alert() {
    const alert = await this.alertCtrl.create({
      header: '¿Estás seeguro de eliminar '+this.rutinaDelete['nombre']+'?',
      //message: '¿Quieres continuar con la rutina?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (option) => {
           
          }
        },
        {
          text: 'Continuar',
          role: 'continue',
          handler: (option) => {
            this.presentLoading();
            
            this.idGeneral=this.rutinaDelete['_id'];
            

            this.resultRutina = this.routineService.removeRoutineGeneral(this.rutinaDelete['_id']);
           
            let promesa:Promise<any>;
            promesa = this.resultRutina.toPromise();
            
            promesa.then(datos => {
              
              this.storage.set('rutinas',datos);
              this.navCtrl.navigateForward('/main');
            }); 
          }
        }
      ]
    });
    await alert.present();
  }
  
  //Método el cual mostrará un pop up para simular una pantalla de carga.
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
   
  }
}
