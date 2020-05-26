import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddDailyPageRoutingModule } from './add-daily-routing.module';

import { AddDailyPage } from './add-daily.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDailyPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddDailyPage]
})
export class AddDailyPageModule {}
