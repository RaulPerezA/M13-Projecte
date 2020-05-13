import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnealimentPage } from './onealiment.page';

const routes: Routes = [
  {
    path: '',
    component: OnealimentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnealimentPageRoutingModule {}
