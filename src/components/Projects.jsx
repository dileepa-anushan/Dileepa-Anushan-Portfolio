import React, { useState } from 'react';
import { Github, ExternalLink, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState(null);

  // SVG Banner preview patterns for project cards
  const renderProjectBanner = (id, name, category) => {
    const banners = {
      sitenex: (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-xs z-10 w-full max-w-xs shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> SiteNex Core
              </span>
              <span className="text-[10px] text-slate-500">Task Module</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300">
              <p>Task: <span className="text-emerald-300">Site Inspection & Progress</span></p>
              <p>Status: <span className="text-cyan-400">In Progress (75%)</span></p>
              <p>AI Delay Risk: <span className="text-emerald-400">Low Risk (0.15)</span></p>
            </div>
          </div>
        </div>
      ),
      'lanka-blood-link': (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-500/30 text-rose-400 font-mono text-xs z-10 w-full max-w-xs shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span> Lanka Blood Link
              </span>
              <span className="text-[10px] text-emerald-400">Live Demo</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300">
              <p>Urgent Blood Requests: <span className="text-rose-300">Active</span></p>
              <p>Donor Search: <span className="text-emerald-400">Real-Time</span></p>
            </div>
          </div>
        </div>
      ),
      drivelk: (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs z-10 w-full max-w-xs shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span> DriveLK Finance
              </span>
              <span className="text-[10px] text-slate-500">Payments</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300">
              <p>Bank Slip Verification: <span className="text-emerald-400">Approved</span></p>
              <p>Invoice PDF: <span className="text-cyan-300">Generated</span></p>
            </div>
          </div>
        </div>
      ),
      'food-delivery': (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="p-4 rounded-xl bg-slate-950/80 border border-indigo-500/30 text-indigo-400 font-mono text-xs z-10 w-full max-w-xs shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Food Delivery
              </span>
              <span className="text-[10px] text-slate-500">React Native</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300">
              <p>Stripe Gateway: <span className="text-indigo-300">Integrated</span></p>
              <p>AWS Elastic Beanstalk: <span className="text-emerald-400">Active</span></p>
            </div>
          </div>
        </div>
      ),
      'grocery-management': (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-emerald-950/30 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-xs z-10 w-full max-w-xs shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Grocery Store
              </span>
              <span className="text-[10px] text-slate-500">Tomcat</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300">
              <p>Catalog Management: <span className="text-emerald-300">Active</span></p>
              <p>Servlets & JSP: <span className="text-cyan-300">Deployed</span></p>
            </div>
          </div>
        </div>
      ),
      'lk-auto-service': (
        <div className="w-full h-44 bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 text-amber-400 font-mono text-xs z-10 w-full max-w-xs shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span> LK Auto Service
              </span>
              <span className="text-[10px] text-slate-500">C# .NET</span>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300">
              <p>POS Billing & Invoicing: <span className="text-amber-300">RBAC Secured</span></p>
              <p>GRN & Inventory: <span className="text-emerald-400">Integrated</span></p>
            </div>
          </div>
        </div>
      )
    };

    return banners[id] || (
      <div className="w-full h-44 bg-slate-900 flex items-center justify-center">
        <Code2 className="w-10 h-10 text-emerald-400" />
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>// FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Featured Projects
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm max-w-xl">
            A selection of software engineering projects, emphasizing core modules, backend implementations, and full-stack solutions.
          </p>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-3"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden hover:border-emerald-500/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              {/* Banner / Visual */}
              <div className="relative overflow-hidden border-b border-slate-800">
                {renderProjectBanner(project.id, project.name, project.category)}
                
                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-emerald-400 font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* My Contribution Highlight Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 mb-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      My Contribution:
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {project.contribution}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800/80 text-[11px] font-mono text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {/* GitHub Link */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-100 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {/* Live Demo Link */}
                    {project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors flex items-center gap-1 text-xs font-mono"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="hidden sm:inline">Live Demo</span>
                      </a>
                    ) : null}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-1 px-2.5 rounded-lg hover:bg-emerald-500/10"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
