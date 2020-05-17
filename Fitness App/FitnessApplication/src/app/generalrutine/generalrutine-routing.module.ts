import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralrutinePage } from './generalrutine.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralrutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralrutinePageRoutingModule {}
