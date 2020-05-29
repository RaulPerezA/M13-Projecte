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
   
  }


  //Método que nos permite obtener la posición de la receta que hemos seleccionado
  select(receta:Receta) {
    this.presentLoading();
   
     //Guardamos en el storage la receta que hemos seleccionado.
    this.storage.set('recetaEnter',receta);

    //Navegamos a la siguiente página mediante el nav controller.
    this.navCtrl.navigateForward('/onereceta');
  }

  //Método que nos permite obtener el texto del search bar y a través de un pipe filtrar la lista de recetas.
  search(event) {
    this.textoBuscar = event.detail.value;
  }

  //Método para mostrar los filtros.
  showFilter() {
    this.filter = !this.filter;
  }

  //Método para mostrar que etiqueta del filtro esta seleccionada.
  selectChip(position: number) {
    
    this.chipsSelected[position] = !this.chipsSelected[position];
    
  }

  //Método asincrono para mostrar la pantalla de carga.
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'CARGANDO...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    
  }

}
