import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietsPageRoutingModule } from './diets-routing.module';

import { DietsPage } from './diets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietsPageRoutingModule
  ],
  declarations: [DietsPage]
})
export class DietsPageModule {}
