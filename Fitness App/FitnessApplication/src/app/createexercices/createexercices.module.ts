import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateexercicesPageRoutingModule } from './createexercices-routing.module';

import { CreateexercicesPage } from './createexercices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateexercicesPageRoutingModule
  ],
  declarations: [CreateexercicesPage]
})
export class CreateexercicesPageModule {}
