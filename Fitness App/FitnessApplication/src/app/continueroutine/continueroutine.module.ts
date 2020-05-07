import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinueroutinePageRoutingModule } from './continueroutine-routing.module';

import { ContinueroutinePage } from './continueroutine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinueroutinePageRoutingModule
  ],
  declarations: [ContinueroutinePage]
})
export class ContinueroutinePageModule {}
