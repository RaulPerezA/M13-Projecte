import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CalculatorweightPageRoutingModule } from './calculatorweight-routing.module';

import { CalculatorweightPage } from './calculatorweight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorweightPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CalculatorweightPage]
})
export class CalculatorweightPageModule {}
