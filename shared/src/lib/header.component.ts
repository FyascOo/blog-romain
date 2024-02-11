import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OngletButtonComponent } from './onglet-button.component';

@Component({
  selector: 'blog-romain-header',
  standalone: true,
  imports: [OngletButtonComponent],
  template: `
    <blog-romain-onglet-button [data]="{ icon: 'home', slug: '/' }" />
    <blog-romain-onglet-button [data]="{ icon: 'pets', slug: '/faunes', text: 'Faunes' }" />
    <blog-romain-onglet-button [data]="{ icon: 'grass', slug: '/flores', text: 'Flores' }" />
    <blog-romain-onglet-button [data]="{ icon: 'home_pin', slug: '/villes', text: 'Carte des villes' }" />
    <blog-romain-onglet-button [data]="{ icon: 'explore', slug: '/pays', text: 'Carte des pays' }" />
    <blog-romain-onglet-button [data]="{ icon: 'group', slug: '/personnages-secondaires', text: 'Personnages secondaires' }" />
  `,
  host: {
    class: 'flex bg-[#ffd699]',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
