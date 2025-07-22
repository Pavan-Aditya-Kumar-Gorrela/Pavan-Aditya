export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'ml' | 'ai' | 'research';
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  mlModel?: string;
  paperUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'ml' | 'tools';
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}