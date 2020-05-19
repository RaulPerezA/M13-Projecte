import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listgenerals',
  templateUrl: './listgenerals.page.html',
  styleUrls: ['./listgenerals.page.scss'],
})
export class ListgeneralsPage implements OnInit {

  generals:string[]=["General 1","General 2","General 3","General 4","General 5","General 6","General 7","General 8","General 9","General 10"];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  addGeneral() {
    this.navCtrl.navigateForward('/addgeneral');
  }

}
