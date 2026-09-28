import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative border-t border-rule py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        06
      </span>

      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-crimson" />
            <span className="h-[3px] w-10 bg-crimson/60" />
            <span className="h-[3px] w-6 bg-crimson/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-crimson font-bold text-sm">06</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Engineering approach
            </h2>
          </div>
        </div>

        <p className="label text-ink-3">
          Background & Architectural Philosophy
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6 text-base text-ink-2 leading-relaxed">
          <p className="font-display text-2xl font-medium text-ink leading-snug">
            I am a Computer Science and Engineering student at Ahsanullah University of Science and Technology (AUST), focused on engineering backend systems and intelligent architectures that withstand real-world constraints.
          </p>

          <p>
            My engineering philosophy centers on <strong>separation of concerns and deterministic verification</strong>. When building systems that incorporate Large Language Models, I deliberately isolate probabilistic text generation from numerical, mission-critical calculations. Whether translating colloquial campus directives into exact HiGHS linear programs in <em>GridWise</em>, or scoring student exams with multi-model disagreement detection in <em>AcadIQ</em>, I ensure the machine can always explain and verify its output.
          </p>

          <p>
            On the backend, I value data integrity above all. Concurrency bugs and double-bookings destroy trust; in <em>MELA</em>, I enforced explicit SQL Server row-level locking (<code className="font-mono text-xs bg-paper px-1.5 py-0.5 border border-rule">UPDLOCK, ROWLOCK</code>) and triggers to guarantee transactional atomicity under peak loads. In <em>Goli Transit</em>, I focused on high-density hyper-local urban routing through dynamic graph penalty algorithms.
          </p>

          <div className="pt-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-rule p-5 bg-white">
              <h4 className="font-display text-lg font-bold text-ink mb-1">Education</h4>
              <p className="text-sm font-medium text-ink-2">B.Sc. in Computer Science & Engineering</p>
              <p className="text-xs text-ink-3 mt-1 font-mono">Ahsanullah University of Science & Technology (AUST)</p>
              <p className="text-xs text-crimson mt-2 font-mono">Dhaka, Bangladesh</p>
            </div>

            <div className="border border-rule p-5 bg-white">
              <h4 className="font-display text-lg font-bold text-ink mb-1">Active Roles</h4>
              <p className="text-sm font-medium text-ink-2">Full-Stack & AI Systems Engineering</p>
              <p className="text-xs text-ink-3 mt-1 font-mono">Backend Architecture · Model Quantization · Optimization</p>
              <p className="text-xs text-emerald-700 mt-2 font-mono">● Open for Engineering Roles</p>
            </div>
          </div>
        </div>

        <div className="border border-rule bg-paper p-7 space-y-6">
          <h3 className="label text-ink font-bold">Engineering Principles</h3>

          <div className="space-y-4">
            <div className="border-l-2 border-crimson pl-4">
              <p className="font-display text-base font-bold text-ink">Never let an LLM do raw math</p>
              <p className="text-xs text-ink-3 mt-1 leading-relaxed">
                Use language models for semantic parsing; delegate numerical calculations to verified solvers (LP, solvers, deterministic calculators).
              </p>
            </div>

            <div className="border-l-2 border-indigo pl-4">
              <p className="font-display text-base font-bold text-ink">Pessimistic safety under load</p>
              <p className="text-xs text-ink-3 mt-1 leading-relaxed">
                Assume network concurrency will collide. Lock rows explicitly and validate bounds with database constraints, not just client validation.
              </p>
            </div>

            <div className="border-l-2 border-teal pl-4">
              <p className="font-display text-base font-bold text-ink">On-device privacy by default</p>
              <p className="text-xs text-ink-3 mt-1 leading-relaxed">
                Compile vision models to WASM and run local Ollama endpoints to minimize cloud latency and protect sensitive telemetry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
