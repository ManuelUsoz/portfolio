import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectsRoutingModule } from './proyects-routing.module';
import { ProyectsComponent } from './proyects.component';


@NgModule({
  declarations: [
    ProyectsComponent
  ],
  imports: [
    CommonModule,
    ProyectsRoutingModule
  ],
  exports: [
    ProyectsComponent
  ]
})
export class ProyectsModule { }
