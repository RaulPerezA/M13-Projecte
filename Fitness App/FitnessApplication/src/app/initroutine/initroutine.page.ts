import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MaxLengthValidator } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ExerciseService } from '../exercise.service';
import { Ejercicio } from '../Objects/Ejercicio';
import { RutinaDia } from '../Objects/RutinaDia';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';

const circleR = 80;
const circleDasharray = 2 + Math.PI * circleR;

@Component({
  selector: 'app-initroutine',
  templateUrl: './initroutine.page.html',
  styleUrls: ['./initroutine.page.scss'],
})
export class InitroutinePage implements OnInit {

  ejercicio:Ejercicio;
  rutinaDia:RutinaDia;
  rutinaEjercicio:RutinaEjercicio;
  posRutEjercicio:Number = 0;
  posEjercicio:Number = 0;

  //implements para el time
  time: BehaviorSubject<string> =new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer:number;
  interval;
  tempo:boolean = false;
  startDuration = 5;
  circleR = circleR;
  circleDasharray = circleDasharray;
  state:'start' | 'stop' = 'stop';

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.crearRutina();
  }

  crearRutina(){
    this.storage.get('RealizarEjercicios').then((RealizarEjercicios)=>{
      console.log('ejercicios',RealizarEjercicios);
      this.rutinaDia= new RutinaDia(RealizarEjercicios.nombre, RealizarEjercicios.ejercicios);
    });
  }

  comenzarSesion(){
    console.log("AQUI IRAN LA SERIES DE EJERCICIOS");

    //la idea es hacer un for de todas las rutinas de ejercicios, por cada for habra otro for para cada ejercicio
    
  }


  startTimer(duration:number){
    this.state= 'start';
    clearInterval(this.interval);
    this.timer = duration;
    this.updateTimeValue();
    this.interval = setInterval( ()=>{
      this.updateTimeValue();
    }, 1000);
  }

  stopTimer(){
    clearInterval(this.interval);
  //  this.time.next('00:00');
  //PONER QUE CUANDO LE DE AL INICIAR DE NUEVO SE QUEDE CON EL MISMO TIEMPO QUE CON EL QUE HA DADO AL STOP.
    this.state = 'stop';
  }

  
  percentageOffset(percent){
    const percentFloat = percent / 100;
    return circleDasharray * (1 - percentFloat);
  }

  updateTimeValue(){
    let minutes:any= this.timer / 60;
    let seconds:any= this.timer % 60;

    minutes= String('0' + Math.floor(minutes)).slice(-2);
    seconds= String('0' + Math.floor(seconds)).slice(-2);

    const text =minutes + ':' + seconds;
    this.time.next(text);

    const totalTime = this.startDuration;
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    this.percent.next(percentage);
    
    --this.timer;
    if(this.timer<-1){
      if(this.tempo){
        this.tempo=false;
      }
      else{
        this.tempo=true;
      }
      this.startTimer(this.startDuration);
    }
  }
}
