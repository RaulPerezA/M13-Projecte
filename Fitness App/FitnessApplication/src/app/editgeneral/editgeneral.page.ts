import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editgeneral',
  templateUrl: './editgeneral.page.html',
  styleUrls: ['./editgeneral.page.scss'],
})
export class EditgeneralPage implements OnInit {

  daily:string[]=["Diaria 1","Diaria 2","Diaria 3","Diaria 4","Diaria 5","Diaria 6","Diaria 7","Diaria 8","Diaria 9","Diaria 10"];

  constructor(private navCtrol: NavController) { }

  ngOnInit() {
  }

  editDaily() {
    this.navCtrol.navigateForward('/editdaily');
  }

  addDaily() {
    this.navCtrol.navigateForward('/add-daily');
  }

}
