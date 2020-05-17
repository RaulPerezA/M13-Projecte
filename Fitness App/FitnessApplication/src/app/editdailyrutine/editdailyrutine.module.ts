import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditdailyrutinePageRoutingModule } from './editdailyrutine-routing.module';

import { EditdailyrutinePage } from './editdailyrutine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditdailyrutinePageRoutingModule
  ],
  declarations: [EditdailyrutinePage]
})
export class EditdailyrutinePageModule {}
