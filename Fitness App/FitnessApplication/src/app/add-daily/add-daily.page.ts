import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RutinaEjercicio } from '../Objects/RutinaEjercicio';

@Component({
  selector: 'app-add-daily',
  templateUrl: './add-daily.page.html',
  styleUrls: ['./add-daily.page.scss'],
})
export class AddDailyPage implements OnInit {

  formDaily: FormGroup;
  ejercicios:Array<RutinaEjercicio> = [];
  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) { 

    this.formDaily = this.formBuilder.group({
      name: ['',Validators.required],
      ejercicios: [this.ejercicios]
    });

  }

  ngOnInit() {
  }

  listExercice() {
    console.log(this.formDaily.value);
    this.navCtrl.navigateForward('listexercice');
  }

}
