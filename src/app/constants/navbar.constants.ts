export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export const BRAND_NAME = 'Manas Bariha';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'About',
    href: '#about',
    icon: 'person'
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: 'work'
  },
  {
    label: 'Skills',
    href: '#skills',
    icon: 'emoji_objects'
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: 'email'
  }
];

export const SIDENAV_HEADER = 'Navigation';
export const MENU_ICON = 'menu';
export const CLOSE_ICON = 'close';
