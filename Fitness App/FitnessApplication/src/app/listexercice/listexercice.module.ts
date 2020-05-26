import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListexercicePageRoutingModule } from './listexercice-routing.module';

import { ListexercicePage } from './listexercice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListexercicePageRoutingModule
  ],
  declarations: [ListexercicePage]
})
export class ListexercicePageModule {}
