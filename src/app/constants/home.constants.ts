export const HOME_TITLE = "Hey, I'm Manas Ranjan Bariha";
export const HOME_SUBTITLE = "Full Stack Developer passionate about creating amazing web experiences";
export const HOME_CTA_BUTTON = "View My Projects";
export const DOWNLOAD_RESUME_BUTTON = "Download Resume";
export const RESUME_URL = "ManasRanjanBariha-resume.pdf";

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
  logoUrl?: string;
}

export const HOME_SOCIAL_LINKS: SocialLink[] = [
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
