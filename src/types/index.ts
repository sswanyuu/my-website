export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  type: 'email' | 'text' | 'link';
  href?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  technologies: string[];
  website?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'outline' | 'secondary' | 'icon-only';
  size?: 'large' | 'default' | 'small';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: () => void;
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export interface SocialIconProps {
  platform: string;
  url: string;
  icon: string;
  variant?: 'default' | 'large' | 'small';
  className?: string;
}

export interface SkillCardProps {
  category: SkillCategory;
}

export interface ProjectCardProps {
  project: Project;
}

export interface ContactInfoItemProps {
  info: ContactInfo;
}

export interface ExperienceCardProps {
  experience: Experience;
}
