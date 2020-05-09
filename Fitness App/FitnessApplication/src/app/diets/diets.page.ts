import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Pagina de dietas destruida.");
  }

}
