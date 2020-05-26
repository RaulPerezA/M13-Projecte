import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDailyPage } from './add-daily.page';

const routes: Routes = [
  {
    path: '',
    component: AddDailyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDailyPageRoutingModule {}
