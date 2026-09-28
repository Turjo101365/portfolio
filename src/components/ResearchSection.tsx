import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Eye,
  Info,
} from 'lucide-react';
import { researchItems } from '../data/research';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'paper' | 'proposal'>('all');

  const paper = researchItems[0];
  const proposal = researchItems[1];

  return (
    <section id="research" className="relative border-t border-rule py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        03
      </span>

      {/* Section Header */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-[#2E5D26]" />
            <span className="h-[3px] w-10 bg-[#2E5D26]/60" />
            <span className="h-[3px] w-6 bg-[#2E5D26]/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-[#2E5D26] font-bold text-sm">03</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Research & academic work
            </h2>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-mono border transition-all ${
              activeTab === 'all'
                ? 'bg-[#2E5D26] text-white border-[#2E5D26] font-semibold shadow-xs'
                : 'bg-white text-ink-2 border-rule hover:border-ink-3'
            }`}
          >
            All Work ({researchItems.length})
          </button>
          <button
            onClick={() => setActiveTab('paper')}
            className={`px-3 py-1.5 text-xs font-mono border transition-all ${
              activeTab === 'paper'
                ? 'bg-[#2E5D26] text-white border-[#2E5D26] font-semibold shadow-xs'
                : 'bg-white text-ink-2 border-rule hover:border-ink-3'
            }`}
          >
            Submitted Paper (1)
          </button>
          <button
            onClick={() => setActiveTab('proposal')}
            className={`px-3 py-1.5 text-xs font-mono border transition-all ${
              activeTab === 'proposal'
                ? 'bg-[#2E5D26] text-white border-[#2E5D26] font-semibold shadow-xs'
                : 'bg-white text-ink-2 border-rule hover:border-ink-3'
            }`}
          >
            Poster Proposal (1)
          </button>
        </div>
      </div>

      {/* Academic Status Note */}
      <div className="mb-8 border border-[#DBE6D6] bg-[#EEF6ED] p-3.5 sm:p-4 text-xs font-mono text-[#1C3C18] flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#2E5D26] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <span className="font-bold">Disclosure & Academic Integrity:</span> Status is stated as it stands. A submitted paper is listed as submitted, and a proposal as a proposal — neither is described as published work.
        </p>
      </div>

      <div className="space-y-12">
        {/* ENTRY 1: Conference Paper */}
        {(activeTab === 'all' || activeTab === 'paper') && (
          <article className="border border-rule bg-white shadow-xs relative overflow-hidden transition-all">
            <span aria-hidden="true" className="h-1.5 w-full bg-[#2E5D26] absolute top-0 left-0" />

            <div className="p-6 sm:p-10">
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-rule">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="label bg-paper text-ink border border-rule px-2.5 py-1 text-xs font-mono">
                    {paper.type}
                  </span>
                  <span className="label bg-[#EEF6ED] text-[#2E5D26] border border-[#DBE6D6] px-2.5 py-1 text-xs font-mono font-bold">
                    {paper.status}
                  </span>
                  <span className="label text-ink-3 text-xs font-mono">
                    {paper.venue} · {paper.year}
                  </span>
                </div>

                {paper.codeUrl && (
                  <a
                    href={paper.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2E5D26] hover:text-[#1C3C18] transition-colors border border-[#DBE6D6] bg-[#EEF6ED] px-3 py-1.5"
                  >
                    <span>Code & data</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Title & Authors */}
              <div className="mt-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  {paper.title}
                </h3>
                <p className="mt-1.5 text-base sm:text-lg font-medium text-ink-2 font-display">
                  {paper.subtitle}
                </p>

                {paper.authors && (
                  <p className="mt-3 text-sm text-ink-2 font-mono">
                    {paper.authors.split(', ').map((author, idx) => (
                      <span key={author}>
                        {idx > 0 && ', '}
                        <span className={author.includes('Turjo') ? 'font-bold text-[#2E5D26] underline decoration-[#2E5D26]/40 underline-offset-4' : ''}>
                          {author}
                        </span>
                      </span>
                    ))}
                    {paper.affiliation && (
                      <span className="block text-xs text-ink-3 mt-1 font-sans">
                        {paper.affiliation}
                      </span>
                    )}
                  </p>
                )}
              </div>

              {/* Abstract */}
              <div className="mt-6 border-l-2 border-[#2E5D26] bg-[#EEF6ED]/50 p-4">
                <p className="label text-[#2E5D26] font-bold text-xs uppercase mb-1.5">Abstract</p>
                <p className="text-sm text-ink-2 leading-relaxed font-sans">
                  {paper.abstract}
                </p>
              </div>

              {/* What It Found & Method Grid */}
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {/* Findings */}
                <div className="border border-rule bg-paper p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5D26]" />
                    <h4 className="font-display font-bold text-base text-ink">What it found</h4>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {paper.findings?.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-[#2E5D26] font-bold shrink-0 mt-0.5">0{idx + 1}.</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Method */}
                <div className="border border-rule bg-paper p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Cpu className="w-4 h-4 text-[#2E5D26]" />
                    <h4 className="font-display font-bold text-base text-ink">Methodology & Rigor</h4>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {paper.method?.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-ink-3 font-semibold shrink-0 mt-0.5">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Multi-Precision Metrics Table */}
              {paper.metricsTable && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <p className="label text-ink font-bold text-xs">
                      Empirical Multi-Precision Evaluation (Qwen2.5-3B-Instruct)
                    </p>
                    <span className="label text-ink-3 text-[11px] font-mono">
                      Scored via single forward-pass argmax over option token logits
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-rule">
                    <table className="w-full text-left text-xs sm:text-sm font-mono">
                      <thead className="bg-paper border-b border-rule text-xs text-ink-3 uppercase">
                        <tr>
                          <th className="p-3">Language</th>
                          <th className="p-3">Script</th>
                          <th className="p-3">FP16 Accuracy</th>
                          <th className="p-3">INT8 Accuracy</th>
                          <th className="p-3">NF4 (4-bit)</th>
                          <th className="p-3 text-right">NF4 vs FP16 Delta</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-rule bg-white">
                        {paper.metricsTable.map((row) => (
                          <tr key={row.language} className="hover:bg-paper/60 transition-colors">
                            <td className="p-3 font-sans font-medium text-ink">{row.language}</td>
                            <td className="p-3 text-ink-3">{row.script}</td>
                            <td className="p-3 text-ink-2">{row.fp16}</td>
                            <td className="p-3 text-ink-2">{row.int8}</td>
                            <td className="p-3 font-bold text-[#2E5D26]">{row.nf4}</td>
                            <td className="p-3 text-right font-bold text-red-600">{row.delta}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </article>
        )}

        {/* ENTRY 2: Poster Presentation Proposal */}
        {(activeTab === 'all' || activeTab === 'proposal') && (
          <article className="border border-rule bg-white shadow-xs relative overflow-hidden transition-all">
            <span aria-hidden="true" className="h-1.5 w-full bg-amber-600 absolute top-0 left-0" />

            <div className="p-6 sm:p-10">
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-rule">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="label bg-paper text-ink border border-rule px-2.5 py-1 text-xs font-mono">
                    {proposal.type}
                  </span>
                  <span className="label bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 text-xs font-mono font-bold">
                    {proposal.status}
                  </span>
                  <span className="label text-ink-3 text-xs font-mono">
                    {proposal.venue} · {proposal.year}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  {proposal.title}
                </h3>
                <p className="mt-1.5 text-base sm:text-lg font-medium text-ink-2 font-display">
                  {proposal.subtitle}
                </p>
              </div>

              {/* Abstract */}
              <div className="mt-6 border-l-2 border-amber-600 bg-amber-50/50 p-4">
                <p className="label text-amber-800 font-bold text-xs uppercase mb-1.5">Abstract</p>
                <p className="text-sm text-ink-2 leading-relaxed font-sans">
                  {proposal.abstract}
                </p>
              </div>

              {/* Approach & Safeguards Grid */}
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {/* Approach */}
                <div className="border border-rule bg-paper p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="w-4 h-4 text-amber-700" />
                    <h4 className="font-display font-bold text-base text-ink">Approach</h4>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {proposal.approach?.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-amber-700 font-bold shrink-0 mt-0.5">0{idx + 1}.</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safeguards & Scope */}
                <div className="border border-rule bg-paper p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    <h4 className="font-display font-bold text-base text-ink">Safeguards & Scope</h4>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {proposal.safeguards?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};
