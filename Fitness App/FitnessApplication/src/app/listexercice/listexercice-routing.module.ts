import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListexercicePage } from './listexercice.page';

const routes: Routes = [
  {
    path: '',
    component: ListexercicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListexercicePageRoutingModule {}
