import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SOCIAL_LINKS, FOOTER_TEXT } from '../constants/footer.constants';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  
  socialLinks = SOCIAL_LINKS;
  footerText = FOOTER_TEXT;

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }
}
