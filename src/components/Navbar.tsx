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
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[2.5px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Full-Width Horizontal Header with MelaFair Dark Forest Styling */}
      <header className="no-print sticky top-0 z-50 w-full border-b border-emerald-500/20 bg-[#071f13]/95 backdrop-blur-xl shadow-lg transition-all">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5"
        >
          {/* Logo & Identity (MelaFair style badge + title + subtitle) */}
          <a href="#top" className="flex items-center gap-3 group select-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00d07d] text-[#051b0f] font-black text-base shadow-sm group-hover:scale-105 transition-transform">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-sm sm:text-base group-hover:text-emerald-300 transition-colors">
                TANMOY CHOWDHURY TURJO
              </span>
              <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider hidden sm:block">
                FULL-STACK &amp; AI SYSTEMS CORE
              </span>
            </div>
          </a>

          {/* Desktop Nav Items & Actions */}
          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-6 text-xs text-white/70 lg:flex font-medium tracking-wider uppercase">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`pb-1 transition-all duration-150 ${
                      activeSection === link.id
                        ? 'text-[#00d07d] border-b-2 border-[#00d07d] font-bold'
                        : 'border-b-2 border-transparent hover:text-white hover:border-emerald-400/50'
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
                className="hidden items-center gap-2 border border-emerald-500/30 bg-[#0c2a1a] hover:bg-[#123824] px-3.5 py-1.5 rounded-full text-xs text-emerald-200/80 hover:text-white transition-all shadow-sm md:inline-flex"
              >
                <Search className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-sans">Search</span>
                <kbd className="ml-1 rounded bg-[#071f13] border border-emerald-500/30 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md shadow-emerald-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get in touch
              </button>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                className="border border-emerald-500/30 bg-[#0c2a1a] p-2 text-emerald-300 rounded-lg transition-colors hover:text-white lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Full-Width Menu Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-emerald-500/20 bg-[#071f13]/98 backdrop-blur-xl px-6 py-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 text-sm font-medium tracking-wide transition-colors ${
                    activeSection === link.id
                      ? 'text-[#00d07d] font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-emerald-500/20 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="flex items-center justify-between border border-emerald-500/30 p-2.5 rounded-lg text-xs text-emerald-200 bg-[#0c2a1a]"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-emerald-400" />
                    <span>Search portfolio</span>
                  </span>
                  <kbd className="border border-emerald-500/30 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300 bg-[#071f13] rounded">
                    ⌘K
                  </kbd>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 text-white py-2.5 rounded-lg text-xs font-semibold shadow-sm"
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
