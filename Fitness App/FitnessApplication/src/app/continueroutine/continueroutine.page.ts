import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-continueroutine',
  templateUrl: './continueroutine.page.html',
  styleUrls: ['./continueroutine.page.scss'],
})
export class ContinueroutinePage implements OnInit {

  

  constructor(private alertCCtrl: AlertController) { }

  ngOnInit() {
   
  }

  ngOnDestroy() {
    console.log("Continuar rutina destruido.");
  }

}
