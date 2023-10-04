import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  el = inject(ElementRef)
  router = inject(Router)

  menubarItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menubarItems = [
      {
          label: 'Sobre mí',
          routerLink: 'about-me'
      },
      {
          label: 'Experiencia',
          routerLink: 'experience'
      },
      {
          label: 'Proyectos',
          routerLink: 'proyects'
      },
      {
          label: 'Contactarme',
          routerLink: 'contact'
      }
    ];

  }



}
