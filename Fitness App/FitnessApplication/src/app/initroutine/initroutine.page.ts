import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MaxLengthValidator } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
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

  //variables para recoger los datos necesarios los quales pondremos en la pantalla.
  titulo:string;
  imagen:string;
  video:string;
  titulos:string[]=[];
  imagenes:string[]=[];
  videos:string[]=[];
  aux:string;

  //Con estas variables controlaremos las series y el tiempo por serie
  ejercicio:Ejercicio;
  rutinaDia:RutinaDia;
  rutinaEjercicio:RutinaEjercicio;
  resultEjercicio: Observable<any>;
  rutinasEjercicios:RutinaEjercicio[]=[];
  rutinas:number[]=[];
  series:number=0;
  seriesPorEjercicio:number[]=[];
  posicion:number=0;
  posicionSerie:number=0;
  posicionEjercicio:number=0;
  numSec:number=0;
  

  //implements para el time
  time: BehaviorSubject<string> =new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer:number;
  secStop:string;
  interval;
  startDuration;
  circleR = circleR;
  tempo:boolean=true;
  circleDasharray = circleDasharray;
  state:'start' | 'stop' = 'stop';

  constructor(private storage:Storage, private exerciseService:ExerciseService ) { }

  ngOnInit() {
    this.storage.get('RealizarEjercicios').then((RealizarEjercicios)=>{
      console.log('ejercicios',RealizarEjercicios);
      this.rutinaDia= new RutinaDia(RealizarEjercicios.nombre, RealizarEjercicios.ejercicios);
      for(let ex of this.rutinaDia.getRutinaEjercicios()){
        this.rutinaEjercicio=new RutinaEjercicio(ex['nombre'], ex['ejercicio'], ex['series'], ex['modoEjercitar'], ex['repeticionesSerie'], ex['segundosSerie'], ex['segundosDescanso']);
        this.rutinasEjercicios.push(this.rutinaEjercicio);
       // this.resultEjercicio = this.exerciseService.createExercise(this.rutinaEjercicio.getEjercicio());
      }

      

      for (let i=0;i<this.rutinasEjercicios.length;i++){
        this.rutinaEjercicio=this.rutinasEjercicios[i];
        this.resultEjercicio = this.exerciseService.createExercise(this.rutinaEjercicio.getEjercicio());
        let promesa:Promise<any>;
        promesa = this.resultEjercicio.toPromise();
        
        promesa.then(datos => {
          this.ejercicio=new Ejercicio(datos.ejercicio,datos.imagen, datos.video, datos.descripcion, datos.dificultad, datos.especificacion, datos.grupoMuscular);
          this.titulos.push(this.ejercicio.getEjercicio());
          this.imagenes.push(this.ejercicio.getImagen());
          this.videos.push(this.ejercicio.getVideo());
          this.titulo=this.titulos[0];
          this.imagen=this.imagenes[0];
          this.video=this.videos[0];
        });
        for(let j=0;j<this.rutinaEjercicio.getSeries();j++){
         // this.startTimer(this.rutinaEjercicio.getSegundosSerie());
          //this.startTimer(this.rutinaEjercicio.getSegundosDescanso());
          this.rutinas.push(this.rutinaEjercicio.getSegundosSerie());
          if (i==this.rutinasEjercicios.length-1 && j==this.rutinaEjercicio.getSeries()-1){
            this.series=this.series+1;
          }
          else{
            this.rutinas.push(this.rutinaEjercicio.getSegundosDescanso());
            this.series=this.series+2;
          }
        }
        this.seriesPorEjercicio.push(this.series);
      }
      this.numSec=this.rutinas[0];
      console.log(this.seriesPorEjercicio);
      console.log(this.seriesPorEjercicio[0]);
      console.log(this.seriesPorEjercicio[1]);
      console.log(this.titulos);
      console.log(this.titulos[0]);
      console.log(this.imagenes);
      console.log(this.videos);
      console.log(this.rutinas);
    });

    
  }



  /*
  this.resultEjercicio = this.exerciseService.createExercise(this.rutinaEjercicio.getEjercicio());
      console.log(this.resultEjercicio);
      let promesa:Promise<any>;
      promesa = this.resultEjercicio.toPromise();
      
      promesa.then(datos => {
        this.ejercicio=new Ejercicio(datos.ejercicio,datos.imagen, datos.video, datos.descripcion, datos.dificultad, datos.especificacion, datos.grupoMuscular);
        console.log('EJERCICIO'+this.ejercicio.getDificultad());
        console.log('EJERCICIO QUE ESTA REALIZANDO'+this.ejercicio);
        //this.arrayEjercicios.push(this.ejercicio);
      });
      
if(this.rutinaEjercicio.getModoEjercitar()==="tiempo"){

        }

  
  */
   

  startTimer(duration:number){
    console.log("duration"+duration);
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
    this.secStop=this.time.value;
    console.log(this.secStop);
    let sep = this.secStop.split(":");
    let minutes = sep[0];
    let seconds = sep[1];
    let minutes2=Number(minutes);
    let seconds2=Number(seconds);
    this.numSec=(60*minutes2)+seconds2;
    console.log(this.numSec);
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
    if(this.timer==0){
      let audio = new Audio();
      audio.src = "./assets/finish_time.wav";
      audio.play();
    }
    if(this.timer<-1){
      this.posicion++;
      if(this.posicion==this.rutinas.length){
        this.rutinaAcabada();
      }
      else{
        if (this.tempo==true){
          this.tempo=false;
        }
        else{
          this.tempo=true;
        }
        console.log(this.seriesPorEjercicio[this.posicionSerie]);
        console.log(this.posicion);
        if(this.seriesPorEjercicio[this.posicionSerie]==this.posicion+1){
          console.log("SIGUIENTE EJERCICIO");
          this.posicionEjercicio++;
          this.titulo=this.titulos[this.posicionEjercicio];
          this.imagen=this.imagenes[this.posicionEjercicio];
          this.video=this.videos[this.posicionEjercicio];
          this.posicionSerie++;
        }
        this.startTimer(this.rutinas[this.posicion]);
      }
    }
  }

  rutinaAcabada(){
    this.time.next('00:00');
    console.log("DIA FINALIZADO");
  }


}
