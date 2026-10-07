import raw from './home.json';

export type ProcessIcon = 'alert' | 'search' | 'cpu' | 'check';
export type WorkDiagram = 'architecture' | 'migration' | 'legacy' | 'library';
export type ProjectStatus = 'current' | 'planned' | 'archived';

interface Cta {
  label: string;
  href: string;
}

export interface HomeContent {
  profile: { name: string; headerRole: string; headerTag: string; tagline: string };
  hero: {
    titleLines: string[];
    lede: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    coreStackLabel: string;
    coreStack: string[];
  };
  processSteps: { label: string; detail: string; icon: ProcessIcon }[];
  work: {
    eyebrow: string;
    title: string;
    items: { title: string; role: string; description: string; diagram: WorkDiagram }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    stages: { title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    items: { name: string; status: ProjectStatus; label: string; description: string }[];
  };
  toolbox: {
    eyebrow: string;
    title: string;
    groups: { name: string; items: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    tenure: string;
    journey: string;
    career: { period: string; company: string; role: string; description: string }[];
    otherTitle: string;
    other: { period?: string; title: string }[];
  };
  ai: {
    eyebrow: string;
    title: string;
    intro: string[];
    examples: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    availability: string;
    email: string;
    linkedin: Cta;
    github: string;
    resumeLabel: string;
    year: string;
  };
}

// JSON literals widen to `string`, so cast once here; the interface is the source of truth.
export const home = raw as HomeContent;
