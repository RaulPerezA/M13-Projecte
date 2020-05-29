import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { DailyrutineService } from '../dailyrutine.service';
import { Storage } from '@ionic/storage';
import { RoutineService } from '../routine.service';
import { Observable } from 'rxjs';
import { Rutina } from '../Objects/Rutina';
import { RutinaDia } from '../Objects/RutinaDia';

@Component({
  selector: 'app-add-daily',
  templateUrl: './add-daily.page.html',
  styleUrls: ['./add-daily.page.scss'],
})
export class AddDailyPage implements OnInit {

  observable:Observable<any>;
  _idGeneral:string;
  formDaily: FormGroup;
  user:string;
  routinesResult:Observable<any>;
  ejercicios:Array<RutinaEjercicio> = [];
  rutina:Rutina;
  rutinaDia:RutinaDia;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private dailyService: DailyrutineService, private storage: Storage, private routineService:RoutineService) { 
    //Formulario con los datos que se recogeran.
    this.formDaily = this.formBuilder.group({
      name: ['',Validators.required],
      ejercicios: [this.ejercicios]
    });
  }

  //Inicialicamos la pagina y recogemos la id de la rutina general mediante el storage, luego la almacenamos en una variable para poder usarla.
  ngOnInit() {
    this.storage.get('idGeneral').then(id => {
      this._idGeneral = id;
    });
    this.storage.get('user').then(user => {
      this.user = user.userName;
    });
  }

  //Metodo para insertar la rutina diaria creada en la base de datos, esta rutina se incrustara en el documento que tenga la id de la rutina general que hemos guardado en _idGeneral.
  listExercice() {
    //Insertar la rutina diaria en la base de datos.
    this.observable = this.dailyService.saveDailyRutine(this._idGeneral, this.formDaily.value.name);
    this.observable.toPromise().then(rutine => {
      this.rutinaDia=rutine;
      //guardamos endailyDay la rutina diaria 
      this.storage.set('dailyDay',this.rutinaDia);

      this.routinesResult=this.routineService.getOneRoutine(this._idGeneral);
      let promesa:Promise<any>;
      promesa = this.routinesResult.toPromise();
      promesa.then(values => {
        this.storage.set('dailyGeneral',values);
      });

      this.routinesResult=this.routineService.createRutinas(this.user);
      let promesa2:Promise<any>;
      promesa2 = this.routinesResult.toPromise();
      //Mediante una promesa podemos mostrar lo que nos ha devuelto el spring.
      promesa2.then(values => {
        //una vez metida en la bd volvemos a llamar a esta funcion para descargar todas las rutinas.
        this.storage.set('rutinas',values);

        //Navegamos a la siguiente página mediante el nav controller.
        this.navCtrl.navigateForward('/listexercice');
      });
    });
  }
}
