import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Rutina } from '../Objects/Rutina';
import { RutinaDia } from '../Objects/RutinaDia';
import { RoutineService } from '../routine.service';
import { User } from '../Objects/User';

@Component({
  selector: 'app-continueroutine',
  templateUrl: './continueroutine.page.html',
  styleUrls: ['./continueroutine.page.scss'],
})
export class ContinueroutinePage implements OnInit {

  datos:any;
  resultRutina: Observable<any>;
  resultRutinaDia: Observable<any>;
  rutinas:Array<Rutina>;
  user:User;
  rutina:Rutina;
  rutinaDia:RutinaDia;

  constructor(private navCtrl: NavController, private alertCCtrl: AlertController,  private storage:Storage, private routineService:RoutineService) { }

  ngOnInit() {
   
  }

  ngOnDestroy() {
    console.log("Continuar rutina destruido.");
  }

  //Devolver la rutina que esta activa
  async routineActive() {
  
    console.log("queremos conseguir la rutina activa.");
    this.storage.get('user').then((usuario)=>{
      console.log('usuario',usuario);
      this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
    
      this.resultRutina = this.routineService.rutinaActiva(this.user.getUsername());
      console.log(this.resultRutina);
      let promesa:Promise<any>;
      promesa = this.resultRutina.toPromise();
      
      console.log("datos rutina activa",promesa);

      //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
      promesa.then(datos => {
        this.datos = datos;
        this.rutina = new Rutina(datos.nombre, datos.userName, datos.rutinasDias, datos.activa, datos.diaSeguimiento, datos.fechaCreacion, datos.fechaModificacion);
        //Obtener la rutina de dia a través de la posición que marca this.rutina.getDiaSeguimiento()
        //this.storage.set('rutinaActiva',this.rutina);
        this.resultRutinaDia=this.routineService.rutinaDia(this.rutina.getUserName(), this.rutina.getDiaSeguimiento());
      

        console.log(this.resultRutinaDia);
        let promesa2:Promise<any>;
        promesa2 = this.resultRutinaDia.toPromise();

        console.log("datos rutina que toca hacer hoy",promesa);

        promesa2.then(datos => {
          this.datos = datos;
          this.rutinaDia = new RutinaDia(datos.nombre, datos.ejercicios);
          this.storage.set('RealizarEjercicios',this.rutinaDia);
          console.log('RealizarEjercicios',this.rutinaDia);
        });

      });
    });
    /*

    this.resultRutina = this.routineService.rutinaActiva(this.user.getUsername());
    console.log(this.resultRutina);
    let promesa:Promise<any>;
    promesa = this.resultRutina.toPromise();
    
    console.log("datos rutina activa",promesa);

    //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
    promesa.then(datos => {
      this.datos = datos;
      this.storage.set('rutinaActiva',datos);
    });
  */
    this.navCtrl.navigateRoot('/initroutine');
  }
}
