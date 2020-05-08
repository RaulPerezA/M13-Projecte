import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  infiniteScroll: IonInfiniteScroll;
  signupView: boolean = false;
  viewPasswordLogin: boolean = false;
  viewPasswordRegister: boolean = false;
  passwordTypeLogin: string = 'password';
  passwordTypeRegister: string = 'password';
  check: boolean = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  //Variable para recoger la fecha y hora actual.
  today;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
    this.today = new Date().toISOString();
    
    //Datos del formulario del login
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
    
    //Datos del formulario de registro
    this.registerForm = this.formBuilder.group({
      name: [''],
      surnames: [''],
      birthdate: [''],
      weight: [''],
      height: [''],
      email: [''],
      password: ['']
    });

  }
  
  ngOnDestroy(){
    console.log("Se ha destruido la pagina de loguin y registro");
  }

  //Funcion para mostrar o ocultar el formulario de registro.
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

  //Activar/desactivar boton de login del formulario de registro si no se ha seleccionado el campo de terminos y condiciones.
  checked(): void {
    this.check = !this.check;
  }

  //Establecer pagina raiz al loguearse.
  login() {
    this.navCtrl.navigateRoot('/main');
    console.log(this.loginForm.value);
  }

  //Establecer pagina raiz al registrarse.
  register() {
    this.navCtrl.navigateRoot('/slides');
    console.log(this.registerForm.value);
  }
}
