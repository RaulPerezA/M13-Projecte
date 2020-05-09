import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatorweight',
  templateUrl: './calculatorweight.page.html',
  styleUrls: ['./calculatorweight.page.scss'],
})
export class CalculatorweightPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Calculadora de peso destruida.");
  }

}
