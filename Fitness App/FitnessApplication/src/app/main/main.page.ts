import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  
  @ViewChild("slideDiets",null) slideDiets: IonSlides;
  @ViewChild("slideExercices",null) slideExercices: IonSlides;


  nSlide:number;

  constructor(private router: Router, private menuCtrl: MenuController, private storage:Storage) { }

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

}
