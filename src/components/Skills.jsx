import React from 'react';
import { Layout, Server, Database, Cloud, Code, FileCode, Palette, Box, Layers, Coffee, Cpu, Globe, GitBranch, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const SKILL_ICONS = {
  Code: Code,
  FileCode: FileCode,
  Layout: Layout,
  Palette: Palette,
  Box: Box,
  Layers: Layers,
  Coffee: Coffee,
  Server: Server,
  Cpu: Cpu,
  Globe: Globe,
  Database: Database,
  Cloud: Cloud,
  GitBranch: GitBranch,
  Github: Github,
};

export const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  const categories = [
    {
      title: "Frontend Development",
      description: "Building responsive, modern, and interactive user interfaces.",
      items: skills.frontend,
      icon: Layout,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Backend Engineering",
      description: "Developing robust backend logic, services, and RESTful APIs.",
      items: skills.backend,
      icon: Server,
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Databases & Storage",
      description: "Designing relational & document database schemas.",
      items: skills.databases,
      icon: Database,
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "Cloud & DevOps Tools",
      description: "Version control, collaboration, and cloud ecosystem basics.",
      items: skills.cloudDevOps,
      icon: Cloud,
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>// TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm max-w-xl">
            Core technologies and tools I utilize in software engineering and web application development.
          </p>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-3"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border ${cat.badgeColor}`}>
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {cat.items.map((skill, sIdx) => {
                    const IconComp = SKILL_ICONS[skill.icon] || Code;
                    return (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200 text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 group"
                      >
                        <IconComp className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span>{skill.name}</span>
                        {skill.level === "Learning" && (
                          <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20 ml-1">
                            Learning
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
