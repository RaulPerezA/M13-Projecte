import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitroutinePageRoutingModule } from './initroutine-routing.module';

import { InitroutinePage } from './initroutine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitroutinePageRoutingModule
  ],
  declarations: [InitroutinePage]
})
export class InitroutinePageModule {}
