import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicePageRoutingModule } from './exercice-routing.module';

import { ExercicePage } from './exercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicePageRoutingModule
  ],
  declarations: [ExercicePage]
})
export class ExercicePageModule {}
