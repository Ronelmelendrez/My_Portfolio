export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  github?: string;
  liveUrl?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
}

export interface Skill {
  id: number;
  name: string;
  level: string;
  icon?: string;
}
