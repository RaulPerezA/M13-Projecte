import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RutinaDia } from '../Objects/RutinaDia';
import { Rutina } from '../Objects/Rutina';
import { GeneralRutineService } from '../general-rutine.service';
import { RoutineService } from '../routine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addgeneral',
  templateUrl: './addgeneral.page.html',
  styleUrls: ['./addgeneral.page.scss'],
})
export class AddgeneralPage implements OnInit {

  _idGeneral:string;
  observer:Observable<any>;
  routinesResult:Observable<any>;
  user:string;
  generalForm:FormGroup;
  activa:boolean = false;
  dailyRutine:Array<RutinaDia> = [];
  rutina:Rutina;

  constructor(private navCtrl: NavController, private storage:Storage, private formBuilder:FormBuilder, private gService:GeneralRutineService, private routineService:RoutineService) {

    //Formulario para obtener los datos introducidos por el usuario, con ellos podremos crear la rutina general.
    this.generalForm = this.formBuilder.group({
      name: ['',Validators.required],
      activa: ['',Validators.required],
      rutinaDia:[this.dailyRutine]
    });

   }

   //Creamos la página y inicialicamos un booleano a falso y recogemos del storage el username del usuario que se ha logueado.
  ngOnInit() {
    this.activa = false;

    this.storage.get('user').then(user => {
      this.user = user.userName;
    });

  }

  ionViewWillEnter(){

  }

  //Método asincrono, nos permite guardar la rutina general en segundo plano.
  async editGeneral() {

    if(this.activa==true){
      this.generalForm.value.activa = this.activa;
    }
    else {
      this.generalForm.value.activa = this.activa;
    }

    
    //Obtenemos lo que nos devuelve el spring a la hora de guardar la rutina general.
    this.observer=this.gService.saveGeneralRutine(this.user, this.generalForm.value.name,this.generalForm.value.activa);
    
    let promesa:Promise<any>;
    promesa = this.observer.toPromise();
    //Mediante una promesa podemos mostrar lo que nos ha devuelto el spring.
    promesa.then(values => {
      this.storage.set('idGeneral',values._id);
      this.routinesResult=this.routineService.createRutinas(this.user);
      let promesa2:Promise<any>;
      promesa2 = this.routinesResult.toPromise();
      //Mediante una promesa podemos mostrar lo que nos ha devuelto el spring.
      promesa2.then(values => {
        //una vez metida en la bd volvemos a llamar a esta funcion para descargar todas las rutinas.
        this.storage.set('rutinas',values);
       
        for(let i of values){
          this.rutina=i;
        }

        
        this.storage.set('dailyGeneral',this.rutina);

        //Una vez que el método asincrono ha acabado navegamos a la siguiente página.
        this.navCtrl.navigateForward('/editgeneral');
        
      });

   
    });
  }

  //Método que nos permite decir si la rutina general que vamos a crear estará activa o no.
  activar() {
    this.activa = !this.activa;
  }

}
