import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F1917PageRoutingModule } from './f1917-routing.module';

import { F1917Page } from './f1917.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F1917PageRoutingModule
  ],
  declarations: [F1917Page]
})
export class F1917PageModule {}
