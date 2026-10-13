import React, { useState } from 'react';
import { CheckCircle2, Award, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const [imgError, setImgError] = useState(false);

  const pillars = [
    {
      title: 'Architectural Rigor',
      description: 'We do not build fragile prototypes. Every system is structured for modularity, clean boundaries, and zero-downtime scalability.'
    },
    {
      title: 'Senior-Only Engineering Pods',
      description: 'Your project is built directly by seasoned engineers who have navigated enterprise scale, not junior apprentices.'
    },
    {
      title: 'Transparent Milestone Delivery',
      description: 'Real-time repository access, automated staging environments, and weekly asynchronous sprint summaries.'
    },
    {
      title: 'Long-Term Operational Stewardship',
      description: 'From launch day through exponential traffic surges, we maintain active observability, backups, and SLAs.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Team image asset with frame */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] bg-slate-100">
              {!imgError ? (
                <img
                  src="/src/assets/images/team_consultation_1791870961114.jpg"
                  alt="Strategy & engineering session at Manzoor's Tech Solutions"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-white text-center">
                  <Users className="w-10 h-10 text-purple-400 mb-3" />
                  <h4 className="font-bold text-lg font-display">Technical Strategy Pod</h4>
                  <p className="text-xs text-slate-400 mt-2">Executive leadership & system architects</p>
                </div>
              )}

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Founder quote strip inside frame */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white">
                <p className="text-xs italic text-slate-300">
                  "Our mission is to eliminate enterprise technical debt and engineer resilient digital systems that scale without compromise."
                </p>
                <div className="mt-2 text-xs font-semibold text-purple-300">
                  Manzoor & Team — Lead Solutions Architect
                </div>
              </div>
            </div>

            {/* Adjacent mini stat card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-xl bg-purple-700 text-white shadow-xl max-w-xs border border-purple-500">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-purple-200 shrink-0" />
                <div>
                  <div className="text-base font-bold font-display tabular-nums">100% Retained</div>
                  <div className="text-[11px] text-purple-200">Client Contract Renewals in 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700">
              <span>About The Agency</span>
              <span aria-hidden="true">·</span>
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Built by Engineers Who Care About Technical Craftsmanship
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Founded with the conviction that software engineering should be transparent, high-velocity, and relentlessly reliable, <strong>Manzoor's Tech Solutions</strong> partners with organizations to architect modern cloud systems and bespoke applications.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-purple-900 hover:underline"
              >
                <span>Discuss how we can collaborate on your stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
