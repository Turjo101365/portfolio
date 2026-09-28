import React, { useEffect } from 'react';
import { X, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl border-l border-rule flex flex-col">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-rule bg-white/95 px-8 py-5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="label text-crimson font-mono bg-crimson-wash px-2.5 py-1 border border-crimson">
              Case Study
            </span>
            <span className="label text-ink-3">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="border border-rule-strong p-2 text-ink-2 hover:border-crimson hover:text-crimson transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 sm:p-10 flex-1 space-y-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              {project.title}
            </h2>
            <p className="mt-2 text-lg font-medium text-ink-3 font-display">
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-crimson text-white px-4 py-2 text-sm font-medium hover:bg-accent-hover transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Live Application</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-rule-strong bg-white px-4 py-2 text-sm font-medium text-ink hover:border-ink transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {project.caseStudy.metrics && (
            <div className="grid grid-cols-3 gap-3 border border-rule bg-paper p-4 text-center">
              {project.caseStudy.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-xl font-bold text-ink">{m.value}</p>
                  <p className="label text-[10px] text-ink-3 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <h3 className="label text-crimson font-bold text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crimson" />
              Problem & Context
            </h3>
            <p className="text-base text-ink-2 leading-relaxed font-sans">
              {project.caseStudy.problem}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="label text-indigo font-bold text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo" />
              Technical Implementation
            </h3>
            <p className="text-base text-ink-2 leading-relaxed font-sans">
              {project.caseStudy.technicalSolution}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="label text-teal font-bold text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal" />
              Key Architectural Highlights
            </h3>
            <ul className="space-y-2.5">
              {project.caseStudy.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-ink-2">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-rule space-y-3">
            <h3 className="label text-ink-3 text-xs">Technologies Deployed</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="label border border-rule bg-paper px-2.5 py-1 text-ink-2 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-rule bg-paper flex items-center justify-between text-xs font-mono text-ink-3">
          <span>Tanmoy Chowdhury Turjo Portfolio</span>
          <button onClick={onClose} className="hover:text-ink font-semibold">
            Press ESC to close
          </button>
        </div>
      </div>
    </div>
  );
};
