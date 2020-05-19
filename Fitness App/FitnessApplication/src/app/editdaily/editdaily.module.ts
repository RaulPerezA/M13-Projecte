import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditdailyPageRoutingModule } from './editdaily-routing.module';

import { EditdailyPage } from './editdaily.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditdailyPageRoutingModule
  ],
  declarations: [EditdailyPage]
})
export class EditdailyPageModule {}
