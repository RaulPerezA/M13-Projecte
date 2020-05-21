import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculatorweight',
  templateUrl: './calculatorweight.page.html',
  styleUrls: ['./calculatorweight.page.scss'],
})
export class CalculatorweightPage implements OnInit {

  formWeight:FormGroup;
  sexo:string;
  altura:number;
  rangoM:number;
  rangoF:number;

  constructor(private formBuilder: FormBuilder) {

    //Datos del formulario del login
    this.formWeight = this.formBuilder.group({
     sexo: ['', Validators.required],
     estatura: ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Calculadora de peso destruida.");
  }

  calc() {
    console.log(this.formWeight.value);

    //Comprobar que los campos esten bien introducidos
    this.sexo = this.formWeight.value.sexo;
    this.altura = this.formWeight.value.estatura;
    
    this.sexo = this.sexo.toLowerCase();
    console.log(this.sexo);

    //Calcular peso ideal según el sexo
    if(this.sexo=="hombre" || this.sexo=="home") {
      
      if(this.altura - Math.floor(this.altura)){
        console.log("altura decimal");

        let a = this.altura.toString();
        console.log(a);
        this.altura = parseFloat(a) * 100;

      }

      this.rangoM = 0.75 * this.altura -62.5;  
      this.rangoM = parseFloat(this.rangoM.toFixed(2));
      this.rangoF = this.rangoM + 5;
      this.rangoF = parseFloat(this.rangoF.toFixed(2));

    }
    
    else if(this.sexo =="mujer" || this.sexo =="dona") {
      console.log("Mujer");

      if(this.altura - Math.floor(this.altura)){
        console.log("altura decimal");

        let a = this.altura.toString();
        console.log(a);
        this.altura = parseFloat(a) * 100;

      }

      this.rangoM = 0.675 * this.altura -56;  
      this.rangoM = parseFloat(this.rangoM.toFixed(2));
      this.rangoF = this.rangoM + 5;
      this.rangoF = parseFloat(this.rangoF.toFixed(2));

    }


  }

}
