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
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#1c3c18] via-[#2e5d26] to-[#4e8740] transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Full-Width Horizontal Header */}
      <header className="no-print sticky top-0 z-50 w-full border-b border-rule bg-white/90 backdrop-blur-md transition-all">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4"
        >
          {/* Logo & Identity */}
          <a href="#top" className="flex items-baseline gap-3 group select-none">
            <span className="font-display text-lg font-bold tracking-tight text-ink group-hover:text-forest-700 transition-colors">
              Tanmoy Chowdhury Turjo
            </span>
            <span className="label hidden text-ink-3 sm:inline">
              Full-Stack & AI Systems
            </span>
          </a>

          {/* Desktop Nav Items & Actions */}
          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-6 text-sm text-ink-2 lg:flex font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`border-b-2 pb-1 text-xs uppercase tracking-wider transition-colors ${
                      activeSection === link.id
                        ? 'border-forest-700 text-forest-700 font-semibold'
                        : 'border-transparent hover:border-forest-700 hover:text-forest-700'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search"
                className="hidden items-center gap-2 border border-rule bg-white px-3 py-1.5 text-xs text-ink-3 transition-colors hover:border-ink hover:text-ink md:inline-flex shadow-2xs"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
                <kbd className="ml-2 border border-rule px-1.5 py-0.5 font-mono text-[10px] text-ink-3 bg-paper">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={onOpenContact}
                className="hidden bg-gradient-to-r from-[#1c3c18] via-[#244f21] to-[#2e5d26] text-white px-5 py-2 text-xs font-semibold shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all sm:inline-block"
              >
                Get in touch
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                className="border border-rule p-2 text-ink-2 transition-colors hover:border-forest-700 hover:text-forest-700 lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Full-Width Menu Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-rule bg-white/98 backdrop-blur-md px-6 py-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-forest-700 font-semibold'
                      : 'text-ink-2 hover:text-forest-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-rule flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="flex items-center justify-between border border-rule p-2.5 text-xs text-ink-2 bg-paper"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-ink-3" />
                    <span>Search portfolio</span>
                  </span>
                  <kbd className="border border-rule px-1.5 py-0.5 font-mono text-[10px] text-ink-3 bg-white">
                    ⌘K
                  </kbd>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-[#2E5D26] text-white py-2.5 text-xs font-semibold"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
