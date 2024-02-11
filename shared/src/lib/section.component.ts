import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'blog-romain-section',
  standalone: true,
  template: `
    <div [class]="'section ' + reverse"></div>
  `,
  styles: [
    `
      .section {
        display: block;
        height: 150px;
        width: 100%;
        background-image: url('assets/svg/section.svg');
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  @Input() reverse = '-scale-y-100';
}
