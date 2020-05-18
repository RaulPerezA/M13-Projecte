import { Component, ViewChild, ɵConsole } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service'; 
import { Observable } from 'rxjs';
import { User } from '../Objects/User';
import { Storage } from '@ionic/storage';
import { Receta } from '../Objects/Receta';
import { RecipesService } from '../recipes.service'; 
import { Rutina } from '../Objects/Rutina';
import { RoutineService } from '../routine.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datos:any;
  email:string;
  dataLoginUser:Observable<any>;
  resultLogin: Observable<any>;
  resultRegister: Observable<any>;
  infiniteScroll: IonInfiniteScroll;
  signupView: boolean = false;
  viewPasswordLogin: boolean = false;
  viewPasswordRegister: boolean = false;
  passwordTypeLogin: string = 'password';
  passwordTypeRegister: string = 'password';
  check: boolean = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  user:User;
  resultReceta: Observable<any>;
  recetas:Array<Receta>;
  resultRutina: Observable<any>;
  rutinas:Array<Rutina>;

  //Variable para recoger la fecha y hora actual.
  today;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private loginService: LoginService, private registerService: RegisterService, private storage:Storage, private recipesService:RecipesService, private routineService:RoutineService) {
    this.today = new Date().toISOString();
    
    //Datos del formulario del login
    this.loginForm = this.formBuilder.group({
      emailusername: [''],
      password: ['']
    });
    
    //Datos del formulario de registro
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      surnames: ['',[Validators.required]],
      birthdate: ['',[Validators.required]],
      weight: ['',[Validators.required]],
      height: ['',[Validators.required]],
      username: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
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
  async login() {

    //RECOGER CAMPOS DEL FORMULARIO LOGIN
    console.log("usernamemail",this.loginForm.value.emailusername);
    console.log("password",this.loginForm.value.password);
    
    //ENVIARSELOS AL METODO DEL SERVICIO PARA HACER EL LOGIN
    this.resultLogin = this.loginService.getLogin(this.loginForm.value.emailusername,this.loginForm.value.password);
    console.log(this.resultLogin);
    let promesa:Promise<any>;
    promesa = this.resultLogin.toPromise();
    
    //COMPROBAR SI EL LOGIN ES CORRECTO, SI ES ASÍ SE LE REDIRECCIONARA A LA PANTALLA DEL MAIN(RUTINAS Y ALIMENTOS)
    if(await promesa==true){
      console.log("HA DEVUELTRO TRUE");

      //Obtener los datos del usuario logueado.
      this.email = this.loginForm.value.emailusername;
      this.dataLoginUser = this.loginService.getLoginUser(this.email);

      let datosUser:Promise<any>;
      datosUser = this.dataLoginUser.toPromise();
      console.log("datosUser",datosUser);

      //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
      datosUser.then(datos => {
        this.datos = datos;
        this.storage.set('user',datos);
      });
      this.recipes();
      this.routines(this.email);
      this.navCtrl.navigateRoot('/main');
    }
    else {
      console.log("HA DEVUELTO FALSE");
    }
  
  }

  //Establecer pagina raiz al registrarse.
  async register() {
    
    console.log(this.registerForm.value);
    
    this.user = new User(this.registerForm.value.name,this.registerForm.value.surnames,this.registerForm.value.email,this.registerForm.value.username,this.registerForm.value.password,this.registerForm.value.birthdate,this.registerForm.value.weight,this.registerForm.value.height);

    //Guardar datos del formulario en el storage.
    this.storage.set('user',this.user);

    console.log("RegisterStorage",this.user);

    this.resultRegister = this.registerService.createRegister(this.user);
    console.log(this.resultRegister);
    let promesaRegister:Promise<any>;
    promesaRegister = this.resultRegister.toPromise();

    if(await promesaRegister===true){
      this.recipes();
      this.routines(this.user.getUsername());
      this.navCtrl.navigateRoot('/slides');
    }
    else {
      console.log("error de registro");
    }

    console.log("registro",promesaRegister);

  }

  //Devolver todas las recetas al iniciar la sesion
  async recipes() {
    
    console.log("queremos conseguir las recetas.");
    
    this.resultReceta = this.recipesService.createRecetas();
    console.log(this.resultReceta);
    let promesa:Promise<any>;
    promesa = this.resultReceta.toPromise();
    
    console.log("datos recetas",promesa);

    //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
    promesa.then(datos => {
      this.datos = datos;
      this.storage.set('recetas',datos);
    });
  }

  //Devolver todas las rutinas de un solo USUARIO
  async routines(userName:string) {
    console.log("queremos conseguir las rutinas.");
    
    this.resultRutina = this.routineService.createRutinas(userName);
    console.log(this.resultRutina);
    let promesa:Promise<any>;
    promesa = this.resultRutina.toPromise();
    
    console.log("datos rutinas",promesa);

    //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
    promesa.then(datos => {
      this.datos = datos;
      this.storage.set('rutinas',datos);
    });
  }
}
