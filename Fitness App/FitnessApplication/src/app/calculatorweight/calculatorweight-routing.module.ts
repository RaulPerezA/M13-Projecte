import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorweightPage } from './calculatorweight.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorweightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorweightPageRoutingModule {}
