export interface SocialLink {
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  path: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: string;
  volume: string;
  pages: string;
  doi: string;
  abstract: string;
  keywords: string[];
  image: string;
  url: string;
}