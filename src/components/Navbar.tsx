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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setIsScrolled(window.scrollY > 15);

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
    { name: 'Projects', href: '#work', id: 'work' },
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
          className="h-full bg-gradient-to-r from-[#1c3c18] via-[#2e5d26] to-[#4e8740] transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Capsule Navigation Bar matching MELA */}
      <header className="sticky top-2 sm:top-3 z-50 px-3 sm:px-6 transition-all duration-300">
        <nav
          id="mainNavbar"
          aria-label="Main"
          className={`nav-capsule mx-auto flex max-w-6xl items-center justify-between rounded-full bg-white/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 border border-[#dbe6d6] transition-all ${
            isScrolled ? 'nav-scrolled' : 'shadow-md shadow-[#1c3c18]/5'
          }`}
        >
          {/* Logo & Brand (MELA Style) */}
          <div className="flex items-center gap-6 lg:gap-8">
            <a href="#top" className="flex items-center space-x-2.5 group select-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#1c3c18] via-[#244f21] to-[#2e5d26] text-white flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 group-hover:rotate-6 group-hover:shadow-md group-hover:shadow-emerald-900/20 transition-all duration-300">
                T
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-lg sm:text-2xl font-black tracking-tight text-[#1c3c18] group-hover:text-[#2e5d26] transition-colors">
                    TURJO
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#2e5d26] bg-[#e5efe2] group-hover:bg-[#2e5d26] group-hover:text-white px-2 py-0.5 rounded-full transition-all duration-300 shadow-xs">
                    CORE
                  </span>
                </div>
                <span className="text-[9px] text-[#557b4f] font-semibold uppercase tracking-wider mt-0.5">
                  Full-Stack &amp; AI Systems
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Pill Style) */}
            <div className="hidden lg:flex items-center space-x-1 lg:space-x-1.5 text-xs lg:text-sm font-semibold text-[#40543e]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[#e5efe2] text-[#2e5d26] font-bold shadow-xs'
                        : 'hover:text-[#2e5d26] hover:bg-[#e5efe2]/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side Actions & Auth */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Pill Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search"
              className="hidden md:inline-flex items-center gap-2 border border-[#dbe6d6] bg-[#f4f8f3] hover:bg-[#e5efe2] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2e5d26] transition-all duration-200 shadow-xs active:scale-95"
            >
              <Search className="w-3.5 h-3.5 text-[#2e5d26]" />
              <span>Search</span>
              <kbd className="ml-1 border border-[#cce0c6] bg-white px-1.5 py-0.5 rounded font-mono text-[9px] text-[#2e5d26]">
                ⌘K
              </kbd>
            </button>

            {/* Primary Action Button (Get in Touch) */}
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#2e5d26] to-[#3b7331] hover:from-[#1c3c18] hover:to-[#2e5d26] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#2e5d26]/20 hover:shadow-lg hover:shadow-[#2e5d26]/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Get in Touch</span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-[#e5efe2] text-[#2e5d26] hover:bg-[#2e5d26] hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Capsule Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mx-auto max-w-6xl mt-2 bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl border border-[#dbe6d6] transition-all duration-300 ease-out origin-top animate-in fade-in slide-in-from-top-2 lg:hidden">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-semibold flex items-center transition-colors ${
                      isActive
                        ? 'bg-[#e5efe2] text-[#2e5d26] font-bold'
                        : 'text-slate-700 hover:bg-[#eef5ec] hover:text-[#2e5d26]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-[#dbe6d6] flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="flex items-center justify-between border border-[#dbe6d6] bg-[#f4f8f3] p-2.5 rounded-2xl text-xs font-semibold text-[#2e5d26]"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#2e5d26]" />
                    <span>Search portfolio</span>
                  </span>
                  <kbd className="border border-[#cce0c6] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#2e5d26] rounded">
                    ⌘K
                  </kbd>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full bg-gradient-to-r from-[#2e5d26] to-[#3b7331] text-white py-2.5 rounded-2xl text-xs font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
