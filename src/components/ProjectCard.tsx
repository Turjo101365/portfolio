import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, isFeatured = false }) => {
  const accentColors = {
    crimson: {
      bar: 'bg-crimson',
      badgeText: 'text-crimson',
      badgeBg: 'bg-crimson-wash',
      badgeBorder: 'border-crimson',
      hoverText: 'group-hover:text-crimson',
      buttonBg: 'bg-crimson-wash hover:bg-crimson hover:text-white border-crimson text-crimson',
      linkText: 'text-crimson'
    },
    indigo: {
      bar: 'bg-indigo',
      badgeText: 'text-indigo',
      badgeBg: 'bg-indigo-wash',
      badgeBorder: 'border-indigo',
      hoverText: 'group-hover:text-indigo',
      buttonBg: 'bg-indigo-wash hover:bg-indigo hover:text-white border-indigo text-indigo',
      linkText: 'text-indigo'
    },
    teal: {
      bar: 'bg-teal',
      badgeText: 'text-teal',
      badgeBg: 'bg-teal-wash',
      badgeBorder: 'border-teal',
      hoverText: 'group-hover:text-teal',
      buttonBg: 'bg-teal-wash hover:bg-teal hover:text-white border-teal text-teal',
      linkText: 'text-teal'
    },
    amber: {
      bar: 'bg-amber',
      badgeText: 'text-amber',
      badgeBg: 'bg-amber-wash',
      badgeBorder: 'border-amber',
      hoverText: 'group-hover:text-amber',
      buttonBg: 'bg-amber-wash hover:bg-amber hover:text-white border-amber text-amber',
      linkText: 'text-amber'
    },
    purple: {
      bar: 'bg-purple',
      badgeText: 'text-purple',
      badgeBg: 'bg-purple-wash',
      badgeBorder: 'border-purple',
      hoverText: 'group-hover:text-purple',
      buttonBg: 'bg-purple-wash hover:bg-purple hover:text-white border-purple text-purple',
      linkText: 'text-purple'
    },
    cyan: {
      bar: 'bg-cyan',
      badgeText: 'text-cyan',
      badgeBg: 'bg-cyan-wash',
      badgeBorder: 'border-cyan',
      hoverText: 'group-hover:text-cyan',
      buttonBg: 'bg-cyan-wash hover:bg-cyan hover:text-white border-cyan text-cyan',
      linkText: 'text-cyan'
    }
  };

  const style = accentColors[project.accent] || accentColors.crimson;

  return (
    <article className="group relative isolate flex flex-col overflow-hidden border border-rule bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
      <span aria-hidden="true" className={`h-1.5 w-full ${style.bar}`} />

      <div className="dotfield pointer-events-none absolute -right-6 -top-2 z-0 h-44 w-44 opacity-25" />

      <div className={`relative z-10 flex flex-1 flex-col ${isFeatured ? 'p-8 sm:p-9' : 'p-7'}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {project.badgeLabel && (
            <span className={`label border px-2.5 py-1 ${style.badgeText} ${style.badgeBg} ${style.badgeBorder}`}>
              {project.badgeLabel}
            </span>
          )}
          <span className="label text-ink-3">{project.year}</span>
          
          {project.isLive && (
            <span className="label ml-auto inline-flex items-center gap-1.5 text-ink-3">
              <span className={`h-1.5 w-1.5 rounded-full ${style.bar} animate-pulse`} />
              Live
            </span>
          )}
        </div>

        <h3 className={`mt-5 font-display tracking-tight font-bold transition-colors ${style.hoverText} ${isFeatured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="text-left hover:underline focus:outline-none"
          >
            {project.title}
          </button>
        </h3>

        <p className="mt-1.5 text-[15px] font-medium text-ink-3">
          {project.tagline}
        </p>

        <p className="mt-4 flex-1 leading-relaxed text-ink-2 text-[15px] sm:text-[16px]">
          {project.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="label border border-rule bg-paper px-2 py-1 text-ink-3 font-mono text-[11px]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="relative z-20 mt-6 pt-2 border-t border-rule/50">
          <div className="flex flex-wrap items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 border font-medium transition-all px-3 py-1.5 text-xs ${style.buttonBg}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live demo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-rule-strong bg-white px-3 py-1.5 text-xs text-ink-2 font-medium hover:border-ink hover:text-ink transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={() => onOpenCaseStudy(project)}
              className={`ml-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-0.5 ${style.linkText}`}
            >
              <span>Case study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
