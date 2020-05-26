import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyrutinePageRoutingModule } from './dailyrutine-routing.module';

import { DailyrutinePage } from './dailyrutine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyrutinePageRoutingModule
  ],
  declarations: [DailyrutinePage]
})
export class DailyrutinePageModule {}
