import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-continueroutine',
  templateUrl: './continueroutine.page.html',
  styleUrls: ['./continueroutine.page.scss'],
})
export class ContinueroutinePage implements OnInit {

  popUpInteract:string;

  constructor(private alertCCtrl: AlertController) { }

  ngOnInit() {
   this.alert();
  }

  //Metodo que presentaria una ventana emergente al detectar si el usuario se ha dejado una rutina o ejercicio a medias.
  async alert() {
    const alert = await this.alertCCtrl.create({
      subHeader: 'Has dejado una rutina a medias',
      message: '¿Quieres continuar con la rutina?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.popUpInteract = "Cancelar";
            console.log("Cancelar");
          }
        },
        {
          text: 'Continuar',
          role: 'continue',
          handler: (blah) => {
            this.popUpInteract = "Continuar";
            console.log("Continuar");
          }
        }
      ]
    });
    await alert.present();
  }

}
