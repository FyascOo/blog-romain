import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'blog-romain-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <ng-content />
    </div>
  `,
  styles: [
    `
      .card {
        padding: 100px 170px 300px 100px;
        background-image: url('assets/svg/card_parchment.svg');
        background-repeat: no-repeat;
        margin-left: 150px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
