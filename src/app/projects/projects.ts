import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PROJECTS, PROJECTS_TITLE, PROJECTS_SUBTITLE, LIVE_DEMO_BUTTON, VIEW_CODE_BUTTON, Project } from '../constants/projects.constants';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  
  projects: Project[] = PROJECTS;
  projectsTitle = PROJECTS_TITLE;
  projectsSubtitle = PROJECTS_SUBTITLE;
  liveDemoBtn = LIVE_DEMO_BUTTON;
  viewCodeBtn = VIEW_CODE_BUTTON;

  openProject(url: string | undefined) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}