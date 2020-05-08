import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})
export class ExercicesPage implements OnInit {

  create: boolean = false;
  modify:boolean = false;

  constructor() { }

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
