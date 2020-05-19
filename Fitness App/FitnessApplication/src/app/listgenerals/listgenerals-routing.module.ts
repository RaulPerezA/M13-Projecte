import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListgeneralsPage } from './listgenerals.page';

const routes: Routes = [
  {
    path: '',
    component: ListgeneralsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListgeneralsPageRoutingModule {}
