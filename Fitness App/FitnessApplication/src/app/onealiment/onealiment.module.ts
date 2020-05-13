import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnealimentPageRoutingModule } from './onealiment-routing.module';

import { OnealimentPage } from './onealiment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnealimentPageRoutingModule
  ],
  declarations: [OnealimentPage]
})
export class OnealimentPageModule {}
