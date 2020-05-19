import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigureExercicePage } from './configure-exercice.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigureExercicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigureExercicePageRoutingModule {}
