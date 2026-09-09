import React, { useState } from 'react';
import { ArrowRight, Mail, Github, Download, Code2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero = () => {
  const { personal } = PORTFOLIO_DATA;
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Glowing background mesh spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200/80 border border-slate-800 dark:border-slate-800 light:border-slate-300 mb-6 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-medium">
                Software Engineer Intern & Undergraduate @ SLIIT
              </span>
            </div>

            {/* Main Title & Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4 leading-[1.15]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-emerald-300 to-emerald-500">{personal.shortName}</span>.
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-6 leading-snug">
              {personal.tagline}
            </h2>

            {/* Professional Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 mb-9 leading-relaxed max-w-2xl">
              {personal.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* View Projects Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download CV Secondary CTA */}
              <a
                href={personal.resumeUrl}
                download="Dileepa-Anushan-CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-slate-200 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium text-sm border border-slate-800 dark:border-slate-800 light:border-slate-300 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </a>

              {/* Get In Touch CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-medium border border-slate-800 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Get In Touch</span>
              </a>

              {/* GitHub Secondary Link */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-transparent hover:bg-slate-900/60 text-slate-400 hover:text-slate-100 text-sm font-medium border border-transparent hover:border-slate-800 transition-all duration-200"
                title="Visit GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Highlight Badges */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Full-Stack Web Dev
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Spring Boot & React.js
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                Node.js & MongoDB
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                AWS & System Design
              </span>
            </div>

          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              
              {/* Outer decorative ring glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Photo Frame Container */}
              <div className="relative rounded-3xl bg-slate-900 dark:bg-slate-900 light:bg-white border-2 border-slate-800 dark:border-slate-800 light:border-slate-200 overflow-hidden shadow-2xl p-3">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800/60">
                  {imageLoaded ? (
                    <img
                      src={personal.avatarUrl}
                      alt={personal.name}
                      onError={() => setImageLoaded(false)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Fallback Code Avatar if image file is not found */
                    <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-glow">
                        <Code2 className="w-10 h-10" />
                      </div>
                      <div className="font-mono text-xs text-slate-400">
                        <span className="text-emerald-400 font-bold block text-sm">Dileepa Anushan</span>
                        <span>Software Engineer</span>
                      </div>
                    </div>
                  )}

                  {/* Glassmorphism Overlay Pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Software Engineering</span>
                    </span>
                    <span className="text-emerald-400 font-bold">SLIIT</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
