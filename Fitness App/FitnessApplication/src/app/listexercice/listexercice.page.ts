import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listexercice',
  templateUrl: './listexercice.page.html',
  styleUrls: ['./listexercice.page.scss'],
})
export class ListexercicePage implements OnInit {

  exercices:string[]=["RE1","RE2","RE3","RE4","RE5","RE6","RE7","RE8","RE9","RE10"];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  createExercice() {
    this.navCtrl.navigateForward('/createexercice');
  }

}
