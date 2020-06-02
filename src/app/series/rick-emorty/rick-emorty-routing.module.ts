import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickEmortyPage } from './rick-emorty.page';

const routes: Routes = [
  {
    path: '',
    component: RickEmortyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickEmortyPageRoutingModule {}
