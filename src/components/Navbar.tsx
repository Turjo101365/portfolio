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
          if (rect.top <= 160 && rect.bottom >= 160) {
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
      {/* Top Reading Progress Bar */}
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#1c3c18] via-[#2e5d26] to-[#4e8740] transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Capsule Header */}
      <header className="sticky top-3 sm:top-4 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-300">
        <nav
          aria-label="Main"
          className="bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-2.5 shadow-lg shadow-forest-900/5 border border-rule flex items-center justify-between transition-all"
        >
          {/* Logo & Identity */}
          <a href="#top" className="flex items-center gap-3 group select-none">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#1c3c18] via-[#23491f] to-[#2e5d26] text-white flex items-center justify-center font-display font-black text-sm shadow-sm group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-bold tracking-tight text-ink group-hover:text-forest-700 transition-colors">
                Turjo
              </span>
              <span className="label text-[9px] text-ink-3 hidden sm:inline -mt-0.5">
                Full-Stack & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-paper/60 p-1 rounded-full border border-rule/60">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs transition-all font-medium ${
                  activeSection === link.id
                    ? 'bg-white text-forest-700 shadow-sm font-semibold border border-rule/80'
                    : 'text-ink-2 hover:text-forest-700 hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Search & Contact CTA */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search"
              className="flex items-center gap-1.5 border border-rule bg-paper/80 hover:bg-white px-3 py-1.5 rounded-full text-xs text-ink-3 transition-all hover:border-ink hover:text-ink shadow-sm"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="border border-rule px-1 py-0.2 font-mono text-[9px] text-ink-3 bg-white rounded">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenContact}
              className="bg-gradient-to-r from-[#1c3c18] via-[#244f21] to-[#2e5d26] text-white rounded-full px-4 sm:px-5 py-2 text-xs font-semibold shadow-sm hover:shadow-md hover:shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get in touch
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="border border-rule p-2 rounded-full text-ink-2 transition-colors hover:border-forest-700 hover:text-forest-700 lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Capsule Drawer */}
        {mobileMenuOpen && (
          <div className="mt-2 bg-white/98 backdrop-blur-md rounded-3xl border border-rule p-5 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-forest-wash text-forest-700 font-semibold'
                      : 'text-ink-2 hover:bg-paper hover:text-forest-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
