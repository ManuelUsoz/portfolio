import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ButtonModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
