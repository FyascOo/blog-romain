import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, MainComponent } from '@blog-romain/ui';

@Component({
  selector: 'blog-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent],
  template: `
    <blog-romain-header />
    <blog-romain-main>
      <router-outlet />
    </blog-romain-main>
  `,
  host: {
    class: 'flex flex-col h-full',
  },
})
export class AppComponent {}
