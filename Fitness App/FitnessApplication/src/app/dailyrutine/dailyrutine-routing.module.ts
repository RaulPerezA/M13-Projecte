import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyrutinePage } from './dailyrutine.page';

const routes: Routes = [
  {
    path: '',
    component: DailyrutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyrutinePageRoutingModule {}
