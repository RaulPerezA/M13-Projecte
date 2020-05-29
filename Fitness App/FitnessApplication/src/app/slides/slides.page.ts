import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  //Destruimos la pagina de slides para que al volver hacia atras no se vuelva a mostrar.
  ngOnDestroy() {

  }

  setMainPage(){
    //Declaramos que la pagina principal sera la /main.
    this.navCtrl.navigateRoot('/main');
  }

}
