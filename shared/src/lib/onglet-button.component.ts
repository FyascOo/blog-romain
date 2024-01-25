import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'blog-romain-onglet-button',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
  template: `
    <button
      [routerLink]="data.slug"
      [routerLinkActive]="data.icon === 'home' ? '' : '-ml-8' + ' group p-1 rounded-3xl bg-[#fff5e6] w-full'"
      [class]="data.icon === 'home' ? '' : '-ml-8' + ' group p-1 rounded-3xl bg-[#fff5e6] hover:w-full transition-all'">
      <div class="flex items-center justify-center w-[120px] h-12 rounded-3xl bg-[#ffd699] group-hover:bg-[#ffccff] group-hover:w-full">
        <span class="material-symbols-outlined">{{ data.icon }}</span>
        @if(data.text) {
        <span class="hidden group-hover:inline-block">{{ data.text }}</span>
        }
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OngletButtonComponent {
  @Input({ required: true }) data: { icon: string; slug: string; text?: string } = { icon: 'home', slug: '/' };
}
