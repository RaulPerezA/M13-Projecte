import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dailyrutine',
  templateUrl: './dailyrutine.page.html',
  styleUrls: ['./dailyrutine.page.scss'],
})
export class DailyrutinePage implements OnInit {

  generals:string[]=["General 1","General 2","General 3","General 4","General 5","General 6","General 7","General 8","General 9","General 10"];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  editGeneral(){
    this.navCtrl.navigateForward('/editgeneral');
  }

}
