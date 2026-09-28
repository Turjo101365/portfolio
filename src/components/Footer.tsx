import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-rule bg-white py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-base font-bold text-ink">
            Tanmoy Chowdhury Turjo
          </p>
          <p className="mt-1 text-xs text-ink-3 font-mono">
            Computer Science & Engineering · Ahsanullah University of Science and Technology (AUST)
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="label text-ink-3 text-[10px]">
            © {new Date().getFullYear()} · All rights reserved
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="border border-rule-strong p-2.5 text-ink-2 hover:border-crimson hover:text-crimson transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
