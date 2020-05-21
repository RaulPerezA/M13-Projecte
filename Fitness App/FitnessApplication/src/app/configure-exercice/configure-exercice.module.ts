import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfigureExercicePageRoutingModule } from './configure-exercice-routing.module';

import { ConfigureExercicePage } from './configure-exercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigureExercicePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConfigureExercicePage]
})
export class ConfigureExercicePageModule {}
