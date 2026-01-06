import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { HOME_TITLE, HOME_SUBTITLE, HOME_CTA_BUTTON, HOME_SOCIAL_LINKS, DOWNLOAD_RESUME_BUTTON, RESUME_URL } from '../constants/home.constants';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
  title = HOME_TITLE;
  subtitle = HOME_SUBTITLE;
  ctaButton = HOME_CTA_BUTTON;
  downloadResumeButton = DOWNLOAD_RESUME_BUTTON;
  resumeUrl = RESUME_URL;
  socialLinks = HOME_SOCIAL_LINKS;
  
  scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'Manas_Ranjan_Bariha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
