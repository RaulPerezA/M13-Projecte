import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnerecetaPageRoutingModule } from './onereceta-routing.module';

import { OnerecetaPage } from './onereceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnerecetaPageRoutingModule
  ],
  declarations: [OnerecetaPage]
})
export class OnerecetaPageModule {}
