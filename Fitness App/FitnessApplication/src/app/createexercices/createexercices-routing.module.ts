import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateexercicesPage } from './createexercices.page';

const routes: Routes = [
  {
    path: '',
    component: CreateexercicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateexercicesPageRoutingModule {}
