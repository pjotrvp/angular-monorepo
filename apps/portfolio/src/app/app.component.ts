import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsOverviewComponent } from './features/feature-projects/project-list-component/project-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, ProjectsOverviewComponent],
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-projects></app-projects>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Projects';
}
