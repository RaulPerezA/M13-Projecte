import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreateexercicePageRoutingModule } from './createexercice-routing.module';

import { CreateexercicePage } from './createexercice.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateexercicePageRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  declarations: [CreateexercicePage]
})
export class CreateexercicePageModule {}
