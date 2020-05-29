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
      username: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  
  ngOnInit() {
    this.save = this.loginService.getSaveCredentials(); 

    if(this.save==true) {
      
      this.storage.get('credentials').then(credenciales => {
        let splitChain = credenciales.split(" ");
        this.username = splitChain[0];
        this.password = splitChain[1];
      });
     
    }
    else {
      this.username="";
      this.password="";
    }

    this.loginService.resetCredentials();

  }


  ngOnDestroy(){
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
      
    //ENVIAR LOS CAMPOS DEL FORMULARIO DE LOGIN AL SERVICIO PARA LA COMPROBACIÓN DEL LOGIN DE USUARIO
    this.resultLogin = this.loginService.getLogin(this.loginForm.value.emailusername,this.loginForm.value.password);
    
    let promesa:Promise<any>;
    promesa = this.resultLogin.toPromise();
    
    //COMPROBAR SI EL LOGIN ES CORRECTO, SI ES ASÍ SE LE REDIRECCIONARA A LA PANTALLA DEL MAIN(RUTINAS Y ALIMENTOS)
    if(await promesa==true){
      
      //Guardar datos del formulario de login para usarlos si quiere mantener las credenciales
      this.credentials = this.loginForm.value.emailusername + " " + this.loginForm.value.password;
      this.storage.set('credentials',this.credentials);

      //Obtener los datos del usuario logueado.
      this.email = this.loginForm.value.emailusername;
      this.dataLoginUser = this.loginService.getLoginUser(this.email);

      let datosUser:Promise<any>;
      datosUser = this.dataLoginUser.toPromise();
     

      //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
      datosUser.then(datos => {
        this.datos = datos;
        
        this.storage.set('user',datos);
      });
      this.recipes();
      this.routines(this.email);
      this.exercises();
      this.navCtrl.navigateRoot('/main');
    }
   
  
  }

  //Establecer pagina raiz al registrarse.
  async register() {
    this.presentLoading();
    
    
    this.user = new User(this.registerForm.value.name,this.registerForm.value.surnames,this.registerForm.value.email,this.registerForm.value.username,this.registerForm.value.password,this.registerForm.value.birthdate,this.registerForm.value.weight,this.registerForm.value.height);

    //Guardar datos del formulario en el storage.
    this.storage.set('user',this.user);

    

    this.resultRegister = this.registerService.createRegister(this.user);
    
    let promesaRegister:Promise<any>;
    promesaRegister = this.resultRegister.toPromise();

    if(await promesaRegister===true){
      this.recipes();
      this.routines(this.user.getUsername());
      this.exercises();
      this.navCtrl.navigateRoot('/slides');
    }
    

    

  }

  //Devolver todas las recetas al iniciar la sesion
  async recipes() {
    
    
    
    this.resultReceta = this.recipesService.createRecetas();
    
    let promesa:Promise<any>;
    promesa = this.resultReceta.toPromise();
    
    

    //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
    promesa.then(datos => {
      this.datos = datos;
      this.storage.set('recetas',datos);
    });
  }

  //Devolver todas las rutinas de un solo USUARIO
  async routines(userName:string) {
    
    this.resultRutina = this.routineService.createRutinas(userName);
    let promesa:Promise<any>;
    promesa = this.resultRutina.toPromise();
    

    //Crear el usuario con los datos de la promesa y almacenarlo en el storage.
    promesa.then(datos => {
      this.datos = datos;
      this.storage.set('rutinas',datos);
    });
  }
  
  
  //Devolver todos los ejercicios
  async exercises() {
    this.resultEjercicio = this.exerciseService.getAllExercices();
   
    this.resultEjercicio.toPromise().then(ejercicios => {
      
      for(let i of ejercicios) {

        this.ejercicio = new Ejercicio(i._id, i.ejercicio, i.imagen, i.video, i.descripcion, i.dificultad, i.especificacion, i.grupoMuscular);

        this.ejercicios.push(this.ejercicio);
      }
    this.storage.set('ejercicios',this.ejercicios);  
    });
  
    
    
  }

  //Método el cual mostrará un pop up que simulara una pantalla de carga.
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
   
  }

  saveCredentials() {
      
    this.loginService.saveCredentials();
  
  }

}
