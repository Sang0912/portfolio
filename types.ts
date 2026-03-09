export interface Project {
  title: string;
  tech: string[];
  description: string[];
  date: string;
  link?: string;
}

export interface Experience {
  role: string;
  organization: string;
  date: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  gpa: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Hobby {
  name: string;
  date: string;
  description: string;
}
