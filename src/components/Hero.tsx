import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="top" className="relative -mx-6 overflow-hidden px-6 pt-16 pb-20 sm:pt-24">
      {/* Radiant background glow matching fairuz-anadi */}
      <div aria-hidden="true" className="aurora pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[380px] rounded-full bg-gradient-to-b from-amber-400/25 via-emerald-600/18 to-transparent blur-3xl opacity-85"
      />
      <div aria-hidden="true" className="grid-field pointer-events-none absolute inset-0 opacity-80" />

      <div className="relative mx-auto max-w-6xl">
        <p className="label mb-8 flex items-center gap-3 text-forest-700">
          <span aria-hidden="true" className="h-px w-8 bg-forest-700" />
          Dhaka, Bangladesh
        </p>

        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="font-display text-[3.25rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.5rem] font-bold text-ink">
              Tanmoy Chowdhury Turjo
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="label bg-forest-900 px-3 py-1.5 text-white rounded-md shadow-sm">
                Full-Stack & AI Systems · Python, C#, TypeScript, LLMs
              </span>
              <span className="label flex items-center gap-2 border border-rule px-3 py-1.5 text-ink-2 bg-white rounded-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Available for software & AI engineering
              </span>
            </div>

            <p className="mt-8 max-w-3xl font-display text-xl leading-[1.5] text-ink-2 sm:text-[1.55rem]">
              I build the systems where precision, concurrency, and real-world constraints matter — 
              hyper-local urban transit routing engines, exact microgrid LP optimization, high-throughput 
              database architectures, and verifiable multi-LLM evaluation pipelines. Computer Science & Engineering 
              at AUST. Most of this started at a hackathon and kept going afterwards.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-tight transition-all duration-200 active:translate-y-px whitespace-nowrap bg-gradient-to-r from-[#1c3c18] via-[#244f21] to-[#2e5d26] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-emerald-950/20 hover:scale-[1.02] shadow-sm"
          >
            View selected work
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-tight transition-all duration-200 active:translate-y-px whitespace-nowrap border border-rule bg-white px-6 py-3 text-ink rounded-full hover:border-forest-700 hover:text-forest-700 shadow-sm"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>

          <div className="ml-auto flex items-center gap-2">
            <a
              href="https://github.com/Turjo101365"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="border border-rule bg-white p-3 rounded-full text-ink-2 transition-all hover:border-forest-700 hover:text-forest-700 shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="border border-rule bg-white p-3 rounded-full text-ink-2 transition-all hover:border-forest-700 hover:text-forest-700 shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:turjo5892@gmail.com"
              aria-label="Email"
              className="border border-rule bg-white p-3 rounded-full text-ink-2 transition-all hover:border-forest-700 hover:text-forest-700 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <ul className="mt-16 flex flex-wrap gap-px border border-rule bg-rule shadow-sm rounded-2xl overflow-hidden">
          <li className="relative flex-1 basis-64 bg-white px-6 py-5">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-forest-700" />
            <p className="label text-forest-700">AI Systems & Hackathons</p>
            <p className="mt-2 text-[15px] leading-snug text-ink-2 font-medium">
              BUP CSE Fest & AUST CSE Carnival AI Build Hackathon Projects
            </p>
          </li>
          <li className="relative flex-1 basis-64 bg-white px-6 py-5">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-indigo" />
            <p className="label text-indigo">Architectural Rigor</p>
            <p className="mt-2 text-[15px] leading-snug text-ink-2 font-medium">
              Database row-level concurrency locking & exact LP optimization
            </p>
          </li>
          <li className="relative flex-1 basis-64 bg-white px-6 py-5">
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-teal" />
            <p className="label text-teal">Shipped & Live</p>
            <p className="mt-2 text-[15px] leading-snug text-ink-2 font-medium">
              5 full-stack & AI production deployments active on the web
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
