import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';
import { ImageModule } from 'primeng/image';



@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    ImageModule
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroModule { }
