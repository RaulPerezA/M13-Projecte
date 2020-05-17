import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})
export class ExercicesPage implements OnInit {

  createExercice: boolean = false;
  createDiary: boolean = false;
  createGeneral: boolean = false;
  
  constructor(private network: Network, private dialogs: Dialogs, private navCtrl: NavController) {
    
    //Mostrar pop up para informar al usuario que no tiene conexión
    this.network.onDisconnect().subscribe(()=>{
      this.dialogs.alert('No hay conexión, los cambios no se guardaran.');
    });

   }

  ngOnInit() {
  }

  //Puede ser que al poner el ngOnDestroy() cada vez que entre aparecera el mensaje de que no tiene conexión.
  ngOnDestroy() {
    console.log("Pagina de creación/modificación de ejercicio destruido.");
  }

  createExercices() {
    this.createExercice = !this.createExercice;
    console.log("Creación de rutinas desplegada.");
  }

  createDiaris() {
    this.createDiary = !this.createDiary;
    console.log("Creación de rutinas desplegada.");
  }

  createGenerals() {
    this.createGeneral = !this.createGeneral;
    console.log("Creación de rutinas desplegada.");
  }

  redirectCGeneral() {
    this.navCtrl.navigateForward('/generalrutine');
  }

  modifydaily() {
    this.navCtrl.navigateForward('/modifydailyrutine');
  }

}
