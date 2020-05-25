import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Receta } from '../Objects/Receta';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

  receta:Receta;
  recetas:Receta[]=[];
  textoBuscar:string;
  filter: boolean = false;
  chipsSelected: boolean[] = [false,false];

  constructor(private storage:Storage, private recipesService:RecipesService, private navCtrl: NavController, private loadingController: LoadingController) { }


  //Inicializamos la página y obtenemos las recetas del storage.
  ngOnInit() {
    this.textoBuscar='';
    this.storage.get('recetas').then((recetas)=>{
      console.log('recetas',recetas);
      for(let data of recetas) {

        //Creamos una receta con los datos de lstorage.
        this.receta= new Receta(data.receta, data.alimentos, data.explicacion, data.tipoReceta, data.calorias, data.imagen);
        //Añadimos las recetas a los arrays.
        this.recetas.push(this.receta);
      }
    });
  }


  //Destruimos la página cuando la abandonamos.
  ngOnDestroy() {
    console.log("Pagina de dietas destruida.");
  }


  //Método que nos permite obtener la posición de la receta que hemos seleccionado
  select(receta:Receta) {
    this.presentLoading();
    console.log("number",receta);
     //Guardamos en el storage la receta que hemos seleccionado.
    this.storage.set('recetaEnter',receta);

    //Navegamos a la siguiente página mediante el nav controller.
    this.navCtrl.navigateForward('/onereceta');
  }

  search(event) {
    this.textoBuscar = event.detail.value;
  }

  showFilter() {
    this.filter = !this.filter;
  }
  selectChip(position: number) {
    console.log(position);
    this.chipsSelected[position] = !this.chipsSelected[position];
    console.log(this.chipsSelected);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
