export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS_TITLE = 'Projects';
export const PROJECTS_SUBTITLE = 'Here you will find some of the personal and client projects that I created with each project containing its own case study';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce web application built with modern technologies. Features include user authentication, shopping cart, payment integration, and admin dashboard for inventory management.',
    image: 'project1.png',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe API'],
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/manasranjanbariha/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'An innovative project management solution with real-time collaboration features. Includes task tracking, team communication, file sharing, and comprehensive reporting dashboard.',
    image: 'project2.png',
    technologies: ['React', 'JavaScript', 'Express.js', 'MySQL', 'Socket.io'],
    liveUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/manasranjanbariha/task-manager'
  }
];

export const LIVE_DEMO_BUTTON = 'Live Demo';
export const VIEW_CODE_BUTTON = 'View Code';
