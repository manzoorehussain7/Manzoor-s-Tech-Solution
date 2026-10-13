import React, { useState } from 'react';
import { Github, Linkedin, Twitter, MessageSquare, Youtube, ArrowRight, Check, Send } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(newsletterEmail.trim())) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Discord', icon: MessageSquare, href: 'https://discord.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Selected Works', href: '#work' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'About Agency', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const servicesList = [
    'Cloud Architecture & DevOps',
    'Custom Enterprise Software',
    'React & Next.js Platforms',
    'Kubernetes Container Scaling',
    'Cybersecurity & SOC2 Audit',
    'API Engineering & Integration'
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Synopsis */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="inline-block focus:outline-none">
              <Logo isLight />
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Manzoor's Tech Solutions delivers high-throughput software systems, cloud infrastructure engineering, and digital transformation for scaling enterprises worldwide.
            </p>

            {/* Direct Office & Contact Info */}
            <div className="text-xs text-slate-400 space-y-1.5 pt-1 border-t border-slate-900">
              <p className="text-slate-300">
                <span className="text-slate-500">HQ:</span> Hazara Town, Brewery Road, Quetta, Pakistan
              </p>
              <p>
                <span className="text-slate-500">Email:</span>{' '}
                <a href="mailto:hello121786@gmail.com" className="text-purple-400 hover:underline">
                  hello121786@gmail.com
                </a>
              </p>
              <p>
                <span className="text-slate-500">Phone:</span>{' '}
                <a href="tel:03478076485" className="text-slate-300 hover:text-purple-400 font-mono">
                  03478076485
                </a>
              </p>
            </div>
            
            {/* Social Media Links with Interactive Hover */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-purple-500 hover:bg-purple-950 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                      aria-label={`Visit our ${s.name} profile`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-purple-400 transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions
            </div>
            <ul className="space-y-2.5 text-xs">
              {servicesList.map((svc, idx) => (
                <li key={idx} className="hover:text-purple-400 transition-colors cursor-pointer py-0.5">
                  <a href="#services">{svc}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Engineering Insights
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quarterly teardowns on cloud cost optimization, architectural patterns, and engineering scalability.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('idle');
                  }}
                  placeholder="engineer@company.com"
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {newsletterStatus === 'success' && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Subscribed successfully to technical briefing.
                </p>
              )}
              {newsletterStatus === 'error' && (
                <p className="text-[11px] text-rose-400">
                  Please enter a valid work email address.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Manzoor's Tech Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </a>
            <span aria-hidden="true">·</span>
            <a href="#security" onClick={(e) => e.preventDefault()} className="hover:text-slate-400 transition-colors">
              Security Compliance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
