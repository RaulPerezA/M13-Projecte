import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modifydailyrutine',
  templateUrl: './modifydailyrutine.page.html',
  styleUrls: ['./modifydailyrutine.page.scss'],
})
export class ModifydailyrutinePage implements OnInit {

  text:string[] = ["general 1", "general 2", "general 3", "general 4", "general 5", "general 6", "general 7", "general 8", "general 9", "general 10"];

  constructor(private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  redirect(rutina:string) {
    console.log(rutina);
    this.storage.set('rutine',rutina);
    this.navCtrl.navigateForward('/contentgeneralrutine');
  }

}
