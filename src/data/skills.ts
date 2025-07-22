import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 75, category: 'frontend', icon: '📘' },
  { name: 'Next.js', level: 70, category: 'frontend', icon: '▲' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: '🎨' },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'backend', icon: '🟢' },
  { name: 'Express.js', level: 88, category: 'backend', icon: '🚂' },
  { name: 'MongoDB', level: 85, category: 'backend', icon: '🍃' },
  { name: 'PostgreSQL', level: 80, category: 'backend', icon: '🐘' },
  
  // ML & AI
  { name: 'Python', level: 92, category: 'ml', icon: '🐍' },
  { name: 'TensorFlow', level: 85, category: 'ml', icon: '🧠' },
  { name: 'NLP', level: 80, category: 'ml', icon: '🔥' },
  { name: 'Scikit-learn', level: 88, category: 'ml', icon: '📊' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools', icon: '📚' },
  { name: 'Docker', level: 75, category: 'tools', icon: '🐳' },
  { name: 'AWS', level: 70, category: 'tools', icon: '☁️' },
  { name: 'Jupyter', level: 85, category: 'tools', icon: '📓' }
];