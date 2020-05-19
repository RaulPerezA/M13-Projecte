import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateexercicePage } from './createexercice.page';

const routes: Routes = [
  {
    path: '',
    component: CreateexercicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateexercicePageRoutingModule {}
