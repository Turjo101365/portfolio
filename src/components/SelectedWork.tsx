import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface SelectedWorkProps {
  projects: Project[];
  onOpenCaseStudy: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ projects, onOpenCaseStudy }) => {
  return (
    <section id="work" className="relative border-t border-rule py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        01
      </span>

      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-forest-700" />
            <span className="h-[3px] w-10 bg-forest-700/60" />
            <span className="h-[3px] w-6 bg-forest-700/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-forest-700 font-bold text-sm">01</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Selected work
            </h2>
          </div>
        </div>

        <p className="label text-ink-3">
          {projects.length} featured engineering systems
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <ProjectCard
            project={projects[0]}
            onOpenCaseStudy={onOpenCaseStudy}
            isFeatured={true}
          />
        </div>

        {projects.slice(1).map((project) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              isFeatured={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
