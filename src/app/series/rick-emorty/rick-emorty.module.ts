import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickEmortyPageRoutingModule } from './rick-emorty-routing.module';

import { RickEmortyPage } from './rick-emorty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickEmortyPageRoutingModule
  ],
  declarations: [RickEmortyPage]
})
export class RickEmortyPageModule {}
