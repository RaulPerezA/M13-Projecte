import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  username:String;
  userData = [];
  info = ["Nombre", "Apellidos", "Peso", "Altura"];

  edit:boolean = false;

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.storage.get('user').then((usuario)=>{
      console.log('usuario',usuario);
      this.username = usuario.userName;
      this.userData = [usuario.name, usuario.surnames, usuario.weight, usuario.height];
    })
  }

  ngOnDestroy() {
    console.log("Pagina de perfil destruida.");
  }

  editData() {
    console.log("Has clicado en editar perfil del usuario");
    this.edit = !this.edit;
  }

  save() {
    this.edit = !this.edit;
    //Guardar datos en la base de datos
  }

}
