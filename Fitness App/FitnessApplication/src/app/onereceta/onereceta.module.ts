import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnerecetaPageRoutingModule } from './onereceta-routing.module';

import { OnerecetaPage } from './onereceta.page';
import { HttpClientModule} from "@angular/common/http";

//import { RecetaService } from '../receta.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnerecetaPageRoutingModule,
    HttpClientModule
 //   RecetaService
  ],
  declarations: [OnerecetaPage]
})
export class OnerecetaPageModule {}
