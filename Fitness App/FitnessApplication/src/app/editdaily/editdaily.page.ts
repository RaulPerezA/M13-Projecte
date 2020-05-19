import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editdaily',
  templateUrl: './editdaily.page.html',
  styleUrls: ['./editdaily.page.scss'],
})
export class EditdailyPage implements OnInit {

  exercices:string[]=["RE 1","RE 2","RE 3","RE 4","RE 5","RE 6","RE 7","RE 8","RE 9","RE 10"];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  addExercice() {
    this.navCtrl.navigateForward('/add-exercice');
  }

}
