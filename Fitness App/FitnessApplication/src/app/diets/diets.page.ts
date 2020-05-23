import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Receta } from '../Objects/Receta';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

  recetasAll=[];
  receta:Receta;
  recetasArr=[];
  constructor(private storage:Storage, private recipesService:RecipesService, private navCtrl: NavController) { }

  
  ngOnInit() {
    this.storage.get('recetas').then((recetas)=>{
      console.log('recetas',recetas);
      for(let data of recetas) {
        
        this.receta= new Receta(data.receta, data.alimentos, data.explicacion, data.tipoReceta, data.calorias);
       

        this.recetasAll.push(this.receta);
        this.recetasArr.push(this.receta.getReceta());
       
      }
    })
  }


  ngOnDestroy() {
    console.log("Pagina de dietas destruida.");
  }

  select(index:number) {
    console.log("number",index);
   
    this.storage.set('recetaEnter',this.recetasAll[index]);
   
    this.navCtrl.navigateForward('/onereceta');
  }

}
