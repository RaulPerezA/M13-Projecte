import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalrutine',
  templateUrl: './generalrutine.page.html',
  styleUrls: ['./generalrutine.page.scss'],
})
export class GeneralrutinePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Pagina destruida");
  }

}
