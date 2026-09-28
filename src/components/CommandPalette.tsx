import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { deployments } from '../data/deployments';
import { Project } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.tagline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredDeployments = deployments.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.platform.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white border border-rule shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
        <div className="flex items-center px-4 border-b border-rule bg-paper">
          <Search className="w-5 h-5 text-ink-3 shrink-0 ml-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, technologies, deployments, research..."
            className="w-full bg-transparent p-4 text-base text-ink placeholder:text-ink-3 focus:outline-none font-sans"
            autoFocus
          />
          <kbd className="hidden sm:inline-block border border-rule bg-white px-2 py-0.5 font-mono text-[10px] text-ink-3">
            ESC
          </kbd>
        </div>

        <div className="p-4 overflow-y-auto divide-y divide-rule/60 space-y-4">
          {filteredProjects.length > 0 && (
            <div>
              <p className="label text-ink-3 text-[10px] mb-2 px-2">Featured Projects</p>
              <div className="space-y-1">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project);
                      onClose();
                    }}
                    className="w-full text-left p-3 hover:bg-paper flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="font-display text-base font-bold text-ink group-hover:text-crimson">
                        {project.title}
                      </p>
                      <p className="text-xs text-ink-3 line-clamp-1">{project.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-3 group-hover:text-crimson group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredDeployments.length > 0 && (
            <div className="pt-2">
              <p className="label text-ink-3 text-[10px] mb-2 px-2">Live Deployments</p>
              <div className="space-y-1">
                {filteredDeployments.map((dep) => (
                  <a
                    key={dep.id}
                    href={dep.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-3 hover:bg-paper flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="font-display text-base font-bold text-ink group-hover:text-teal">
                        {dep.title}
                      </p>
                      <p className="text-xs text-ink-3">{dep.platform} · {dep.status}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-ink-3 group-hover:text-teal" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && filteredDeployments.length === 0 && (
            <div className="text-center py-12 text-ink-3">
              <p className="text-sm">No matches found for &quot;{query}&quot;</p>
            </div>
          )}
        </div>

        <div className="px-4 py-2.5 bg-paper border-t border-rule text-xs font-mono text-ink-3 flex items-center justify-between">
          <span>Search portfolio items</span>
          <span>Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
