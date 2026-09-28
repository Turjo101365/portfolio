import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'acd776959@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative border-t border-rule py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none font-display leading-none absolute -top-2 right-0 hidden text-[9rem] text-rule-strong opacity-40 lg:block font-bold"
        style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}
      >
        07
      </span>

      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-5 flex flex-col gap-1.5">
            <span className="h-[3px] w-14 bg-crimson" />
            <span className="h-[3px] w-10 bg-crimson/60" />
            <span className="h-[3px] w-6 bg-crimson/30" />
          </div>

          <div className="flex items-baseline gap-5">
            <span className="label text-crimson font-bold text-sm">07</span>
            <span aria-hidden="true" className="h-px w-12 bg-rule-strong" />
            <h2 className="font-display text-3xl tracking-tight sm:text-[2.6rem] font-bold text-ink">
              Get in touch
            </h2>
          </div>
        </div>

        <p className="label text-ink-3">
          Direct Inquiries & Collaboration
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 border border-rule bg-white p-8 sm:p-12 shadow-sm">
        <div>
          <h3 className="font-display text-3xl font-bold text-ink">
            Let&apos;s build something reliable together.
          </h3>

          <p className="mt-4 text-base text-ink-2 leading-relaxed font-sans">
            I am currently open to software engineering internships, backend architecture roles, and AI/ML research collaborations. If you are solving hard problems around distributed systems, graph optimization, or multi-LLM evaluation, reach out directly.
          </p>

          <div className="mt-8 border border-rule bg-paper p-5">
            <p className="label text-ink-3 text-[10px] mb-1">Direct Email</p>
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-base font-semibold text-ink break-all">
                {email}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 border border-rule-strong bg-white px-3 py-1.5 text-xs text-ink hover:border-crimson hover:text-crimson transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Turjo101365"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-rule-strong bg-white px-4 py-2 text-sm text-ink-2 hover:border-crimson hover:text-crimson transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-rule-strong bg-white px-4 py-2 text-sm text-ink-2 hover:border-crimson hover:text-crimson transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-ink-2 text-xs mb-1.5 block">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-rule-strong bg-white p-3 text-sm text-ink focus:border-crimson focus:outline-none"
              placeholder="e.g. Alex Hunter"
            />
          </div>

          <div>
            <label className="label text-ink-2 text-xs mb-1.5 block">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-rule-strong bg-white p-3 text-sm text-ink focus:border-crimson focus:outline-none"
              placeholder="alex@company.com"
            />
          </div>

          <div>
            <label className="label text-ink-2 text-xs mb-1.5 block">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-rule-strong bg-white p-3 text-sm text-ink focus:border-crimson focus:outline-none"
              placeholder="Tell me about your project, team, or opportunity..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-crimson py-3 text-center text-sm font-medium text-white hover:bg-accent-hover transition-colors shadow-sm inline-flex items-center justify-center gap-2"
          >
            {formSent ? (
              <>
                <Check className="w-4 h-4" />
                <span>Message Received — Thank you!</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
