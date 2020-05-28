import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RutinaDia } from '../Objects/RutinaDia';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { RoutineService } from '../routine.service';

@Component({
  selector: 'app-editgeneral',
  templateUrl: './editgeneral.page.html',
  styleUrls: ['./editgeneral.page.scss'],
})
export class EditgeneralPage implements OnInit {

  bienvenida:boolean=false;
  titulo:string;
  daily:Array<RutinaDia>;
  active =  { val: 'Activa', isChecked: false };
  resultRutina: Observable<any>;
  idGeneral:string;

  constructor(private navCtrol: NavController, private storage:Storage, private routineService:RoutineService) { }

  //Inicializamos la página.
  ngOnInit() {}

  ionViewWillEnter(){
    console.log("rutinas diarias");
    //Creamos un array de rutinas diarias.
    this.daily = new Array<RutinaDia>();
    //Obtenemos las rutinas diarias de una rutina general.
    this.storage.get('dailyGeneral').then( general => {
      this.titulo=general.nombre;
      this.idGeneral=general._id;
      if(general.activa==true){
        this.active.isChecked=true;
      }
      else {
        this.active.isChecked=false;
      }
      //Recorremos el array de rutinas diarias.
      for(let d of general.rutinasDias){
        //Guardamos las rutinas diarias en un array para poder visualizarlas en el html.
        this.daily.push(d);
      }

      if(this.daily.length==0){
        this.bienvenida=true;
      }
      else{
        this.bienvenida=false;
      }
    });
  }

  activarRutina(){
    this.resultRutina = this.routineService.setRoutineActive(this.idGeneral);
    console.log(this.resultRutina);
    let promesa:Promise<any>;
    promesa = this.resultRutina.toPromise();
    
    promesa.then(datos => {
      console.log(datos);
      this.storage.set('rutinas',datos);
      this.navCtrol.navigateForward('/exercices');
    }); 
  }

  redirect(){
    this.navCtrol.navigateForward('/exercices');
  }

  editName(){
    //AQUI CAMBIAR NOMBRE DE LA RUTINA DE DIA.
  }

  addDaily() {
    this.navCtrol.navigateForward('/add-daily');
  }

  goToDaily(evento) {
    console.log("evento",evento);
    let observable:Observable<any>=this.routineService.getDiaSeleccionado(this.idGeneral,evento.nombre);
    observable.toPromise().then( observable => {
      console.log("observableGeneral",observable);
      this.storage.set('dailyDay',observable);
      this.navCtrol.navigateForward('/listexercice');
    });
    
    
  }

  removeExercise(evento){
    //AQUI TENDRÁ QUE ELIMINAR EL OBJETO SELECCIONADO
  }
}
