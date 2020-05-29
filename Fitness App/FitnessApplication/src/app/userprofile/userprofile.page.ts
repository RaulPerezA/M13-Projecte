import { Component, OnInit, SimpleChange } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoginService } from '../login.service';
import { compileInjector } from '@angular/compiler';
import { User } from '../Objects/User';
import {  UserserviceService } from '../userservice.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  image:string="./assets/perfil.jpg";
  observer:Observable<any>;
  user:User;
  username:String;
  userData = [];
  info = ["Nombre", "Apellidos", "Altura (cm)", "Peso (kg)"];
  edit:boolean = false;
  formedit: FormGroup;
  placeholders = ["name","surnames","height","weight"];

  constructor(private storage:Storage, private userService:UserserviceService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    //Acceder al storage para obtener los datos del usuario.
    this.storage.get('user').then((usuario)=>{
      this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
      this.username = this.user.getUsername();
      this.userData = [this.user.getName(), this.user.getSurnames(), this.user.getHeight(), this.user.getWeight()];
    });

    //Obtener los datos que ha introducido el usuario en los campos del formulario.
    this.formedit = this.formbuilder.group({
      name: [''],
      surnames: [''],
      weight: [''],
      height: ['']
    });


  }

  //Destruimos la página al abandonarla.
  ngOnDestroy() {

  }

  //Método que nos permite editar el perfil de usuario.
  editData() {

    this.edit = !this.edit;
  }

  //Método que nos permite guardar los campos que ha introducido el usuario en el formulario.
  save():void {
    this.edit = !this.edit;
    let nombre:boolean=false;
    let apellidos:boolean=false;
    let altura:boolean=false;
    let peso:boolean=false;

    //Comprobar los campos que estan rellenados
    if(this.formedit.value.name===null ||this.formedit.value.name===""){
      nombre=true;
    }
    if(this.formedit.value.surnames===null ||this.formedit.value.surnames===""){
      apellidos=true;
    }
    if(this.formedit.value.height===null ||this.formedit.value.height===""){
      altura=true;
    }
    if(this.formedit.value.weight===null ||this.formedit.value.weight===""){
      peso=true;
    }
    
    //Editar campos del usuario
    if(nombre && apellidos && altura && peso){
 
      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.user.getSurnames(),this.user.getHeight(),this.user.getWeight());
      this.user.setName(this.user.getName());
      this.user.setSurnames(this.user.getSurnames());
      this.user.setHeight(this.user.getHeight());
      this.user.setWeight(this.user.getWeight());
    }
    else if(nombre && apellidos && altura){

      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.user.getSurnames(),this.user.getHeight(),this.formedit.value.weight);
      this.user.setWeight(this.formedit.value.weight);
    }
    else if(nombre && peso && altura){

      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.formedit.value.surnames,this.user.getHeight(),this.user.getWeight());
      this.user.setSurnames(this.formedit.value.surnames);

    }
    else if(nombre && apellidos && peso){

      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.user.getSurnames(),this.formedit.value.height,this.user.getWeight());
      this.user.setHeight(this.formedit.value.height);
    }
    else if(apellidos && altura && peso){

      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.user.getSurnames(),this.user.getHeight(),this.user.getWeight());
      this.user.setName(this.formedit.value.name);
    }
    else if(nombre && apellidos){

      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.user.getSurnames(),this.formedit.value.height,this.formedit.value.weight);
      this.user.setHeight(this.formedit.value.height);
      this.user.setWeight(this.formedit.value.weight);
    }
    else if(nombre && altura){

      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.formedit.value.surnames,this.user.getHeight(),this.formedit.value.weight);
      this.user.setWeight(this.formedit.value.weight);
      this.user.setSurnames(this.formedit.value.surnames);
    }
    else if(nombre && peso){

      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.formedit.value.surnames,this.formedit.value.height,this.user.getWeight());
      this.user.setSurnames(this.formedit.value.surnames);
      this.user.setHeight(this.formedit.value.height);
    }
    else if(apellidos && peso) {
 
      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.user.getSurnames(),this.formedit.value.height,this.user.getWeight());
      this.user.setHeight(this.formedit.value.height);
      this.user.setName(this.formedit.value.name);
    }
    else if(apellidos && altura){

      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.user.getSurnames(),this.user.getHeight(),this.formedit.value.weight);
      this.user.setName(this.formedit.value.name);
      this.user.setWeight(this.formedit.value.weight);
    }
    else if(altura && peso){

      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.formedit.value.surnames,this.user.getHeight(),this.user.getWeight());
      this.user.setName(this.formedit.value.name);
      this.user.setSurnames(this.formedit.value.surnames);
    }
    else if(nombre){

      this.observer = this.userService.editUser(this.username.toString(),this.user.getName(),this.formedit.value.surnames,this.formedit.value.height,this.formedit.value.weight);
      this.user.setSurnames(this.formedit.value.surnames);
      this.user.setHeight(this.formedit.value.height);
      this.user.setWeight(this.formedit.value.weight);
    }
    else if(apellidos){

      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.user.getSurnames(),this.formedit.value.height,this.formedit.value.weight);
      this.user.setWeight(this.formedit.value.weight);
      this.user.setHeight(this.formedit.value.height);
      this.user.setName(this.formedit.value.name);
    }
    else if(altura){

      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.formedit.value.surnames,this.user.getHeight(),this.formedit.value.weight);
      this.user.setName(this.formedit.value.name);
      this.user.setSurnames(this.formedit.value.surnames);
      this.user.setWeight(this.formedit.value.weight);
    }
    else if(peso){

      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.formedit.value.surnames,this.formedit.value.height,this.user.getWeight());
      this.user.setHeight(this.formedit.value.height);
      this.user.setName(this.formedit.value.name);
      this.user.setSurnames(this.formedit.value.surnames);
    }
    else {

      this.observer = this.userService.editUser(this.username.toString(),this.formedit.value.name,this.formedit.value.surnames,this.formedit.value.height,this.formedit.value.weight);
      this.user.setHeight(this.formedit.value.height);
      this.user.setWeight(this.formedit.value.weight);
      this.user.setName(this.formedit.value.name);
      this.user.setSurnames(this.formedit.value.surnames);
    }

    this.observer.toPromise().then(variable => {

    });

    this.persistData();
    //Limpiar campos del formulario
    this.formedit.reset();

  }

  //Cambia los campos del perfil de usuario por los intrducidos en el formulario
  persistData():void {

    this.userData = [this.user.getName(), this.user.getSurnames(), this.user.getHeight(), this.user.getWeight()];
    
    this.storage.set('user',this.user);

  }

  //Método que permite seleccionar una imagen de perfil de usuario.
  selectImage() {
  
  }

}
