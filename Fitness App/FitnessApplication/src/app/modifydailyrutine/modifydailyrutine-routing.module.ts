import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifydailyrutinePage } from './modifydailyrutine.page';

const routes: Routes = [
  {
    path: '',
    component: ModifydailyrutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifydailyrutinePageRoutingModule {}
