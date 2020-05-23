import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Rutina } from '../Objects/Rutina';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})
export class ExercicesPage implements OnInit {
  
  //numeros:number[]=[1,2,3,4,5,6,7,8,9,10];
  rutinas:Array<Rutina>;
  constructor(private network: Network, private dialogs: Dialogs, private navCtrl: NavController, private storage:Storage) {
    
    //Mostrar pop up para informar al usuario que no tiene conexión
    this.network.onDisconnect().subscribe(()=>{
      this.dialogs.alert('No hay conexión, los cambios no se guardaran.');
    });

   }

  ngOnInit() {

    this.rutinas = new Array<Rutina>();

    this.storage.get('rutinas').then(rutinas => {
      console.log("rutina",rutinas);
      
      for(let r of rutinas){
        this.rutinas.push(r);
      }

    });
    

  }

  //Puede ser que al poner el ngOnDestroy() cada vez que entre aparecera el mensaje de que no tiene conexión.
  ngOnDestroy() {
    console.log("Pagina de creación/modificación de ejercicio destruido.");
  }

  addGeneral() {
    this.navCtrl.navigateForward('/addgeneral');
  }

  //Añadir la rutina general seleccionada al storage para poder mostrar sus rutinas diarias
  goToGeneral(evento) {
    console.log("evento",evento);
    this.storage.set('dailyGeneral',evento);
    this.navCtrl.navigateForward('/editgeneral');
  }

}
