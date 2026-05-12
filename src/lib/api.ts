import type {
  Profile,
  Project,
  Experience,
  Education,
  TechnologyGroup,
  ContactFormData,
  ContactResponse,
  ValidationErrorResponse,
} from './types';
import {
  fallbackProfile,
  fallbackProjects,
  fallbackExperiences,
  fallbackEducation,
  fallbackTechnologies,
} from './fallback-data';

const BASE = import.meta.env.PUBLIC_API_URL ?? 'https://cv.dreayacucho.gob.pe/api';

async function apiFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getProfile(): Promise<Profile> {
  const data = await apiFetch<Profile>('/profile');
  return data ?? fallbackProfile;
}

export async function getProjects(): Promise<Project[]> {
  const data = await apiFetch<{ data: Project[] }>('/projects');
  return data?.data ?? fallbackProjects;
}

export async function getProject(slug: string): Promise<Project | null> {
  const data = await apiFetch<Project>(`/projects/${slug}`);
  return data ?? fallbackProjects.find((p) => p.slug === slug) ?? null;
}

export async function getExperiences(): Promise<Experience[]> {
  const data = await apiFetch<{ data: Experience[] }>('/experiences');
  return data?.data ?? fallbackExperiences;
}

export async function getEducation(): Promise<Education[]> {
  const data = await apiFetch<{ data: Education[] }>('/education');
  return data?.data ?? fallbackEducation;
}

export async function getTechnologies(): Promise<TechnologyGroup[]> {
  const data = await apiFetch<TechnologyGroup[]>('/technologies');
  return data ?? fallbackTechnologies;
}

export async function sendContact(
  formData: ContactFormData,
): Promise<ContactResponse> {
  const res = await fetch(`${BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (res.status === 422) {
    const errorData = (await res.json()) as ValidationErrorResponse;
    throw new ValidationError(errorData);
  }

  if (res.status === 429) {
    throw new RateLimitError();
  }

  if (!res.ok) {
    throw new Error('Error al enviar el mensaje');
  }

  return res.json();
}

export class ValidationError extends Error {
  errors: Record<string, string[]>;
  constructor(data: ValidationErrorResponse) {
    super(data.message);
    this.errors = data.errors;
  }
}

export class RateLimitError extends Error {
  constructor() {
    super('Demasiados intentos. Intenta en un momento.');
  }
}
