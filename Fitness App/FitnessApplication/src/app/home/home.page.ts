import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  signupView: boolean = false;
  viewPasswordLogin: boolean = false;
  viewPasswordRegister: boolean = false;
  passwordTypeLogin: string = 'password';
  passwordTypeRegister: string = 'password';
  today;

  constructor() {
    this.today = new Date().toISOString();
  }

  toggleSignUpView() {
    this.signupView = !this.signupView;
  }

  //Visualizar/ocultar password del formulario de login
  toggleViewPasswordLogin() {
    if(this.viewPasswordLogin) {
      this.passwordTypeLogin = 'password';
      this.viewPasswordLogin = false;
    }
    else {
      this.passwordTypeLogin = 'text';
      this.viewPasswordLogin = true;
    }
  }

  //Visualizar/ocultar password del formulario de registro
  toggleViewPasswordRegister() {
    if(this.viewPasswordRegister) {
      this.passwordTypeRegister = 'password';
      this.viewPasswordRegister = false;
    }
    else {
      this.passwordTypeRegister = 'text';
      this.viewPasswordRegister = true;
    }
  }

  
}
