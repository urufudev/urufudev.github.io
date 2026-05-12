export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  professional_title: string;
  bio: string | null;
  email: string;
  phone: string | null;
  location: string | null;
  avatar_url: string;
  cv_url: string;
  social_links: SocialLink[];
}

export interface Technology {
  id: number;
  name: string;
  slug: string;
  category: 'frontend' | 'backend' | 'devops' | 'soft_skills';
  category_label: string;
  level: number;
  icon: string | null;
  color: string | null;
}

export interface TechnologyGroup {
  category: string;
  label: string;
  technologies: Technology[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  short_description: string | null;
  long_description: string | null;
  featured_image_url: string;
  featured_image_thumb_url: string;
  gallery: {
    url: string;
    thumb_url: string;
    name: string;
  }[];
  demo_url: string | null;
  repo_url: string | null;
  status: 'published';
  realized_at: string | null;
  sort_order: number;
  technologies: Technology[];
  created_at: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  description: string | null;
  started_at: string | null;
  ended_at: string | null;
  is_current: boolean;
  work_type: 'remote' | 'on_site' | 'hybrid' | null;
  work_type_label: string | null;
  sort_order: number;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  description: string | null;
  started_at: string | null;
  ended_at: string | null;
  certificate_url: string | null;
  sort_order: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  message: string;
}

export interface ValidationErrorResponse {
  message: string;
  errors: Record<string, string[]>;
}
