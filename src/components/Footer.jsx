import React from 'react';
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Footer = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
          
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg tracking-tight">
                {personal.shortName}
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
              {personal.role}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Scroll Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github !== "[YOUR_GITHUB_URL]" ? personal.github : "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin !== "[YOUR_LINKEDIN_URL]" ? personal.linkedin : "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personal.email !== "[YOUR_EMAIL]" ? `mailto:${personal.email}` : "#contact"}
              className="p-2 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors ml-2"
              title="Scroll to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-slate-400 font-mono">
          <p>© 2026 Dileepa Anushan. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
