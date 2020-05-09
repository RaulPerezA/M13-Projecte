import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createexercices',
  templateUrl: './createexercices.page.html',
  styleUrls: ['./createexercices.page.scss'],
})
export class CreateexercicesPage implements OnInit {

  filter: boolean = false;
  chipsSelected: boolean[] = [false,false,false,false,false,false];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Crear ejercicios destruido.");
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
