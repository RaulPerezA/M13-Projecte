import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';
import { DailyrutineService } from '../dailyrutine.service';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-daily',
  templateUrl: './add-daily.page.html',
  styleUrls: ['./add-daily.page.scss'],
})
export class AddDailyPage implements OnInit {

  observable:Observable<any>;
  _idGeneral:string;
  formDaily: FormGroup;
  ejercicios:Array<RutinaEjercicio> = [];

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private dailyService: DailyrutineService, private storage: Storage) { 

    //Formulario con los datos que se recogeran.
    this.formDaily = this.formBuilder.group({
      name: ['',Validators.required],
      ejercicios: [this.ejercicios]
    });

  }

  //Inicialicamos la pagina y recogemos la id de la rutina general mediante el storage, luego la almacenamos en una variable para poder usarla.
  ngOnInit() {
    this.storage.get('idGeneral').then(id => {
      console.log("id de la general",id);
      this._idGeneral = id;
    });
  }

  //Metodo para insertar la rutina diaria creada en la base de datos, esta rutina se incrustara en el documento que tenga la id de la rutina general que hemos guardado en _idGeneral.
  listExercice() {

    //Insertar la rutina diaria en la base de datos.
    this.observable = this.dailyService.saveDailyRutine(this._idGeneral, this.formDaily.value.name);
    this.observable.toPromise().then(rutine => {
      console.log("rutina",rutine);
    });


    console.log(this.formDaily.value);
    //Navegamos a la siguiente página mediante el nav controller.
    this.navCtrl.navigateForward('listexercice');
  }

}
