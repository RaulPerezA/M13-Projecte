import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RutinaDia } from '../Objects/RutinaDia';
import { GeneralRutineService } from '../general-rutine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addgeneral',
  templateUrl: './addgeneral.page.html',
  styleUrls: ['./addgeneral.page.scss'],
})
export class AddgeneralPage implements OnInit {

  _idGeneral:string;
  observer:Observable<any>;
  user:string;
  generalForm:FormGroup;
  activa:boolean = false;
  dailyRutine:Array<RutinaDia> = [];

  constructor(private navCtrl: NavController, private storage:Storage, private formBuilder:FormBuilder, private gService:GeneralRutineService) {

    this.generalForm = this.formBuilder.group({
      name: ['',Validators.required],
      activa: ['',Validators.required],
      rutinaDia:[this.dailyRutine]
    });

   }

  ngOnInit() {
    this.activa = false;

    this.storage.get('user').then(user => {
      this.user = user.userName;
    });

  }

  async editGeneral() {

    if(this.activa==true){
      this.generalForm.value.activa = this.activa;
    }
    else {
      this.generalForm.value.activa = this.activa;
    }

    console.log(this.generalForm.value);
    console.log(this.user);
    this.observer=this.gService.saveGeneralRutine(this.user, this.generalForm.value.name,this.generalForm.value.activa);
    
    let promesa:Promise<any>;
    promesa = this.observer.toPromise();
    promesa.then(values => {
      this.storage.set('idGeneral',values._id);
    });

   
    this.storage.get('idGeneral').then(id => {
      console.log("idGeneral",id);
    });

    if(await promesa!=null){
      this.navCtrl.navigateForward('/editgeneral');
    }
    
    
  }

  activar() {
    this.activa = !this.activa;
    console.log(this.activa);
  }

}
