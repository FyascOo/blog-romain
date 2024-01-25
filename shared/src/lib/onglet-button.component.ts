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
      routerLinkActive="test"
      [routerLinkActiveOptions]="{ exact: true }"
      class="p-1 rounded-3xl bg-[#fff5e6] w-full">
      <div class="flex items-center justify-center w-[120px] h-12 rounded-3xl bg-[#ffd699] hover:bg-[#ffccff] w-full">
        <span class="material-symbols-outlined text-red-900">{{ data.icon }}</span>
        @if(data.text) {
        <span class="ml-2 text-red-900">
          {{ data.text }}
        </span>
        }
      </div>
    </button>
  `,
  host: {
    class: 'flex-1',
  },
  styles: [
    `
      .test {
        background-image: linear-gradient(#ffd699, #ffd699);
        background-size: 98% 30px;
        background-repeat: no-repeat;
        background-position: center bottom;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OngletButtonComponent {
  @Input() data: { icon: string; slug: string; text?: string } = { icon: 'home', slug: '/' };
}
