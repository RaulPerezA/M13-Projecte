import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addgeneral',
  templateUrl: './addgeneral.page.html',
  styleUrls: ['./addgeneral.page.scss'],
})
export class AddgeneralPage implements OnInit {

  generalForm:FormGroup;
  activa:boolean = false;

  constructor(private navCtrl: NavController, private storage:Storage, private formBuilder:FormBuilder) {

    this.generalForm = this.formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      activa: ['',Validators.required]
    });

   }

  ngOnInit() {
    this.activa = false;
  }

  editGeneral() {

    if(this.activa==true){
      this.generalForm.value.activa = this.activa;
    }
    else {
      this.generalForm.value.activa = this.activa;
    }

    console.log(this.generalForm.value);
    this.navCtrl.navigateForward('/editgeneral');
    
  }

  activar() {
    this.activa = !this.activa;
    console.log(this.activa);
  }

}
