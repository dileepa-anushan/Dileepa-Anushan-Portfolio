import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Education = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>// ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Education
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm max-w-xl">
            Formal university education in Software Engineering at SLIIT.
          </p>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-3"></div>
        </div>

        {/* Education Timeline / Cards */}
        <div className="space-y-6 max-w-4xl">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-md relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      Degree Program
                    </span>
                    <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {edu.degree}
                    </h3>
                    <h4 className="text-base font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mt-0.5">
                      {edu.institution}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start font-mono text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Core Modules Highlight */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 block">
                  Key Academic Subjects & Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Object-Oriented Programming (Java)",
                    "Data Structures & Algorithms",
                    "Database Management Systems (SQL)",
                    "Web Application Technologies",
                    "Software Architecture & Design",
                    "System Analysis & Specification",
                    "Operating Systems & Networking"
                  ].map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      {sub}
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
