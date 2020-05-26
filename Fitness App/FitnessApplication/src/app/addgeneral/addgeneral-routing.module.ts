import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgeneralPage } from './addgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: AddgeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgeneralPageRoutingModule {}
