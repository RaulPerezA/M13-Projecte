import { Component, OnInit, SimpleChange } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoginService } from '../login.service';
import { compileInjector } from '@angular/compiler';
import { User } from '../Objects/User';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  user:User;
  username:String;
  userData = [];
  info = ["Nombre", "Apellidos", "Peso", "Altura"];
  edit:boolean = false;

  constructor(private storage:Storage) { }

  ngOnInit() {
    //Acceder al storage para obtener los datos del usuario.
    this.storage.get('user').then((usuario)=>{
      console.log('usuario',usuario);
      this.user = new User(usuario.nombre, usuario.apellidos, usuario.email, usuario.userName, usuario.contraseña, usuario.fecha_nacimiento, usuario.peso, usuario.altura);
      this.username = this.user.getUsername();
      this.userData = [this.user.getName(), this.user.getSurnames(), this.user.getWeight(), this.user.getHeight()];
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
