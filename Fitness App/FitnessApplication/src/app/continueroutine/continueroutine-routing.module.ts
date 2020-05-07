import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueroutinePage } from './continueroutine.page';

const routes: Routes = [
  {
    path: '',
    component: ContinueroutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinueroutinePageRoutingModule {}
