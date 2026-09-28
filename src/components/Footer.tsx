import React, { useState, useEffect } from 'react';
import {
  Clock,
  Shield,
  Boxes,
  FileText,
  Trophy,
  Info,
  Headphones,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const [bstTime, setBstTime] = useState<string>('07:09:36 PM');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setBstTime(timeStr);
      } catch {
        const now = new Date();
        setBstTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-transparent pt-6 pb-16 px-4 sm:px-6">
      {/* Floating Dark Forest Green Card */}
      <div className="relative mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-br from-[#0c2b1b] via-[#092215] to-[#06180f] border border-emerald-500/20 p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
        {/* Subtle Ambient Radial Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />

        {/* Top Header Row: Logo & Back to Top */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d07d] text-[#051b0f] font-black text-xl shadow-md">
              T
            </div>
            <div>
              <h2 className="font-bold text-lg sm:text-xl tracking-tight text-white uppercase">
                TANMOY CHOWDHURY TURJO
              </h2>
              <p className="font-mono text-[11px] text-emerald-400 font-semibold tracking-wider">
                FULL-STACK &amp; AI SYSTEMS CORE
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0f2c1d]/90 hover:bg-emerald-900/60 border border-emerald-600/30 px-5 py-2 text-xs font-medium text-emerald-200 hover:text-white transition-all shadow-sm active:scale-95"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

        {/* 3-Column Grid */}
        <div className="mt-10 pt-8 border-t border-emerald-500/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Bio + Status + Time + Socials */}
          <div className="space-y-4">
            <p className="text-xs sm:text-[13px] text-emerald-100/70 leading-relaxed font-sans">
              A high-performance systems engineer &amp; full-stack architect specializing in AI systems, high-concurrency database architectures, distributed optimization, and LLM benchmarking across Bangladesh.
            </p>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0c2a1a] px-3.5 py-1.5 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Core Operational • Synchronized</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300/80">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Dhaka BST: {bstTime}</span>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://github.com/Turjo101365"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0c2a1a] hover:bg-[#133824] border border-emerald-500/25 text-white/80 hover:text-emerald-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:turjo5892@gmail.com"
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0c2a1a] hover:bg-[#133824] border border-emerald-500/25 text-white/80 hover:text-emerald-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="font-mono text-xs text-emerald-400/60 ml-1.5">v2.4-Release</span>
            </div>
          </div>

          {/* Column 2: CORE SYSTEMS */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-white uppercase mb-4">
              <span className="text-emerald-400">●</span>
              <span>CORE SYSTEMS</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-emerald-100/75">
              <li>
                <a href="#work" className="hover:text-[#00d07d] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>Intelligent Transit (Movir)</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#00d07d] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>Microgrid LP Optimization</span>
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-[#00d07d] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>Tokenization &amp; Quantization</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#00d07d] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>MelaFair Concurrency Engine</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#00d07d] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>DNA Genomic Sequencing</span>
                </a>
              </li>
              <li>
                <a href="#deployments" className="hover:text-[#00d07d] transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>FridgeMama Smart Kitchen</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: DIRECTORY */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold font-mono tracking-wider text-white uppercase mb-4">
              <span className="text-emerald-400">●</span>
              <span>DIRECTORY</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-emerald-100/75">
              <li>
                <a href="#work" className="hover:text-[#00d07d] transition-colors flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Selected Projects</span>
                </a>
              </li>
              <li>
                <a href="#deployments" className="hover:text-[#00d07d] transition-colors flex items-center gap-2">
                  <Boxes className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Live Deployments</span>
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-[#00d07d] transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Research &amp; Papers</span>
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-[#00d07d] transition-colors flex items-center gap-2">
                  <Trophy className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Honors &amp; Hackathons</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00d07d] transition-colors flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>About Turjo</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00d07d] transition-colors flex items-center gap-2">
                  <Headphones className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Contact &amp; Inquiries</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-6 border-t border-emerald-500/15 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="font-mono text-emerald-100/40 text-[11px]">
            © {new Date().getFullYear()} Tanmoy Chowdhury Turjo. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-emerald-200/60">
            <a href="#about" className="hover:text-emerald-300 transition-colors">
              System Policy
            </a>
            <span>•</span>
            <a href="mailto:turjo5892@gmail.com" className="hover:text-emerald-300 transition-colors">
              Help Desk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

