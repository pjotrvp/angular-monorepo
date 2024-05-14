import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectComponent } from '../project-component/project.component';
import { Project } from '../../../core/models/project';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [
    CommonModule,
    ProjectComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by name" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="projects">
        <ul>
          <li>
            <app-project-single></app-project-single>
          </li>
        </ul>
      </section>
    </section>
  `,
  styleUrls: ['./project-list.component.css'],
})
export class ProjectsOverviewComponent {
  project1: Project = {
    name: 'Seeking safety',
    description: `during this project in the first year of the bachelor we worked 
        together as a team to create an android app that helps distressed people feel safe.`,
    githubUrl: 'https://github.com/Tippe/Seeking-Safety-Avans',
    year: 2021,
  };
}