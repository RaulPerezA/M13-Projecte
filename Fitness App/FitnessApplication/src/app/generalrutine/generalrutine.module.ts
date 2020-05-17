import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralrutinePageRoutingModule } from './generalrutine-routing.module';

import { GeneralrutinePage } from './generalrutine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralrutinePageRoutingModule
  ],
  declarations: [GeneralrutinePage]
})
export class GeneralrutinePageModule {}
