import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditgeneralPageRoutingModule } from './editgeneral-routing.module';

import { EditgeneralPage } from './editgeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditgeneralPageRoutingModule
  ],
  declarations: [EditgeneralPage]
})
export class EditgeneralPageModule {}
