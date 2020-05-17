import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentgeneralrutinePageRoutingModule } from './contentgeneralrutine-routing.module';

import { ContentgeneralrutinePage } from './contentgeneralrutine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentgeneralrutinePageRoutingModule
  ],
  declarations: [ContentgeneralrutinePage]
})
export class ContentgeneralrutinePageModule {}
