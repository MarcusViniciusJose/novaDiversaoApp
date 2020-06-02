import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PontoCegoPageRoutingModule } from './ponto-cego-routing.module';

import { PontoCegoPage } from './ponto-cego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PontoCegoPageRoutingModule
  ],
  declarations: [PontoCegoPage]
})
export class PontoCegoPageModule {}
