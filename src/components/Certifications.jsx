import React from 'react';
import { Cloud, Sparkles, BookOpen, ExternalLink, ShieldAlert } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>// SKILL EXPANSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Continuous Learning
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm max-w-xl">
            Self-directed learning tracks, online course modules, and technical exploration.
          </p>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-3"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 font-mono text-[11px] text-amber-400">
                    {item.status}
                  </span>
                </div>

                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Topics Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-xs text-slate-400 font-mono flex items-center justify-between">
                <span>Provider: {item.provider}</span>
                <span className="text-slate-500 italic">Self-Paced Track</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
