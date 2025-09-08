export interface Project {
  title: string;
  technologies: string[];
  description: string[];
  imageUrl?: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  year: string;
  degree: string;
  institute: string;
  gpa: string;
}

export interface CertificationItem {
  date: string;
  title: string;
  issuer: string;
}