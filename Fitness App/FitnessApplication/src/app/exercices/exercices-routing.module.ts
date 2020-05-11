import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicesPage } from './exercices.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicesPageRoutingModule {}
