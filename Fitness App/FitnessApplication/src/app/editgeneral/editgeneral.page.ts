import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RutinaDia } from '../Objects/RutinaDia';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-editgeneral',
  templateUrl: './editgeneral.page.html',
  styleUrls: ['./editgeneral.page.scss'],
})
export class EditgeneralPage implements OnInit {

  bienvenida:boolean=false;
  titulo:string;
  daily:Array<RutinaDia>;
  constructor(private navCtrol: NavController, private storage:Storage) { }

  //Inicializamos la página.
  ngOnInit() {}

  ionViewWillEnter(){
    //Creamos un array de rutinas diarias.
    this.daily = new Array<RutinaDia>();
    //Obtenemos las rutinas diarias de una rutina general.
    this.storage.get('dailyGeneral').then( general => {
      this.titulo=general.nombre;
      //Recorremos el array de rutinas diarias.
      for(let d of general.rutinasDias){
        //Guardamos las rutinas diarias en un array para poder visualizarlas en el html.
        this.daily.push(d);
      }

      if(this.daily.length==0){
        this.bienvenida=true;
      }
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
    this.storage.set('dailyDay',evento);
    this.navCtrol.navigateForward('/listexercice');
  }

  removeExercise(evento){
    //AQUI TENDRÁ QUE ELIMINAR EL OBJETO SELECCIONADO
  }
}
