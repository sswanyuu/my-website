import { SkillCategory, Project, ContactInfo, SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/sswanyuu',
    icon: 'bi-github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wan-yu-shih-06a39520b/',
    icon: 'bi-linkedin',
  },
  {
    platform: 'Medium',
    url: 'https://medium.com/@sswanyuu',
    icon: 'bi-medium',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/front_end_divers',
    icon: 'bi-instagram',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Tools',
    icon: 'bi-gear',
    skills: [
      'Webpack',
      'Vite',
      'Git',
      'Cursor',
      'Figma',
      'Jira',
      'Claude Code',
      'Cursor AI',
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'bi-code-slash',
    skills: [
      'React.js',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind CSS',
      'Jest',
      'Playwright',
    ],
  },
  {
    title: 'Backend & Integration',
    icon: 'bi-cloud',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'MongoDB',
      'Firebase',
      'Stripe API',
      'Socket.io',
      'AWS services',
      'Docker',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'playlistCoverGenerator',
    technologies: [
      'TypeScript',
      'AI Integration',
      'Spotify API',
      'Leonardo AI API',
    ],
    githubUrl: 'https://github.com/sswanyuu/playlist-cover-generator',
    image: `${process.env.PUBLIC_URL}/projects/playlist-cover-generator.png`,
  },
  {
    id: 'queenSelectShop',
    technologies: ['TypeScript', 'React', 'Redux', 'Stripe'],
    githubUrl: 'https://github.com/sswanyuu/queen-select-shop',
    image: `${process.env.PUBLIC_URL}/projects/queen-select-shop.png`,
  },
  {
    id: 'sweetTraveling',
    technologies: ['SCSS', 'Animations', 'Responsive Design'],
    githubUrl: 'https://github.com/sswanyuu/sweet-traveling',
    image: `${process.env.PUBLIC_URL}/projects/sweet-traveling.png`,
  },
  {
    id: 'monsterChatroom',
    technologies: ['React', 'Socket.io', 'AI', 'Real-time'],
    githubUrl: 'https://github.com/sswanyuu/monster-chatroom',
    image: `${process.env.PUBLIC_URL}/projects/monster-chatroom.png`,
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Location',
    content: 'Sydney, Australia',
    type: 'text',
  },
  {
    icon: 'bi-envelope-fill',
    title: 'Email',
    content: 'yosoywanyushih@gmail.com',
    type: 'email',
    href: 'mailto:yosoywanyushih@gmail.com',
  },
];
