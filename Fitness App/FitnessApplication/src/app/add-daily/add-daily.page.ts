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

    this.formDaily = this.formBuilder.group({
      name: ['',Validators.required],
      ejercicios: [this.ejercicios]
    });

  }

  ngOnInit() {
    this.storage.get('idGeneral').then(id => {
      console.log("id de la general",id);
      this._idGeneral = id;
    });
  }

  listExercice() {

    //Insertar la rutina diaria en la base de datos.
    this.observable = this.dailyService.saveDailyRutine(this._idGeneral, this.formDaily.value.name);
    this.observable.toPromise().then(rutine => {
      console.log("rutina",rutine);
    });


    console.log(this.formDaily.value);
    this.navCtrl.navigateForward('listexercice');
  }

}
