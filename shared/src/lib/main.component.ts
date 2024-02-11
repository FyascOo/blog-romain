import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blog-romain-main',
  standalone: true,
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    class: 'flex flex-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
