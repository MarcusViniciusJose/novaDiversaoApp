import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F1917Page } from './f1917.page';

const routes: Routes = [
  {
    path: '',
    component: F1917Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F1917PageRoutingModule {}
