import React, { useState } from 'react';
import { Check, ArrowRight, HelpCircle, Shield, Zap } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: 'startup',
      name: 'Startup Accelerator',
      tagline: 'Rapid MVP delivery and modern cloud setup for early-stage teams.',
      monthlyPrice: 1490,
      annualPrice: 1190,
      idealFor: 'Startups & seed-funded companies launching new digital products.',
      deliveryTime: '2-week sprint cadence',
      supportLevel: 'Dedicated Slack channel & business-day support',
      features: [
        '1 Dedicated Full-Stack Senior Engineer',
        'Modern React / TypeScript & Node.js Stack',
        'Standard AWS or GCP Cloud Infrastructure',
        'Automated CI/CD Deployment Pipeline',
        'Weekly Sprint Reviews & Milestone Demos',
        'Standard Code Documentation & Handover',
        '99.5% Uptime SLA Guarantee'
      ]
    },
    {
      id: 'growth',
      name: 'Growth Enterprise',
      tagline: 'Full engineering pod for scaling architectures and high traffic.',
      monthlyPrice: 3890,
      annualPrice: 3110,
      popular: true,
      idealFor: 'Growing companies scaling operations and enterprise workflows.',
      deliveryTime: 'Continuous weekly releases',
      supportLevel: '24/7 priority support with 1-hour emergency SLA',
      features: [
        'Dedicated 3-Person Engineering Squad (Lead, Dev, QA)',
        'Microservices & High-Throughput Relational DB Tuning',
        'Multi-Cloud Kubernetes / Container Orchestration',
        'SOC2 & HIPAA Compliance Readiness Hardening',
        'Real-Time Telemetry & APM Error Monitoring',
        'Bi-weekly Strategic Architecture Consultations',
        '99.9% Uptime SLA with 1-Hour Urgent Response',
        'Automated Penetration & Vulnerability Tests'
      ]
    },
    {
      id: 'enterprise',
      name: 'Custom Scale Pod',
      tagline: 'Mission-critical distributed systems and dedicated architecture leadership.',
      monthlyPrice: 7990,
      annualPrice: 6390,
      idealFor: 'Large organizations requiring enterprise compliance and custom pods.',
      deliveryTime: 'Continuous dedicated throughput',
      supportLevel: 'Dedicated Solutions Architect & 15-minute SLA',
      features: [
        'Dedicated Full Engineering Pod + Principal Architect',
        'Multi-Region Active-Active Distributed Architecture',
        'Custom Data Governance & Air-Gapped Deployments',
        'Legacy Modernization & Zero-Downtime Migration',
        'Dedicated Security Officer & Quarterly Audits',
        'Monthly Executive Roadmap & Technology Advisory',
        '99.99% Enterprise SLA with 15-Min Response',
        'Custom IP Assignment & Tailored Escrow'
      ]
    }
  ];

  const comparisonFeatures = [
    { name: 'Dedicated Engineers', startup: '1 Senior Dev', growth: '3-Person Squad', enterprise: 'Full Pod + Architect' },
    { name: 'Deployment Cadence', startup: 'Bi-Weekly', growth: 'Continuous / Weekly', enterprise: 'Continuous' },
    { name: 'Cloud Provider Support', startup: 'AWS / GCP / Vercel', growth: 'Multi-Cloud / K8s', enterprise: 'Hybrid / Private / Gov' },
    { name: 'Security Scans & SOC2', startup: 'Basic OWASP', growth: 'Automated CI/CD', enterprise: 'Full Audit & ISO' },
    { name: 'Emergency SLA Response', startup: '4 Hours', growth: '1 Hour', enterprise: '15 Minutes' },
    { name: 'Guaranteed System Uptime', startup: '99.5%', growth: '99.9%', enterprise: '99.99%' },
    { name: 'Dedicated Project Manager', startup: 'Included', growth: 'Dedicated Lead', enterprise: 'Executive Architect' }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-3">
            <span>Predictable Engagements</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Flexible Engineering Packages Tailored to Your Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose a dedicated engineering engagement with guaranteed throughput, senior engineers, and complete transparency. No hidden fees or bloated retainers.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-slate-200/80 rounded-xl">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                !isAnnual
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${isAnnual ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'border-2 border-purple-600 shadow-xl shadow-purple-900/10 ring-1 ring-purple-600/20 lg:-translate-y-2'
                    : 'border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-700 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display tabular-nums">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-sm font-medium text-slate-500">
                        / month
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {isAnnual ? 'Billed annually ($' + (price * 12).toLocaleString() + '/yr)' : 'Billed monthly, cancel anytime'}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span><strong>Cadence:</strong> {plan.deliveryTime}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span><strong>Support:</strong> {plan.supportLevel}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Included in Plan
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectPlan(`${plan.name} (${isAnnual ? 'Annual' : 'Monthly'})`)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-purple-700 text-white hover:bg-purple-800 shadow-sm shadow-purple-700/25 active:scale-[0.98]'
                        : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.98]'
                    }`}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Pre-fills in contact form below
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix Toggle */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => setShowMatrix(!showMatrix)}
            className="text-xs font-semibold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1.5 py-2 px-4 rounded-lg bg-white border border-purple-200 hover:border-purple-300 transition-colors"
          >
            <span>{showMatrix ? 'Hide Full Feature Comparison Matrix' : 'View Full Feature Comparison Matrix'}</span>
          </button>
        </div>

        {/* Comparison Matrix Table */}
        {showMatrix && (
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm animate-in fade-in duration-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Specification</th>
                    <th className="py-4 px-6">Startup Accelerator</th>
                    <th className="py-4 px-6 bg-purple-50 text-purple-900">Growth Enterprise</th>
                    <th className="py-4 px-6">Custom Scale Pod</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3.5 px-6 font-semibold text-slate-900">{row.name}</td>
                      <td className="py-3.5 px-6 text-slate-600">{row.startup}</td>
                      <td className="py-3.5 px-6 bg-purple-50/40 text-purple-900 font-medium">{row.growth}</td>
                      <td className="py-3.5 px-6 text-slate-600">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Money-back / SLA guarantee note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Need a custom scope or specific statement of work (SOW)? All engagements include non-disclosure agreements (NDA), standard IP assignment, and flexible sprint milestone adjustments.
        </div>

      </div>
    </section>
  );
};
