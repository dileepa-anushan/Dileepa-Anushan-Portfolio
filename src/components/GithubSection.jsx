import React from 'react';
import { Github, Code, GitCommit, GitPullRequest, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const GithubSection = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                <Github className="w-3.5 h-3.5" />
                <span>OPEN SOURCE & CODE ACTIVITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                Building. Learning. Improving.
              </h2>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-base leading-relaxed">
                I believe in writing clean code, continuously refining application architecture, and maintaining consistent version control practices across all my academic and personal software engineering projects.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <GitCommit className="w-4 h-4 text-emerald-400" /> Version Control via Git
                </span>
                <span className="flex items-center gap-1.5">
                  <GitPullRequest className="w-4 h-4 text-cyan-400" /> Collaborative Workflows
                </span>
                <span className="flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-indigo-400" /> Structured Codebases
                </span>
              </div>
            </div>

            {/* GitHub Profile Button */}
            <div className="shrink-0">
              <a
                href={personal.github !== "[YOUR_GITHUB_URL]" ? personal.github : "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-emerald-500/50 shadow-xl hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Github className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-mono text-slate-400">Explore Repositories</span>
                  <span className="text-sm font-bold text-slate-100 flex items-center gap-1">
                    Visit GitHub Profile <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
