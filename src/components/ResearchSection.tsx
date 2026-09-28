import React from 'react';
import { ArrowRight } from 'lucide-react';
import { researchPaper } from '../data/research';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative border-t border-rule py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        03
      </span>

      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-indigo" />
            <span className="h-[3px] w-10 bg-indigo/60" />
            <span className="h-[3px] w-6 bg-indigo/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-indigo font-bold text-sm">03</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Empirical research
            </h2>
          </div>
        </div>

        <span className="label border border-indigo px-3 py-1 text-indigo bg-indigo-wash font-mono">
          BELEBELE Benchmark · Qwen2.5-3B
        </span>
      </div>

      <div className="border border-rule bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <span aria-hidden="true" className="h-1.5 w-full bg-indigo absolute top-0 left-0" />

        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="label text-indigo font-mono bg-indigo-wash px-2.5 py-1 border border-indigo">
              Research Pipeline
            </span>
            <span className="label text-ink-3">Evaluation Study</span>
          </div>

          <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            {researchPaper.title}
          </h3>

          <p className="mt-3 text-lg font-medium text-ink-2 font-display">
            {researchPaper.tagline}
          </p>

          <p className="mt-4 text-base text-ink-2 leading-relaxed">
            {researchPaper.context}
          </p>
        </div>

        <div className="mt-8 border border-rule bg-paper p-5">
          <p className="label text-ink-3 mb-3">Deterministic Data Flow Pipeline</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs text-ink-2">
            <span className="bg-white border border-rule px-3 py-1.5 font-semibold">Kaggle T4 Run</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo" />
            <span className="bg-white border border-rule px-3 py-1.5 font-semibold">results/raw/</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo" />
            <span className="bg-white border border-rule px-3 py-1.5 font-semibold">tidy.csv (BELEBELE 900)</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo" />
            <span className="bg-white border border-rule px-3 py-1.5 font-semibold">letter_logit argmax</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo" />
            <span className="bg-indigo text-white px-3 py-1.5 font-semibold">Statistical Interaction</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <p className="label text-ink-2 font-semibold">
              Multi-Precision Evaluation Results (Qwen2.5-3B-Instruct)
            </p>
            <span className="label text-ink-3 text-[10px]">
              Scored via Option Letter Token Logits
            </span>
          </div>

          <div className="overflow-x-auto border border-rule">
            <table className="w-full text-left text-sm font-mono">
              <thead className="bg-paper border-b border-rule text-xs text-ink-3 uppercase">
                <tr>
                  <th className="p-3.5">Language</th>
                  <th className="p-3.5">Script</th>
                  <th className="p-3.5">FP16 Accuracy</th>
                  <th className="p-3.5">INT8 Accuracy</th>
                  <th className="p-3.5">NF4 (4-bit)</th>
                  <th className="p-3.5 text-right">NF4 vs FP16 Delta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule bg-white">
                {researchPaper.metricsTable.map((row) => (
                  <tr key={row.language} className="hover:bg-paper/50 transition-colors">
                    <td className="p-3.5 font-sans font-medium text-ink">{row.language}</td>
                    <td className="p-3.5 text-ink-3">{row.script}</td>
                    <td className="p-3.5 text-ink-2">{row.fp16}</td>
                    <td className="p-3.5 text-ink-2">{row.int8}</td>
                    <td className="p-3.5 font-bold text-indigo">{row.nf4}</td>
                    <td className="p-3.5 text-right font-bold text-crimson">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="border border-rule p-4 bg-white">
            <p className="label text-indigo font-bold mb-1">Keyed Items, Never Positional</p>
            <p className="text-xs text-ink-2 leading-relaxed font-sans">
              BELEBELE rows do not align across languages. All comparisons join strictly on link#question_number to guarantee semantic parity.
            </p>
          </div>

          <div className="border border-rule p-4 bg-white">
            <p className="label text-indigo font-bold mb-1">Token Logit Scoring</p>
            <p className="text-xs text-ink-2 leading-relaxed font-sans">
              Single forward pass evaluating option token IDs (e.g. &quot; A&quot; vs bare &quot;A&quot;), eliminating generative parse failures.
            </p>
          </div>

          <div className="border border-rule p-4 bg-white">
            <p className="label text-indigo font-bold mb-1">Hardware Uniformity</p>
            <p className="text-xs text-ink-2 leading-relaxed font-sans">
              All 3B model precisions fit on a single Kaggle T4 GPU (sm_75), ensuring latency comparisons reflect precision, not multi-GPU sharding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
