import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PontoCegoPage } from './ponto-cego.page';

const routes: Routes = [
  {
    path: '',
    component: PontoCegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontoCegoPageRoutingModule {}
