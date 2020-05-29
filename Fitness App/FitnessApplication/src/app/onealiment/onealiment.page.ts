import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { aliment } from '../Objects/aliment';

@Component({
  selector: 'app-onealiment',
  templateUrl: './onealiment.page.html',
  styleUrls: ['./onealiment.page.scss'],
})
export class OnealimentPage implements OnInit {

  //aliment:aliment;
  alimentData=[];

  constructor(private storage:Storage) { }

  //Inicializamos la página.
  ngOnInit() {
    
  }

  //Destruimos la página cuando la abandonamos.
  ngOnDestroy() {
  }


}
