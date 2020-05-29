import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { User } from '../Objects/User';
import { Rutina } from '../Objects/Rutina';
import { RoutineService } from '../routine.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  @ViewChild("slideDiets",null) slideDiets: IonSlides;
  @ViewChild("slideExercices",null) slideExercices: IonSlides;

  resultRutina: Observable<any>;
  user:User;
  rutina:Rutina;
  nSlide:number;

  constructor(private router: Router, private menuCtrl: MenuController, private storage:Storage, private alertCtrl: AlertController, private alertCtrl2: AlertController, private routineService:RoutineService, private navCtrl: NavController, private loadingController: LoadingController) { }

  ngOnInit() {
    //Iniciar funcion que hace que los slides cambien automaticamente.
    this.autoSlide;
  }

  ngOnDestroy() {
  }

  //Paramos el slider de imagenes cuando nos vamos a otra página.
  ionViewWillLeave() {
    this.slidersStop();
  }

  //Reanudamos el slider de imagenes cuando estamos entrando en la página main.
  ionViewDidEnter() {

    this.slideChanged();
    
  }

  //Funcion para hacer que los slides cambien automaticamente
  autoSlide = {
    loop: true,
    autoplay: true,
    speed: 400,
  }

  //Funcion que permite seguir haciendo el slice de forma automatica aunque el usuario haga el slice de forma manual.
  slideChanged(){

    this.slideDiets.startAutoplay();
    this.slideExercices.startAutoplay();
   }

   //Método para parar los sliders
   slidersStop() {
     this.slideDiets.stopAutoplay();
     this.slideExercices.stopAutoplay();
   }

  //Funcion que lleva al apartado de ejercicios al clicar en un slide.
  goExercises() {
    this.presentLoading();

    this.router.navigateByUrl('/exercices');
  }

  //Funcion que lleva al apartado de alimentos al clicar en un slide.
  goFoods() {
    this.presentLoading();
    this.router.navigateByUrl('/diets');
  }

  //Cerrar menu lateral al seleccionar una opcion
  closeMenu() {
    this.menuCtrl.close();
  }

  //Llamamos a la funcion ngOnDestroy para que al volver a entrar en la pagina main la vuelva a crear esto solo se implementara en la opción del menú de cerrar sesion.
  destroy() {
    this.storage.remove('user');
    this.ngOnDestroy();
  }

  //Mostrar pop up que nos permitira continuar la rutina.
  async alert() {
    const alert = await this.alertCtrl.create({
      header: '¿Quieres continuar con la rutina?',
      //message: '¿Quieres continuar con la rutina?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (option) => {

            this.alert2();
          }
        },
        {
          text: 'Continuar',
          role: 'continue',
          handler: (option) => {
            this.presentLoading();
            this.storage.get('user').then((usuario)=>{
              this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
              this.resultRutina = this.routineService.rutinaActiva(this.user.getUsername());
              let promesa:Promise<any>;
              promesa = this.resultRutina.toPromise();
        
              //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
              promesa.then(datos => {
                if(datos==null){
                  this.alertSinRutinasDias();
                }
                else{
                  this.rutina = new Rutina(datos.nombre, datos.userName, datos.rutinasDias, datos.activa, datos.diaSeguimiento, datos.fechaCreacion, datos.fechaModificacion);
                  if(this.rutina.getRutinaDias().length>0){
                    this.navCtrl.navigateForward('/continueroutine');
                  }
                  else{
                    this.alertSinRutinasDias();
                  }
                }
              });
            });
          }
        }
      ]
    });
    await alert.present();
  }

  //Segundo pop up que nos redireccionara a la pagina de rutinas generals para poder activar o crear una rutina general.
  async alert2() {

    const alert = await this.alertCtrl2.create({
      subHeader: '¿Quieres seleccionar otra rutina como activa?',
      message: 'Será redireccionado a la pàgina de rutinas generales.',
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
            this.navCtrl.navigateForward('/exercices');
          }
        }
      ]
    });
    await alert.present();
  }

  //Pop up que simulara una pantalla de carga.
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

  //Pop up que nos mostrará un pop up indicando que no tenemos rutinas generales creadas, seguidamente nos redireccionará a la página de rutinas generales para crear una.
  async alertSinRutinasDias(){
    const alert = await this.alertCtrl2.create({
      header: 'No tienes rutinas creadas para continuar',
      message: 'Quieres crear ahora una rutina?',
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
            //Redireccionar a crear rutina dia.
            this.navCtrl.navigateForward('/exercices');
          }
        }
      ]
    });
    await alert.present();
  }


}
