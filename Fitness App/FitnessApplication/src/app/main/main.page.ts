import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  @ViewChild(IonSlides,null) slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
    //Funcion para hacer que los slides cambien automaticamente
    this.autoSlide;
  }

  //Funcion para hacer que los slides cambien automaticamente
  autoSlide = {
    loop: true,
    autoplay: true,
    speed: 400,
  }

  //Funcion que permite seguir haciendo el slice de forma automatica aunque el usuario haga el slice de forma manual.
  slideChanged(){
    console.log("hola que tal");
    this.slides.startAutoplay();
  }

  slideChanged2(){
    console.log("hola que tal");
    this.slides.startAutoplay();
  }

}
