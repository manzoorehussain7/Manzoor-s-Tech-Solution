import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: "Manzoor's Tech Solutions re-architected our legacy financial processing pipeline into a Kubernetes microservice cluster in 6 weeks. Our peak transaction throughput tripled with zero downtime during migration.",
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Apex Capital Group',
      rating: 5,
      metric: '+280% Peak Processing Throughput'
    },
    {
      id: '2',
      quote: "The dedicated engineering pod functioned like a natural extension of our in-house team. Their commitment to clean TypeScript architecture and automated testing saved us months of rework.",
      author: 'Elena Rostova',
      role: 'VP of Product Engineering',
      company: 'Aura Systems',
      rating: 5,
      metric: 'Shipped MVP 3 Weeks Ahead of Schedule'
    },
    {
      id: '3',
      quote: "Finding an engineering partner that genuinely understands SOC2 compliance and zero-trust cloud infrastructure is rare. Manzoor's team delivered every milestone with unmatched precision.",
      author: 'David Chen',
      role: 'Founder & CEO',
      company: 'Pulse Health Technologies',
      rating: 5,
      metric: '100% Audit Readiness on First Pass'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle purple radial background glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.18),_transparent_60%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            <span>Client Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Trusted by Engineering Leaders & Founders
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Read direct feedback from executives who rely on Manzoor's Tech Solutions for mission-critical software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-7 border border-slate-700/80 flex flex-col justify-between hover:border-purple-500/50 transition-colors"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Outcome metric highlight */}
                <div className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-3">
                  {t.metric}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} · <span className="text-purple-300">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
