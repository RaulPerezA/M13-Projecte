import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createexercice',
  templateUrl: './createexercice.page.html',
  styleUrls: ['./createexercice.page.scss'],
})
export class CreateexercicePage implements OnInit {

  filter: boolean = false;
  chipsSelected: boolean[] = [false,false,false,false,false,false];
  exercices:string[]= ["Plancha", "Crunch", "Doble crunch", "Pecho", "Espalda", "Biceps", "Triceps", "Quadriceps", "Femoral", "Gemelos"];


  constructor() { }

  ngOnInit() {
  }

  showFilter() {
    this.filter = !this.filter;
  }

  selectChip(position: number) {
    console.log(position);
    this.chipsSelected[position] = !this.chipsSelected[position];
    console.log(this.chipsSelected);
  }

}
