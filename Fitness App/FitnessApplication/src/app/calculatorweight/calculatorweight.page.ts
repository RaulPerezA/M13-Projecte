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

    //Formulario para obtener los datos introducidos en los camposd e la calculadora
    this.formWeight = this.formBuilder.group({
     estatura: ['', Validators.required]
    });

   }

  ngOnInit() {
  }

  //Destruimos la página al salir de esta.
  ngOnDestroy() {
    
  }

  //Determinamos el sexo seleccionado mediante los radio buttons.
  radioSelected(valor) {
    
    this.sexo = valor;
   
  }

  //Método que nos permitira calcular el rango de peso ideal mediante los datos introducidos por el usuario.
  calc() {
    
    //Comprobar que los campos esten bien introducidos
    this.altura = this.formWeight.value.estatura;
    
    this.sexo = this.sexo.toLowerCase();
   
    //Calcular peso ideal según el sexo
    if(this.sexo=="hombre") {
      
      if(this.altura - Math.floor(this.altura)){
       
        let a = this.altura.toString();
       
        this.altura = parseFloat(a) * 100;

      }

      this.rangoM = 0.75 * this.altura -62.5;  
      //Indicamos que solo queremos dos decimales.
      this.rangoM = parseFloat(this.rangoM.toFixed(2));
      this.rangoF = this.rangoM + 5;
      //Indicamos que solo queremos dos decimales.
      this.rangoF = parseFloat(this.rangoF.toFixed(2));

    }
    
    else if(this.sexo =="mujer") {
      
      if(this.altura - Math.floor(this.altura)){
        
        let a = this.altura.toString();
      
        this.altura = parseFloat(a) * 100;

      }

      this.rangoM = 0.675 * this.altura -56;
      //Indicamos que solo queremos dos decimales.  
      this.rangoM = parseFloat(this.rangoM.toFixed(2));
      this.rangoF = this.rangoM + 5;
      //Indicamos que solo queremos dos decimales.
      this.rangoF = parseFloat(this.rangoF.toFixed(2));

    }


  }

}
