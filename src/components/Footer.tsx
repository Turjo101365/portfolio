import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-rule bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap justify-between gap-10">
          <div>
            <p className="font-display text-xl tracking-tight font-bold text-ink">
              Tanmoy Chowdhury Turjo
            </p>
            <p className="label mt-2 text-ink-3 text-[11px]">
              Full-Stack &amp; AI Systems · Python, C#, TypeScript, LLMs
            </p>
            <p className="label mt-1 text-ink-3 text-[11px]">
              Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <p className="label mb-4 text-ink-3 text-[11px]">Pages</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-ink-2 transition-colors hover:text-forest-700" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-ink-2 transition-colors hover:text-forest-700" href="#work">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-ink-2 transition-colors hover:text-forest-700" href="#research">
                  Research
                </a>
              </li>
              <li>
                <a className="text-ink-2 transition-colors hover:text-forest-700" href="#awards">
                  Awards
                </a>
              </li>
              <li>
                <a className="text-ink-2 transition-colors hover:text-forest-700" href="#deployments">
                  Live Apps
                </a>
              </li>
              <li>
                <a className="text-ink-2 transition-colors hover:text-forest-700" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label mb-4 text-ink-3 text-[11px]">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/Turjo101365"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-forest-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-forest-700"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:turjo5892@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-forest-700"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-6">
          <p className="label text-ink-3 text-[10px]">
            © {new Date().getFullYear()} Tanmoy Chowdhury Turjo
          </p>
          <p className="label text-ink-3 text-[10px]">
            React · Tailwind · Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
