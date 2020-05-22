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
    console.log("Pagina main destruida.");
  }

  ionViewWillLeave() {
    console.log("Vamos a salir");
    this.slidersStop();
  }

  ionViewDidEnter() {
    console.log("Entramos");
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
    console.log("AutoPlay");
    this.slideDiets.startAutoplay();
    this.slideExercices.startAutoplay();
   }

   slidersStop() {
     this.slideDiets.stopAutoplay();
     this.slideExercices.stopAutoplay();
   }

  //Funcion que lleva al apartado de ejercicios al clicar en un slide.
  goExercises() {
    console.log("VAS A IR AL APARTADO DE EJERCICIOS.");
    this.router.navigateByUrl('/exercices');
  }

  //Funcion que lleva al apartado de alimentos al clicar en un slide.
  goFoods() {
    console.log("VAS A IR AL APARTADO DE ALIMENTOS.");
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

  //Mostrar pop up
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
            console.log("Cancelar");
            this.alert2();
          }
        },
        {
          text: 'Continuar',
          role: 'continue',
          handler: (option) => {
            console.log("Continuar");
            this.storage.get('user').then((usuario)=>{
              console.log('usuario',usuario);
              this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
              this.resultRutina = this.routineService.rutinaActiva(this.user.getUsername());
              console.log(this.resultRutina);
              let promesa:Promise<any>;
              promesa = this.resultRutina.toPromise();
        
              //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
              promesa.then(datos => {
                console.log("datos"+datos);
                if(datos==null){
                  this.alertSinRutinasDias();
                }
                else{
                  this.rutina = new Rutina(datos.nombre, datos.userName, datos.rutinasDias, datos.activa, datos.diaSeguimiento, datos.fechaCreacion, datos.fechaModificacion);
                  if(this.rutina.getRutinaDias().length>0){
                    this.presentLoading();
                    this.navCtrl.navigateRoot('/continueroutine');
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
            console.log("Cancelar");
          }
        },
        {
          text: 'Continuar',
          role: 'continue',
          handler: (option) => {
            console.log("Continuar");
            //this.navCtrl.navigateRoot('/exercices');
            this.navCtrl.navigateForward('/exercices');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

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
            console.log("Cancelar");
          }
        },
        {
          text: 'Continuar',
          role: 'continue',
          handler: (option) => {
            console.log("Continuar");
            //Redireccionar a crear rutina dia.
            this.navCtrl.navigateForward('/exercices');
          }
        }
      ]
    });
    await alert.present();
  }


}
