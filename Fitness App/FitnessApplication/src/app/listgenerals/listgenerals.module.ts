import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListgeneralsPageRoutingModule } from './listgenerals-routing.module';

import { ListgeneralsPage } from './listgenerals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListgeneralsPageRoutingModule
  ],
  declarations: [ListgeneralsPage]
})
export class ListgeneralsPageModule {}
