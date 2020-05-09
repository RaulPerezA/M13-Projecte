import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})
export class ExercicesPage implements OnInit {

  create: boolean = false;
  modify:boolean = false;

  constructor(private network: Network, private dialogs: Dialogs) {
    
    //Mostrar po up para informar al usuario que no tiene conexión
    this.network.onDisconnect().subscribe(()=>{
      this.dialogs.alert('No hay conexión, los cambios no se guardaran.');
    });

   }

  ngOnInit() {
  }

  deployCreate() {
    this.create = !this.create;
    console.log("Creación de rutinas desplegada.");
  }

  deployModify() {
    this.modify = !this.modify;
    console.log("Modificación de rutinas desplegada.");
  }

}
