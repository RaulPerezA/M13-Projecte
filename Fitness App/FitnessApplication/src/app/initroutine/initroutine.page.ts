import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ExerciseService } from '../exercise.service';
import { User } from '../Objects/User';
import { Ejercicio } from '../Objects/Ejercicio';
import { RutinaDia } from '../Objects/RutinaDia';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { AlertController } from '@ionic/angular';
import { RoutineService } from '../routine.service';

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

  //Con estas variables controlaremos las series y el tiempo por serie
  user:User;
  ejercicio:Ejercicio;
  ejercicios:Ejercicio[];
  rutinaDia:RutinaDia;
  rutinaEjercicio:RutinaEjercicio;
  resultRutina: Observable<any>;
  resultEjercicio: Observable<any>;
  rutinasEjercicios:RutinaEjercicio[]=[];
  rutinas:number[]=[];
  series:number=0;
  seriesPorEjercicio:number[]=[];
  posicion:number=0;
  posicionSerie:number=0;
  posicionEjercicio:number=0;
  numSec:number=0;
  acabada:boolean=false;
  

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

  constructor(private storage:Storage, private router: Router, private exerciseService:ExerciseService, private alertCtrl: AlertController, private routineService:RoutineService) { }

  ngOnInit() {
    let audio = new Audio();
    this.storage.get('EjerciciosARealizar').then((eje)=>{
      this.ejercicios=eje;
      console.log(this.ejercicios);
    });

    this.storage.get('rutinaDia').then((rutinaDiaria)=>{
      this.rutinaDia=rutinaDiaria;
    });

    this.storage.get('RealizarEjercicios').then((RealizarEjercicios)=>{
      console.log('ejercicios',RealizarEjercicios);
      for(let ex of RealizarEjercicios){
        this.rutinaEjercicio=new RutinaEjercicio(ex['nombre'], ex['ejercicio'], ex['series'], ex['modoEjercitar'], ex['repeticionesSerie'], ex['segundosSerie'], ex['segundosDescanso']);
        
        for(let i of this.ejercicios) {
          if(i['_id']==this.rutinaEjercicio.getEjercicio()){
            console.log(i['ejercicio']);
            this.titulos.push(i['ejercicio']);
            this.imagenes.push(i['imagen']);
            this.videos.push(i['video']);
          }
        }
        for(let j=0;j<this.rutinaEjercicio.getSeries();j++){
          this.rutinas.push(this.rutinaEjercicio.getSegundosSerie());
          this.rutinas.push(this.rutinaEjercicio.getSegundosDescanso());
          this.series=this.series+2;
        }
        this.seriesPorEjercicio.push(this.series);
        this.numSec=this.rutinas[0];
        this.titulo=this.titulos[0];
        this.imagen=this.imagenes[0];
        this.video=this.videos[0];
      }
      console.log("seriesPorEjercicio"+this.seriesPorEjercicio);
      console.log("titol"+this.titulos);
      console.log("img"+this.imagenes);
      console.log("videos"+this.videos);
      console.log("rut"+this.rutinas);
    });

    
  }

  ngOnDestroy(){
    this.stopTimer();
    console.log("Se ha destruido la pagina de continuar rutina");
  }

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
    if(this.timer==-1){
      let audio = new Audio();
      audio.src = "./assets/finish_time.wav";
      audio.play();
    }
    if(this.timer<-1){
      this.posicion++;
      if(this.posicion==this.rutinas.length-1){
        this.acabada=true;
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
    this.tempo=false;
    this.titulo="TERMINADO"
    console.log("DIA FINALIZADO");
    this.storage.get('user').then((usuario)=>{
      
      this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
      this.resultRutina = this.routineService.cambiarDia(this.user.getUsername());
      console.log(this.resultRutina);
      let promesa:Promise<any>;
      promesa = this.resultRutina.toPromise();
  
      //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
      promesa.then(datos => {
        this.alert();
        setTimeout( ()=>{
          this.router.navigateByUrl('/main');
        }, 5000);
      });
    });

  }
  //Mostrar pop up
  async alert() {
    const alert = await this.alertCtrl.create({
      header: 'Has terminado la rutina '+this.rutinaDia['nombre'],
      message: 'Serás redireccionado a la página inicial.',
      cssClass: 'custom-ok',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: (option) => {
           console.log("Se ha terminado!");
          }
        }
      ]
    });
    alert.dismiss();
    await alert.present();
  }


}
