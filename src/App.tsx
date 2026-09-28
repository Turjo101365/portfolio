import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { LiveDeployments } from './components/LiveDeployments';
import { ResearchSection } from './components/ResearchSection';
import { TechStackSection } from './components/TechStackSection';
import { AwardsSection } from './components/AwardsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CommandPalette } from './components/CommandPalette';
import { projects } from './data/projects';
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-full flex flex-col bg-background text-ink font-sans selection:bg-crimson-wash selection:text-crimson">
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main className="mx-auto w-full max-w-6xl px-6 flex-1">
        <Hero onOpenContact={handleOpenContact} />
        <SelectedWork
          projects={projects}
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
        />
        <LiveDeployments />
        <ResearchSection />
        <TechStackSection />
        <AwardsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Case Study Slide-over Drawer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Command Palette (⌘K) Spotlight Search */}
      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
};
