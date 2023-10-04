import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  cards = [
    { src: '../../assets/logos/vantek-logo.jpeg', alt: 'vantek', width: '100', since: 'Feb - 2023', to: 'Actualidad', jobPosition: 'Fullstack developer', company: 'Vantek'},
    { src: '../../assets/logos/makro-logo.jpeg', alt: 'makro', width: '100', since: 'Mayo - 2022', to: 'Feb - 2023', jobPosition: 'Pasante de Help Desk', company: 'Makro'},
    { src: '../../assets/logos/ingertec-logo.jpeg', alt: 'vantek', width: '100', since: 'Feb - 2022', to: 'Mayo - 2022', jobPosition: 'Front-end developer', company: 'IngerTec'},

  ]

}
