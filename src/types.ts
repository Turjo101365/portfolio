export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  year: string;
  accent: 'crimson' | 'indigo' | 'teal' | 'amber' | 'purple' | 'cyan';
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  isLive: boolean;
  achievement?: string;
  badgeLabel?: string;
  caseStudy: {
    overview: string;
    problem: string;
    technicalSolution: string;
    architectureDiagram?: string;
    keyHighlights: string[];
    metrics?: { label: string; value: string }[];
  };
}

export interface Deployment {
  id: string;
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  platform: string;
  status: 'Operational' | 'Active';
  latency?: string;
  accent: 'crimson' | 'indigo' | 'teal' | 'amber' | 'purple' | 'cyan';
}

export interface Award {
  id: string;
  title: string;
  event: string;
  date: string;
  position: string;
  project?: string;
  type: 'hackathon' | 'competition' | 'academic' | 'jam';
  accent: 'crimson' | 'indigo' | 'teal' | 'amber';
}

export interface SkillGroup {
  category: string;
  description: string;
  items: {
    name: string;
    badgeUrl: string;
    level?: string;
  }[];
}

export interface ResearchItem {
  id: string;
  type: string;
  status: string;
  title: string;
  subtitle: string;
  authors?: string;
  affiliation?: string;
  venue: string;
  year: string;
  abstract: string;
  codeUrl?: string;
  findings?: string[];
  method?: string[];
  approach?: string[];
  safeguards?: string[];
  metricsTable?: {
    language: string;
    script: string;
    fp16: string;
    int8: string;
    nf4: string;
    delta: string;
  }[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  tagline: string;
  context: string;
  hypotheses: string[];
  modelsEvaluated: string[];
  languages: { code: string; name: string; script: string; notes?: string }[];
  precisions: string[];
  findings: string[];
  metricsTable: {
    language: string;
    script: string;
    fp16: string;
    int8: string;
    nf4: string;
    delta: string;
  }[];
}
