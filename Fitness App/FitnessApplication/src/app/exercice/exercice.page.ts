import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.page.html',
  styleUrls: ['./exercice.page.scss'],
})
export class ExercicePage implements OnInit {

  title:string;
  rep:boolean = false;
  time:boolean=false;


  constructor(private storage:Storage) { }

  ngOnInit() {
    this.storage.get('titleExercice').then(title => {
      this.title=title;
    });
  }

  timeChecked() {
    this.time = true;
    this.rep = false;
    console.log("time",this.time);
    console.log("rep",this.rep);
  }

  repChecked() {
    this.time = false;
    this.rep = true;
    console.log("time",this.time);
    console.log("rep",this.rep);
  }



}
