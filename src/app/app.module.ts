import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { DockModule } from 'primeng/dock';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    DockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
