import type { Profile, Project, Experience, Education, TechnologyGroup } from './types';

export const fallbackProfile: Profile = {
  name: 'Yimy David Huamancusi Campos',
  professional_title: 'Desarrollador Full Stack',
  bio: 'Probablemente estoy depurando algo en este momento.',
  email: 'contacto@ejemplo.com',
  phone: null,
  location: 'Perú',
  avatar_url: '',
  cv_url: '',
  social_links: [
    { platform: 'GitHub', url: 'https://github.com/urufudev' },
    { platform: 'LinkedIn', url: '#' },
  ],
};

export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Gestión Documental',
    slug: 'sistema-gestion-documental',
    short_description: 'Plataforma para la administración digital de documentos institucionales.',
    long_description: 'Sistema desarrollado para optimizar los procesos de gestión documental, permitiendo el seguimiento, almacenamiento y consulta de documentos en tiempo real.',
    featured_image_url: '',
    featured_image_thumb_url: '',
    gallery: [],
    demo_url: null,
    repo_url: null,
    status: 'published',
    realized_at: '2024-06-01',
    sort_order: 0,
    technologies: [
      { id: 1, name: 'Laravel', slug: 'laravel', category: 'backend', category_label: 'Backend', level: 90, icon: null, color: null },
      { id: 2, name: 'Vue.js', slug: 'vuejs', category: 'frontend', category_label: 'Frontend', level: 85, icon: null, color: null },
      { id: 3, name: 'PostgreSQL', slug: 'postgresql', category: 'backend', category_label: 'Backend', level: 80, icon: null, color: null },
    ],
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    title: 'Portal Web Institucional',
    slug: 'portal-web-institucional',
    short_description: 'Sitio web responsive con panel de administración personalizado.',
    long_description: 'Diseño e implementación de portal web institucional con enfoque en accesibilidad, rendimiento y experiencia de usuario.',
    featured_image_url: '',
    featured_image_thumb_url: '',
    gallery: [],
    demo_url: null,
    repo_url: null,
    status: 'published',
    realized_at: '2023-11-15',
    sort_order: 1,
    technologies: [
      { id: 4, name: 'Astro', slug: 'astro', category: 'frontend', category_label: 'Frontend', level: 85, icon: null, color: null },
      { id: 5, name: 'Tailwind CSS', slug: 'tailwindcss', category: 'frontend', category_label: 'Frontend', level: 90, icon: null, color: null },
    ],
    created_at: '2023-06-01T00:00:00Z',
  },
];

export const fallbackExperiences: Experience[] = [
  {
    id: 1,
    company: 'Dirección Regional de Educación',
    position: 'Desarrollador Full Stack',
    description: 'Desarrollo y mantenimiento de sistemas internos. Implementación de APIs REST y dashboards administrativos.',
    started_at: '2022-03-01',
    ended_at: null,
    is_current: true,
    work_type: 'hybrid',
    work_type_label: 'Híbrido',
    sort_order: 0,
  },
  {
    id: 2,
    company: 'Agencia Digital',
    position: 'Desarrollador Web',
    description: 'Desarrollo de sitios web y aplicaciones para clientes diversos.',
    started_at: '2020-06-01',
    ended_at: '2022-02-28',
    is_current: false,
    work_type: 'remote',
    work_type_label: 'Remoto',
    sort_order: 1,
  },
];

export const fallbackEducation: Education[] = [
  {
    id: 1,
    institution: 'Universidad Nacional',
    degree: 'Ingeniería de Sistemas',
    description: 'Especialización en desarrollo de software y gestión de bases de datos.',
    started_at: '2016-03-01',
    ended_at: '2021-12-15',
    certificate_url: null,
    sort_order: 0,
  },
];

export const fallbackTechnologies: TechnologyGroup[] = [
  {
    category: 'frontend',
    label: 'Frontend',
    technologies: [
      { id: 4, name: 'Astro', slug: 'astro', category: 'frontend', category_label: 'Frontend', level: 85, icon: null, color: null },
      { id: 2, name: 'Vue.js', slug: 'vuejs', category: 'frontend', category_label: 'Frontend', level: 85, icon: null, color: null },
      { id: 5, name: 'Tailwind CSS', slug: 'tailwindcss', category: 'frontend', category_label: 'Frontend', level: 90, icon: null, color: null },
    ],
  },
  {
    category: 'backend',
    label: 'Backend',
    technologies: [
      { id: 1, name: 'Laravel', slug: 'laravel', category: 'backend', category_label: 'Backend', level: 90, icon: null, color: null },
      { id: 3, name: 'PostgreSQL', slug: 'postgresql', category: 'backend', category_label: 'Backend', level: 80, icon: null, color: null },
    ],
  },
];
