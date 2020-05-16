import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitroutinePage } from './initroutine.page';

const routes: Routes = [
  {
    path: '',
    component: InitroutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitroutinePageRoutingModule {}
