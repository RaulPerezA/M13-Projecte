import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditdailyPage } from './editdaily.page';

const routes: Routes = [
  {
    path: '',
    component: EditdailyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditdailyPageRoutingModule {}
