import React from 'react';
import { GraduationCap, Code2, Cpu, Briefcase, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const ICON_MAP = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Cpu: Cpu,
  Briefcase: Briefcase,
};

export const About = () => {
  const { personal, aboutCards } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>// PROFILE OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            About Me
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
            <p className="text-lg font-medium text-slate-200 dark:text-slate-200 light:text-slate-900">
              I am a Software Engineering undergraduate at <span className="text-emerald-400 font-semibold">SLIIT</span> and a Software Engineer Intern with a solid foundation in building web applications and software systems.
            </p>

            <p>
              My journey in software engineering combines formal academic training with hands-on project development. I specialize in designing and implementing full-stack solutions using modern frameworks such as Java, Spring Boot, React, and RESTful APIs, supported by structured SQL and NoSQL databases.
            </p>

            <p>
              Beyond core coding, I am deeply enthusiastic about system architecture, cloud platforms, automated workflows, and integrating AI capabilities into practical applications to solve complex operational challenges.
            </p>

            {/* Core Interest Pillars */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider mb-4 font-mono">
                Primary Fields of Interest
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Full-Stack Web Development",
                  "System Design & Architecture",
                  "Cloud Technologies (AWS)",
                  "DevOps & CI/CD Practices",
                  "AI-Powered Software Systems",
                  "Database Schema Design"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutCards.map((card, idx) => {
              const IconComponent = ICON_MAP[card.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-0.5">
                        {card.title}
                      </span>
                      <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {card.subtitle}
                      </h4>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
