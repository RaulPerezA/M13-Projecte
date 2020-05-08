import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {

  userData = ["NombrePrueba", "Apellido1 Apellido2", "100kg", "100m", "username","email@email.com"];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Pagina destruida.");
  }

  editProfile() {
    console.log("Has clicado en editar perfil del usuario");
  }

  //Volver a la página anterior
  back() {

  }

}
