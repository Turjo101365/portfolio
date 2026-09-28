import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenContact }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = ['top', 'work', 'deployments', 'research', 'stack', 'awards', 'about'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#top', id: 'top' },
    { name: 'Selected Work', href: '#work', id: 'work' },
    { name: 'Live Apps', href: '#deployments', id: 'deployments' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Tech Stack', href: '#stack', id: 'stack' },
    { name: 'Honors', href: '#awards', id: 'awards' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-crimson transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-rule bg-white/90 backdrop-blur-md">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a className="flex items-baseline gap-3" href="#top">
            <span className="font-display text-lg tracking-tight font-semibold text-ink">Tanmoy Chowdhury Turjo</span>
            <span className="label hidden text-ink-3 sm:inline border-l border-rule pl-3">Full-Stack & AI Systems</span>
          </a>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-7 text-sm text-ink-2 lg:flex">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`border-b pb-0.5 transition-colors font-medium ${
                      activeSection === link.id
                        ? 'border-crimson text-crimson'
                        : 'border-transparent hover:border-crimson hover:text-crimson'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search"
              className="hidden items-center gap-2 border border-rule-strong bg-white px-3 py-2 text-sm text-ink-3 transition-colors hover:border-ink hover:text-ink md:inline-flex"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
              <kbd className="ml-2 border border-rule px-1.5 py-0.5 font-mono text-[10px] text-ink-3 bg-paper">⌘K</kbd>
            </button>

            <button
              onClick={onOpenContact}
              className="hidden bg-crimson px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:inline-block shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            >
              Get in touch
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="border border-rule-strong p-2 text-ink-2 transition-colors hover:border-crimson hover:text-crimson lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-b border-rule bg-white px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="flex items-center justify-between border border-rule-strong bg-paper p-3 text-sm text-ink-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  <span>Search site</span>
                </div>
                <kbd className="border border-rule px-1.5 py-0.5 font-mono text-[10px] bg-white">⌘K</kbd>
              </button>

              <div className="grid gap-2 border-t border-rule pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-base font-medium text-ink-2 hover:text-crimson hover:bg-paper"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-crimson py-3 text-center text-sm font-medium text-white"
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
