import React from 'react';
import { ArrowUpRight, Activity } from 'lucide-react';
import { deployments } from '../data/deployments';

export const LiveDeployments: React.FC = () => {
  return (
    <section id="deployments" className="relative border-t border-rule py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        02
      </span>

      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-teal" />
            <span className="h-[3px] w-10 bg-teal/60" />
            <span className="h-[3px] w-6 bg-teal/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-teal font-bold text-sm">02</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Open it yourself
            </h2>
          </div>
        </div>

        <p className="label text-ink-3">
          {deployments.length} live production deployments
        </p>
      </div>

      <div className="mb-8 text-rule-strong overflow-hidden opacity-50">
        <svg aria-hidden="true" height="14" width="100%" preserveAspectRatio="none">
          <defs>
            <pattern id="slashes" width="9" height="14" patternUnits="userSpaceOnUse" patternTransform="skewX(-30)">
              <rect width="2" height="14" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="14" fill="url(#slashes)" />
        </svg>
      </div>

      <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3 shadow-sm">
        {deployments.map((item) => {
          const accentBarColor = {
            crimson: 'bg-crimson',
            indigo: 'bg-indigo',
            teal: 'bg-teal',
            amber: 'bg-amber',
            purple: 'bg-purple',
            cyan: 'bg-cyan',
          }[item.accent];

          return (
            <li key={item.id} className="relative bg-white group flex flex-col justify-between">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="block p-6 transition-colors hover:bg-paper flex-1"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1 ${accentBarColor} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl font-bold leading-snug text-ink group-hover:text-crimson transition-colors">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs font-mono text-ink-3">
                      {item.platform}
                    </p>
                  </div>

                  <span className="flex items-center gap-1.5 label text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 text-sm text-ink-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between pt-3 border-t border-rule/50 text-xs font-mono text-ink-3">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-teal" />
                    {item.latency}
                  </span>
                  <span className="inline-flex items-center gap-1 text-crimson font-medium group-hover:translate-x-0.5 transition-transform">
                    Launch app
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
