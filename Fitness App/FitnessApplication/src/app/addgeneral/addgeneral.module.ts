import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgeneralPageRoutingModule } from './addgeneral-routing.module';

import { AddgeneralPage } from './addgeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgeneralPageRoutingModule
  ],
  declarations: [AddgeneralPage]
})
export class AddgeneralPageModule {}
