import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifydailyrutinePageRoutingModule } from './modifydailyrutine-routing.module';

import { ModifydailyrutinePage } from './modifydailyrutine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifydailyrutinePageRoutingModule
  ],
  declarations: [ModifydailyrutinePage]
})
export class ModifydailyrutinePageModule {}
