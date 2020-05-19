import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateexercicePageRoutingModule } from './createexercice-routing.module';

import { CreateexercicePage } from './createexercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateexercicePageRoutingModule
  ],
  declarations: [CreateexercicePage]
})
export class CreateexercicePageModule {}
