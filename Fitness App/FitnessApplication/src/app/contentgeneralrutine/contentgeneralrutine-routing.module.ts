import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentgeneralrutinePage } from './contentgeneralrutine.page';

const routes: Routes = [
  {
    path: '',
    component: ContentgeneralrutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentgeneralrutinePageRoutingModule {}
