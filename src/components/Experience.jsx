import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>// CAREER & INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Work Experience
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm max-w-xl">
            Practical engineering experience gained through professional software internships.
          </p>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-3"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-12 ml-2 sm:ml-4">
          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-glow">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-lg">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
                      <span>{item.position}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                        {item.type}
                      </span>
                    </h3>

                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Building2 className="w-4 h-4" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    Key Responsibilities & Contributions:
                  </h4>
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
