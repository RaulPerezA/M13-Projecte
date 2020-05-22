import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RutinaDia } from '../Objects/RutinaDia';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-editgeneral',
  templateUrl: './editgeneral.page.html',
  styleUrls: ['./editgeneral.page.scss'],
})
export class EditgeneralPage implements OnInit {

  //daily:string[]=["Diaria 1","Diaria 2","Diaria 3","Diaria 4","Diaria 5","Diaria 6","Diaria 7","Diaria 8","Diaria 9","Diaria 10"];
  daily:Array<RutinaDia>;
  constructor(private navCtrol: NavController, private storage:Storage) { }

  ngOnInit() {
    this.daily = new Array<RutinaDia>();
    this.storage.get('dailyGeneral').then( general => {
      for(let d of general.rutinasDias){
        console.log("d",d);
        this.daily.push(d);
      }
    });
  }

  editDaily() {
    this.navCtrol.navigateForward('/editdaily');
  }

  addDaily() {
    this.navCtrol.navigateForward('/add-daily');
  }

  goToDaily() {
    this.navCtrol.navigateForward('/listexercice');
  }

}
