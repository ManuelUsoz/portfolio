import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {

  icons = [
    { src: '../../assets/logos/icons8-java-48.png', alt: 'java-logo' },
    { src: '../../assets/logos/icons8-spring-boot-48.png', alt: 'spring-boot-logo' },
    { src: '../../assets/logos/angular.png', alt: 'angular-logo' },
    { src: '../../assets/logos/icons8-html-48.png', alt: 'html-logo' },
    { src: '../../assets/logos/icons8-css-logo-48.png', alt: 'css-logo' },
    { src: '../../assets/logos/icons8-typescript-48.png', alt: 'typescript-logo' },
    { src: '../../assets/logos/icons8-git-48.png', alt: 'git-logo' },
    { src: '../../assets/logos/icons8-postgresql-48.png', alt: 'postgre-logo'}
  ];

  navigateToLinkedin(){
    const linkedinUrlProfile = "https://www.linkedin.com/in/manuelusozneri/";
    window.open(linkedinUrlProfile);
  }

  navigateToGitHub(){
    const githubProfile = "https://github.com/ManuelUsoz";
    window.open(githubProfile);
  }

}
