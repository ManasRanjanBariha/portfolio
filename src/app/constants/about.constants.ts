export interface Experience {
  title: string;
  company: string;
  duration: string;
  achievements: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Frontend Developer - APP, AHSS (REACH Team)',
    company: 'Accenture',
    duration: 'Apr 2024 - Present | 1+ Year',
    achievements: [
      'Worked within Accenture Health Suite (AHSS) under the REACH (Remote Access Channel) team serving healthcare clients',
      'Developed and maintained multi-purpose, configurable form-based application customized for client-specific requirements',
      'Took ownership of frontend development, building new application flows and features for various client use cases',
      'Designed reusable Angular components supporting dynamic form configurations with real-time validation',
      'Implemented responsive UI using Angular, Angular Material, HTML5, CSS3, and TypeScript',
      'Collaborated with backend teams to integrate APIs and ensure seamless data flow across applications',
      'Participated in code reviews and bug fixes, ensuring code quality and application stability'
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'Angular 20', icon: 'language' },
      { name: 'TypeScript', icon: 'code' },
      { name: 'HTML5', icon: 'description' },
      { name: 'CSS3/SCSS', icon: 'palette' },
      { name: 'React', icon: 'language' },
      { name: 'Material Design', icon: 'design_services' },
      { name: 'RxJS', icon: 'tune' }
    ]
  },
  {
    category: 'Backend Basics',
    items: [
      { name: 'Node.js', icon: 'storage' },
      { name: 'Express.js', icon: 'api' },
      { name: 'Spring Boot', icon: 'leaf' },
      { name: 'RESTful APIs', icon: 'cloud_sync' },
      { name: 'API Integration', icon: 'link' },
      { name: 'Data Flow', icon: 'trending_up' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: 'database' },
      { name: 'MySQL', icon: 'table_chart' },
      { name: 'Firebase', icon: 'cloud' },
      { name: 'SQL Basics', icon: 'storage' }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git/GitHub', icon: 'source_control' },
      { name: 'GitLab', icon: 'source_control' },
      { name: 'Gerrit', icon: 'code_review' },
      { name: 'Jira', icon: 'assignment' },
      { name: 'Jenkins', icon: 'build' },
      { name: 'npm/yarn', icon: 'package_2' },
      { name: 'Web Accessibility (WCAG)', icon: 'accessibility' },
      { name: 'Postman', icon: 'send' }
    ]
  },
  {
    category: 'Other',
    items: [
      { name: 'Agile/Scrum', icon: 'assignment_turned_in' },
      { name: 'Unit Testing', icon: 'verified' },
      { name: 'Code Review', icon: 'rate_review' },
      { name: 'Problem Solving', icon: 'lightbulb' },
      { name: 'Team Collaboration', icon: 'groups' }
    ]
  }
];

export const PROFESSIONAL_SUMMARY = 
  'Frontend Developer with 1+ years of professional experience at Accenture, specializing in Angular and healthcare application development. Proven expertise in building scalable, configurable form-based applications, designing reusable components, and collaborating with cross-functional teams. Strong problem-solving skills with a focus on responsive UI/UX, clean code architecture, and delivering user-centric healthcare solutions.';
