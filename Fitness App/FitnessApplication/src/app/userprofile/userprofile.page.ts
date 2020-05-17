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

  image:string="./assets/adidas.jpg";
  observer:Observable<any>;
  user:User;
  username:String;
  userData = [];
  info = ["Nombre", "Apellidos", "Altura", "Peso"];
  edit:boolean = false;
  formedit: FormGroup;
  placeholders = ["name","surnames","height","weight"];

  constructor(private storage:Storage, private userService:UserserviceService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    //Acceder al storage para obtener los datos del usuario.
    this.storage.get('user').then((usuario)=>{
      console.log('usuario',usuario);
      this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
      this.username = this.user.getUsername();
      this.userData = [this.user.getName(), this.user.getSurnames(), this.user.getHeight(), this.user.getWeight()];
    });

    this.formedit = this.formbuilder.group({
      name: [''],
      surnames: [''],
      weight: [''],
      height: ['']
    });


  }

  ngOnDestroy() {
    console.log("Pagina de perfil destruida.");
  }

  editData() {
    console.log("Has clicado en editar perfil del usuario");
    this.edit = !this.edit;
  }

  save():void {
    this.edit = !this.edit;
    //Guardar datos en la base de datos
    console.log("objecto usuario",this.user);
    console.log("username",this.username);
    console.log("formulario",this.formedit.value);

    //Detectar que campos del formulario estan vacios
    if(this.formedit.value.name=="" && this.formedit.value.surnames=="" && this.formedit.value.height=="" && this.formedit.value.weight==""){
      console.log("todos los campos estan vacios, no se ha modificado nada");
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.user.getSurnames().toString(), this.user.getHeight(), this.user.getWeight());
      this.persistData(this.user.getName().toString(), this.user.getSurnames().toString(), this.user.getHeight(), this.user.getWeight());
    }

    else if(this.formedit.value.name=="" && this.formedit.value.surnames=="" && this.formedit.value.height==""){
      console.log("el nombre, apellido y altura estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.user.getSurnames().toString(), this.user.getHeight(), this.formedit.value.weight);
      this.persistData(this.user.getName().toString(), this.user.getSurnames().toString(), this.user.getHeight(), this.formedit.value.weight);
    }

    else if(this.formedit.value.name=="" && this.formedit.value.height=="" && this.formedit.value.weight==""){
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.formedit.value.surnames, this.user.getHeight(), this.user.getWeight());
      this.persistData(this.user.getName().toString(), this.user.getSurnames().toString(), this.user.getHeight(), this.formedit.value.weight);
    }

    else if(this.formedit.value.name=="" && this.formedit.value.surnames=="" && this.formedit.value.weight==""){
      console.log("el nombre, apellido y peso estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.user.getSurnames().toString(), this.formedit.value.height, this.user.getWeight());
      this.persistData(this.user.getName().toString(), this.user.getSurnames().toString(), this.formedit.value.height, this.user.getWeight());
    }
    
    else if(this.formedit.value.surnames=="" && this.formedit.value.weight=="" && this.formedit.value.height=="") {
      console.log("los apellidos, peso y altura estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.formedit.value.name, this.user.getSurnames().toString(), this.user.getHeight(), this.user.getWeight());
      this.persistData(this.formedit.value.name, this.user.getSurnames().toString(), this.user.getHeight(), this.user.getWeight());
    }

    else if(this.formedit.value.name=="" && this.formedit.value.weight=="") {
      console.log("el nombre y el peso estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.formedit.value.surnames, this.formedit.value.height, this.user.getWeight());
      this.persistData(this.user.getName().toString(), this.formedit.value.surnames, this.formedit.value.height, this.user.getWeight());
    }

    else if(this.formedit.value.surnames=="" && this.formedit.value.weight=="") {
      console.log("los apellidos, peso estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.formedit.value.name, this.user.getSurnames().toString(), this.formedit.value.height, this.user.getWeight());
      this.persistData(this.formedit.value.name, this.user.getSurnames().toString(), this.formedit.value.height, this.user.getWeight());
    }

    else if(this.formedit.value.weight=="" && this.formedit.value.height=="") {
      console.log("peso y altura estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.formedit.value.name, this.formedit.value.surnames, this.user.getHeight(), this.user.getWeight());
      this.persistData(this.formedit.value.name, this.formedit.value.surnames, this.user.getHeight(), this.user.getWeight());
    }

    else if(this.formedit.value.name=="" && this.formedit.value.height=="") {
      console.log("el nombre y la altura estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.formedit.value.surnames, this.user.getHeight(), this.formedit.value.weight);
      this.persistData(this.user.getName().toString(), this.formedit.value.surnames, this.user.getHeight(), this.formedit.value.weight);
    }

    else if(this.formedit.value.surnames=="" && this.formedit.value.height=="") {
      console.log("los apellidos y altura estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.formedit.value.name, this.user.getSurnames().toString(), this.user.getHeight(), this.formedit.value.weight);
      this.persistData(this.formedit.value.name, this.user.getSurnames().toString(), this.user.getHeight(), this.formedit.value.weight);
    }

    else if(this.formedit.value.surnames=="" && this.formedit.value.name=="") {
      console.log("los apellidos y el nombre estan vacios");
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.user.getSurnames().toString(), this.formedit.value.height, this.formedit.value.weight);
      this.persistData(this.user.getName().toString(), this.user.getSurnames().toString(), this.formedit.value.height, this.formedit.value.weight);
    }

    else if(this.formedit.value.name==""){
      this.observer = this.userService.editUser(this.username.toString(), this.user.getName().toString(), this.formedit.value.surnames, this.formedit.value.height, this.formedit.value.weight);
      this.persistData(this.user.getName().toString(), this.formedit.value.surnames, this.formedit.value.height, this.formedit.value.weight);
    }

    else if(this.formedit.value.surnames==""){
      this.observer = this.userService.editUser(this.username.toString(), this.formedit.value.name, this.user.getSurnames().toString(), this.formedit.value.height, this.formedit.value.weight);
      this.persistData(this.formedit.value.name, this.user.getSurnames().toString(), this.formedit.value.height, this.formedit.value.weight);
    }

    else if(this.formedit.value.height==""){
      this.observer = this.userService.editUser(this.username.toString(),  this.formedit.value.name, this.formedit.value.surnames, this.user.getHeight(), this.formedit.value.weight);
      this.persistData(this.formedit.value.name, this.formedit.value.surnames, this.user.getHeight(), this.formedit.value.weight);
    }

    else if(this.formedit.value.weight==""){
      this.observer = this.userService.editUser(this.username.toString(),  this.formedit.value.name, this.formedit.value.surnames, this.formedit.value.height, this.user.getWeight());
      this.persistData(this.formedit.value.name, this.formedit.value.surnames, this.formedit.value.height, this.user.getWeight());
    }
    
    else {
      this.observer = this.userService.editUser(this.username.toString(),  this.formedit.value.name, this.formedit.value.surnames, this.formedit.value.height, this.formedit.value.weight);
      this.persistData(this.formedit.value.name, this.formedit.value.surnames, this.formedit.value.height, this.formedit.value.weight);
    }

    //this.observer = this.userService.editUser(this.username.toString(), this.formedit.value.name, this.formedit.value.surnames, this.formedit.value.height, this.formedit.value.weight);
    this.observer.toPromise().then(variable => {
      console.log("variable",variable);
    });

  }

  persistData(name:string, surnames:string, weight:number, height:number):void {
    this.userData = [name, surnames, weight, height];
    this.storage.remove('user');
    this.user = new User(name, surnames, this.user.getEmail().toString(), this.username.toString(), this.user.getPassword().toString(), this.user.getBirthdate(), weight,height);
    this.storage.set('user',this.user);

  }

  selectImage() {
    console.log("hola");
  }

}
