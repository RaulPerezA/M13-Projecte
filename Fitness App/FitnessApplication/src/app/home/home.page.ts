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
import { Ejercicio } from '../Objects/Ejercicio';
import { ExerciseService } from '../exercise.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string;
  password:string;
  credentials:string;
  datos:any;
  email:string;
  chain:string;
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
  resultEjercicio: Observable<any>;
  ejercicios:Ejercicio[]=[];
  ejercicio:Ejercicio;

  save:boolean = false;


  //Variable para recoger la fecha y hora actual.
  today;



  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private loginService: LoginService, private registerService: RegisterService, private storage:Storage, private recipesService:RecipesService, private routineService:RoutineService, private exerciseService:ExerciseService, private loadingController: LoadingController) {

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
  
  ngOnInit() {
    console.log("hola");
    this.save = this.loginService.getSaveCredentials(); 
    console.log("this.save",this.save);

    if(this.save==true) {
      
      this.storage.get('credentials').then(credenciales => {
        let splitChain = credenciales.split(" ");
        this.username = splitChain[0];
        this.password = splitChain[1];
      });
      console.log("chain",this.chain);
      //let splitChain = this.chain.split(" ");
      //this.username = splitChain[0];
      //this.password = splitChain[1];
    }
    else {
      this.username="";
      this.password="";
    }

    this.loginService.resetCredentials();

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
    this.presentLoading();
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

      //Guardar datos del formulario de login para usarlos si quiere mantener las credenciales
      this.credentials = this.loginForm.value.emailusername + " " + this.loginForm.value.password;
      this.storage.set('credentials',this.credentials);

      //Obtener los datos del usuario logueado.
      this.email = this.loginForm.value.emailusername;
      this.dataLoginUser = this.loginService.getLoginUser(this.email);

      let datosUser:Promise<any>;
      datosUser = this.dataLoginUser.toPromise();
      console.log("datosUser",datosUser);

      //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
      datosUser.then(datos => {
        this.datos = datos;
        console.log("this.datos",this.datos);
        this.storage.set('user',datos);
      });
      this.recipes();
      this.routines(this.email);
      this.exercises();
      this.navCtrl.navigateRoot('/main');
    }
    else {
      console.log("HA DEVUELTO FALSE");
    }
  
  }

  //Establecer pagina raiz al registrarse.
  async register() {
    this.presentLoading();
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
      this.exercises();
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
  
  
  //Devolver todos los ejercicios
  async exercises() {
    console.log("queremos conseguir los ejercicios.");
    this.resultEjercicio = this.exerciseService.getAllExercices();
   
    this.resultEjercicio.toPromise().then(ejercicios => {
      console.log(ejercicios);
      
      for(let i of ejercicios) {

        console.log("i",i);
        this.ejercicio = new Ejercicio(i._id, i.ejercicio, i.imagen, i.video, i.descripcion, i.dificultad, i.especificacion, i.grupoMuscular);

        this.ejercicios.push(this.ejercicio);
      }
    this.storage.set('ejercicios',this.ejercicios);  
    });
  
    
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  saveCredentials() {
      
    this.loginService.saveCredentials();
  
  }

}
