import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicePage } from './exercice.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicePageRoutingModule {}
