import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OngletButtonComponent } from './onglet-button.component';

@Component({
  selector: 'blog-romain-header',
  standalone: true,
  imports: [OngletButtonComponent],
  template: `
    <blog-romain-onglet-button [data]="{ icon: 'home', slug: '/faune' }" />
    <blog-romain-onglet-button class="w-full" [data]="{ icon: 'pets', slug: '/', text: 'Faune' }" />
    <blog-romain-onglet-button [data]="{ icon: 'grass', slug: '/flore', text: 'Flore' }" />
    <blog-romain-onglet-button [data]="{ icon: 'home_pin', slug: '/villes', text: 'Carte de ville' }" />
    <blog-romain-onglet-button [data]="{ icon: 'explore', slug: '/pays', text: 'Carte des pays' }" />
    <blog-romain-onglet-button [data]="{ icon: 'group', slug: '/personnage-secondaire', text: 'Personnage secondaire' }" />
  `,
  host: {
    class: 'flex bg-[#ffd699]',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
