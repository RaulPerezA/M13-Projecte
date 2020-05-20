import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-daily',
  templateUrl: './add-daily.page.html',
  styleUrls: ['./add-daily.page.scss'],
})
export class AddDailyPage implements OnInit {

  formDaily: FormGroup;
  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) { 

    this.formDaily = this.formBuilder.group({
      name: ['',Validators.required]
    });

  }

  ngOnInit() {
  }

  listExercice() {
    console.log(this.formDaily.value);
    this.navCtrl.navigateForward('listexercice');
  }

}
