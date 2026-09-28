import React, { useState } from 'react';
import { skills } from '../data/skills';

export const TechStackSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter((s) => s.category.toLowerCase().includes(filter.toLowerCase()));

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend & 3D' },
    { id: 'databases', label: 'Databases' },
    { id: 'devops', label: 'Tools & DevOps' },
  ];

  return (
    <section id="stack" className="relative border-t border-rule py-16 sm:py-24">
      {/* Big Watermark Numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        04
      </span>

      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-crimson" />
            <span className="h-[3px] w-10 bg-crimson/60" />
            <span className="h-[3px] w-6 bg-crimson/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-crimson font-bold text-sm">04</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Technical stack
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`label border px-3 py-1.5 transition-all text-xs ${
                filter === tab.id
                  ? 'border-crimson bg-crimson text-white font-semibold'
                  : 'border-rule-strong bg-white text-ink-2 hover:border-ink hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Badges Block */}
      <div className="border border-rule bg-white divide-y divide-rule shadow-sm">
        {filteredSkills.map((group) => (
          <div key={group.category} className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:w-1/3">
              <h3 className="font-display text-xl font-bold text-ink">
                {group.category}
              </h3>
              <p className="mt-1 text-xs text-ink-3 font-sans">
                {group.description}
              </p>
            </div>

            <div className="md:w-2/3 flex flex-wrap items-center gap-2.5">
              {group.items.map((skill) => (
                <img
                  key={skill.name}
                  src={skill.badgeUrl}
                  alt={skill.name}
                  className="h-7 rounded hover:opacity-90 transition-opacity shadow-sm"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
