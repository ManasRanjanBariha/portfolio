import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { EXPERIENCES, SKILLS_DATA, PROFESSIONAL_SUMMARY, Experience, Skill } from '../constants/about.constants';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  
  experiences: Experience[] = EXPERIENCES;
  skillsData: Skill[] = SKILLS_DATA;
  professionalSummary = PROFESSIONAL_SUMMARY;

  selectedSkillCategory: Skill | null = null;
  showModal = false;
  
  openSkillsModal(skillCategory: Skill) {
    this.selectedSkillCategory = skillCategory;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedSkillCategory = null;
  }
  
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
