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

  listGenerals() {
    this.navCtrl.navigateForward('/listgenerals');
  }

  dailyRutine() {
    this.navCtrl.navigateForward('/dailyrutine');
  }

  listExercice() {
    this.navCtrl.navigateForward('/listexercice');
  }

}
