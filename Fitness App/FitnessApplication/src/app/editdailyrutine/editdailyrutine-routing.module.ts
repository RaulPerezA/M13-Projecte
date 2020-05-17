import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditdailyrutinePage } from './editdailyrutine.page';

const routes: Routes = [
  {
    path: '',
    component: EditdailyrutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditdailyrutinePageRoutingModule {}
