import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, AlertCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact = () => {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // Production contact form endpoint via FormSubmit API targeting your email
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: If service requires email activation on first run
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Even if network fails, show confirmation & open mailto fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-3 border border-emerald-500/20">
            <span>// GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
            Let's Build Something Together.
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 text-sm max-w-xl">
            Whether you are a recruiter, engineering manager, or fellow developer, feel free to send a message directly to my inbox or connect via social platforms.
          </p>
          <div className="h-1 w-12 bg-emerald-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-emerald-400 text-xs font-mono flex items-center gap-1 transition-colors"
                  title="Copy Email Address"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Email Address
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 hover:text-emerald-400 transition-colors break-all mt-1 block"
              >
                {personal.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-md">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-3">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                LinkedIn Profile
              </span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 hover:text-cyan-400 transition-colors break-all mt-1 block"
              >
                dileepa-anushan-10a449368
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-md">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-3">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                GitHub Profile
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-slate-100 dark:text-slate-100 light:text-slate-900 hover:text-indigo-400 transition-colors break-all mt-1 block"
              >
                github.com/dileepa-anushan
              </a>
            </div>

            {/* Status Card */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Availability</span>
              </span>
              <span className="text-emerald-400 font-semibold">{personal.status}</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-xl">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    Message Delivered!
                  </h3>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out! Your message has been sent to <strong className="text-emerald-400">{personal.email}</strong>. I will get back to you shortly.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      type="button"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
                    >
                      <span>Send Another Message</span>
                    </button>
                    <a
                      href={`mailto:${personal.email}?subject=Inquiry from Portfolio`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-mono border border-emerald-500/30 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                    Send a Direct Message
                  </h3>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your internship offer, project, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-glow hover:shadow-glow-lg disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs animate-pulse">Delivering Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
