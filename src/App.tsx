/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WorkPortfolio } from './components/WorkPortfolio';
import { Pricing } from './components/Pricing';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [selectedServiceOrPlan, setSelectedServiceOrPlan] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (context?: string) => {
    if (context) {
      setSelectedServiceOrPlan(context);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-body selection:bg-purple-100 selection:text-purple-900">
      {/* Responsive Top Bar Navigation */}
      <Navbar onNavigateToContact={() => scrollToContact()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScheduleCall={() => scrollToContact('Technical Architecture Audit')}
          onExploreServices={scrollToServices}
        />

        {/* Services / Core Capabilities Bento Grid */}
        <Services onSelectService={(serviceName) => scrollToContact(serviceName)} />

        {/* Work / Featured Portfolio with Interactive Filter & Modal */}
        <WorkPortfolio onStartProject={(projectName) => scrollToContact(projectName ? `Case Study Inbound: ${projectName}` : undefined)} />

        {/* Pricing Tables with Monthly/Annual toggle */}
        <Pricing onSelectPlan={(planName) => scrollToContact(planName)} />

        {/* About Section & Engineering Philosophy */}
        <AboutSection onLearnMore={() => scrollToContact('Architecture Strategy Call')} />

        {/* Testimonials & Enterprise Endorsements */}
        <Testimonials />

        {/* Interactive Contact Form with Real-Time Email Validation */}
        <ContactSection initialServiceOrPlan={selectedServiceOrPlan} />
      </main>

      {/* Corporate Footer with Social Links */}
      <Footer />

      {/* Floating Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-white hover:bg-purple-700 transition-all duration-200 shadow-lg shadow-slate-900/20 backdrop-blur-sm border border-slate-700/50 hover:scale-105 active:scale-95"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
