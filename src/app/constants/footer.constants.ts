export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
  logoUrl?: string;
}

export interface FooterText {
  name: string;
  description: string;
  socialTitle: string;
  copyright: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    url: 'https://www.linkedin.com/in/manas-ranjan-bariha-a1901b387',
    color: '#0077b5',
    logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg'
  },
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/ManasRanjanBariha',
    color: '#333',
    logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg'
  },
  {
    name: 'LeetCode',
    icon: 'fab fa-code',
    url: 'https://leetcode.com/manasranjanbariha11/',
    color: '#FFA500',
    logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg'
  }
];

export const FOOTER_TEXT: FooterText = {
  name: 'Manas Ranjan Bariha',
  description: 'A Full Stack Developer passionate about creating innovative web solutions and building digital experiences that make a difference in people\'s lives.',
  socialTitle: 'Social',
  copyright: '© Copyright 2025 . Made by'
};

