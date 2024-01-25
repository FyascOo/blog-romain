import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blog-romain-main',
  standalone: true,
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    class: 'flex justify-center items-center flex-1 bg-[#ffd699]',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
