import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditgeneralPage } from './editgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: EditgeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditgeneralPageRoutingModule {}
