import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  name: string = "NombrePrueba";
  surnames: string = "Apellido1 Apellido2";
  kg: string = "100kg";
  date: string = "10/10/2020";
  m: string = "100m";

  userData = [this.name, this.surnames, this.kg, this.date, this.m];
  info = ["Nombre", "Apellidos", "Fecha", "Peso", "Altura"];

  edit:boolean = false;

  constructor() { }

  ngOnInit() {
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
