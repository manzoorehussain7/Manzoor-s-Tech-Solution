import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroProps {
  onScheduleCall: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleCall, onExploreServices }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/60 via-white to-white">
      {/* Subtle purple radial background element */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.18),_transparent_70%)]" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Unboxed editorial kicker with subtle separator */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700">
              <span>Enterprise Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Cloud Infrastructure</span>
              <span aria-hidden="true">·</span>
              <span>Digital Strategy</span>
            </div>

            {/* Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] [text-wrap:balance]">
              Develop Your Digital Enterprise With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600">
                Precision & Speed
              </span>
            </h1>

            {/* Clear value statement */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Manzoor's Tech Solutions delivers high-performance custom software, resilient cloud architectures, and scalable digital platforms built to accelerate growth and modernize core operations.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScheduleCall}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-purple-700 rounded-lg hover:bg-purple-800 active:scale-[0.98] transition-all shadow-md shadow-purple-700/20 flex items-center justify-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-purple-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Unboxed trust signals */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Zero vendor lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Enterprise SOC2 & ISO standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Dedicated full-stack squads</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/10 border border-purple-100 bg-slate-900 aspect-[16/10] lg:aspect-auto lg:h-[420px]">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_tech_solutions_1791870959407.jpg"
                  alt="Modern tech engineering studio at Manzoor's Tech Solutions"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center mb-4 text-purple-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display">Manzoor's Tech Solutions</h3>
                  <p className="text-sm text-purple-200 mt-2 max-w-xs">
                    Engineering next-generation digital platforms and scalable cloud architecture.
                  </p>
                </div>
              )}

              {/* Contrast scrim & live operational badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Embedded floating metrics card inside frame */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-700">Production Reliability</div>
                  <div className="text-xl font-extrabold text-slate-900 tabular-nums font-display">99.8% On-Time SLA</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-700">Delivered Platforms</div>
                  <div className="text-xl font-extrabold text-slate-900 tabular-nums font-display">150+ Shipped</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width KPI quantitative strip below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums font-display">150+</div>
            <div className="text-xs text-slate-500 font-medium">Enterprise Systems Shipped</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums font-display">99.9%</div>
            <div className="text-xs text-slate-500 font-medium">Cloud Infrastructure Uptime</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums font-display">14 Days</div>
            <div className="text-xs text-slate-500 font-medium">Average MVP Sprint Cycle</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums font-display">24/7</div>
            <div className="text-xs text-slate-500 font-medium">Dedicated Engineering SLA</div>
          </div>
        </div>

      </div>
    </section>
  );
};
