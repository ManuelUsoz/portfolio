import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/hero/hero.module').then(m => m.HeroModule), data: {animation: 'Home'} },
  { path: 'about-me', loadChildren: () => import('./modules/about-me/about-me.module').then(m => m.AboutMeModule),data: {animation: 'About me'}  },
  { path: 'experience', loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule) },
  { path: 'proyects', loadChildren: () => import('./modules/proyects/proyects.module').then(m => m.ProyectsModule) },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
