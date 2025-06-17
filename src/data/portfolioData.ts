import { SkillCategory, Project, ContactInfo, SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/sswanyuu',
    icon: 'bi-github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wan-yu-shih-06a39520b/',
    icon: 'bi-linkedin'
  },
  {
    platform: 'Medium',
    url: 'https://medium.com/@sswanyuu',
    icon: 'bi-medium'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/front_end_divers',
    icon: 'bi-instagram'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: 'bi-code-slash',
    skills: ['React.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']
  },
  {
    title: 'State Management & Tools',
    icon: 'bi-gear',
    skills: ['Redux', 'React Hooks', 'Context API', 'Webpack', 'Vite', 'ESLint', 'Prettier', 'Git']
  },
  {
    title: 'Backend & Integration',
    icon: 'bi-cloud',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'MongoDB', 'Firebase', 'Stripe API', 'Socket.io']
  }
];

export const projects: Project[] = [
  {
    id: 'playlist-cover-generator',
    title: 'Playlist Cover Generator',
    emoji: '',
    description: 'A web application that generates unique cover art for Spotify playlists using AI. Create stunning, personalized playlist covers with just a few clicks!',
    technologies: ['TypeScript', 'AI Integration', 'Spotify API'],
    features: [
      { text: 'AI-powered cover generation' },
      { text: 'Spotify API integration' },
      { text: 'Modern UI/UX design' }
    ],
    githubUrl: 'https://github.com/sswanyuu/playlist-cover-generator'
  },
  {
    id: 'queen-select-shop',
    title: 'Queen Select Shop',
    emoji: '',
    description: 'A modern e-commerce platform built with React and TypeScript, featuring Redux for state management and Stripe integration for secure payments.',
    technologies: ['TypeScript', 'React', 'Redux', 'Stripe'],
    features: [
      { text: 'Redux state management' },
      { text: 'Stripe payment integration' },
      { text: 'Responsive design' },
      { text: 'Shopping cart functionality' }
    ],
    githubUrl: 'https://github.com/sswanyuu/queen-select-shop'
  },
  {
    id: 'sweet-traveling',
    title: 'Sweet Traveling',
    emoji: '',
    description: 'A beautiful travel website showcasing destinations with smooth animations and modern design using advanced SCSS techniques.',
    technologies: ['SCSS', 'Animations', 'Responsive Design'],
    features: [
      { text: 'Smooth CSS animations' },
      { text: 'Advanced SCSS features' },
      { text: 'Mobile-first design' },
      { text: 'Interactive components' }
    ],
    githubUrl: 'https://github.com/sswanyuu/sweet-traveling'
  },
  {
    id: 'monster-chatroom',
    title: 'Monster Chatroom',
    emoji: '',
    description: 'A real-time chat application built with React and Socket.io, featuring AI-powered chatbots and modern messaging interface.',
    technologies: ['React', 'Socket.io', 'AI', 'Real-time'],
    features: [
      { text: 'Real-time messaging' },
      { text: 'AI chatbot integration' },
      { text: 'Modern chat interface' },
      { text: 'Socket.io implementation' }
    ],
    githubUrl: 'https://github.com/sswanyuu/monster-chatroom'
  }
];

export const contactInfo: ContactInfo[] = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Location',
    content: 'Sydney, Australia',
    type: 'text'
  },
  {
    icon: 'bi-envelope-fill',
    title: 'Email',
    content: 'yosoywanyushih@gmail.com',
    type: 'email',
    href: 'mailto:yosoywanyushih@gmail.com'
  },
  {
    icon: 'bi-chat-dots-fill',
    title: "Let's Connect",
    content: 'Available for freelance work',
    type: 'text'
  }
];

export const personalInfo = {
  name: 'Olga Shih',
  title: 'Frontend Engineer',
  location: 'Sydney, Australia',
  profileImage: '/yu-profile.jpg',
  aboutText: `Hi there! I'm Olga, a passionate Frontend Engineer based in sunny Sydney. 
    I specialize in creating beautiful, responsive web applications using React and Vue.js. 
    With a keen eye for design and a love for clean code, I bring ideas to life through 
    modern web technologies. When I'm not coding, you'll find me exploring Sydney's 
    amazing coffee scene or diving into the latest frontend trends.`,
  resumeUrl: '#'
}; 