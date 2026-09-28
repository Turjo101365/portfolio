import React from 'react';
import { awards } from '../data/awards';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="relative border-t border-rule py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        05
      </span>

      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-amber" />
            <span className="h-[3px] w-10 bg-amber/60" />
            <span className="h-[3px] w-6 bg-amber/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-amber font-bold text-sm">05</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Honors & Hackathons
            </h2>
          </div>
        </div>

        <p className="label text-ink-3">
          Verified academic and competition results
        </p>
      </div>

      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2 shadow-sm">
        {awards.map((award) => {
          const isChampion = award.position.toLowerCase().includes('champion');

          return (
            <div
              key={award.id}
              className="relative bg-white p-7 flex flex-col justify-between group hover:bg-paper transition-colors"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-1 ${isChampion ? 'bg-amber' : 'bg-indigo'}`}
              />

              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className={`label px-2.5 py-1 font-semibold ${
                    isChampion
                      ? 'bg-amber-wash text-amber border border-amber'
                      : 'bg-indigo-wash text-indigo border border-indigo'
                  }`}>
                    {award.position}
                  </span>
                  <span className="label text-ink-3 font-mono text-xs">
                    {award.date}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-ink group-hover:text-crimson transition-colors">
                  {award.title}
                </h3>

                <p className="mt-2 text-sm text-ink-2 leading-relaxed">
                  {award.event}
                </p>
              </div>

              {award.project && (
                <div className="mt-6 pt-3 border-t border-rule/50 flex items-center justify-between text-xs font-mono text-ink-3">
                  <span>Project</span>
                  <span className="font-semibold text-ink font-sans">
                    {award.project}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
