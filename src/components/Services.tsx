import React, { useState } from 'react';
import { Cloud, Code2, Smartphone, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const services = [
    {
      id: 'cloud',
      category: 'infrastructure',
      number: '01',
      title: 'Cloud & DevOps Architecture',
      tagline: 'Resilient multi-cloud deployments and automated CI/CD pipelines',
      description: 'We architect and migrate mission-critical systems onto AWS, GCP, and Azure with automated container orchestration, microservices, and Infrastructure as Code.',
      deliverables: ['Terraform / IaC setup', 'Kubernetes & Docker pipelines', 'Cost optimization & auto-scaling', 'High-availability failover configs'],
      icon: Cloud,
      outcome: 'Reduced deployment latency by 72% across customer production environments.'
    },
    {
      id: 'enterprise',
      category: 'software',
      number: '02',
      title: 'Custom Enterprise Software',
      tagline: 'Bespoke web applications, CRM, ERP, and internal operating tools',
      description: 'Turn legacy friction into competitive speed. We engineer custom enterprise platforms engineered with TypeScript, Go, Python, and modern relational database architectures.',
      deliverables: ['Custom workflows & automation', 'RESTful & GraphQL API design', 'Role-based access & SSO integration', 'Real-time sync architectures'],
      icon: Code2,
      outcome: 'Eliminated redundant operational manual entries by 85% for enterprise partners.'
    },
    {
      id: 'mobile-web',
      category: 'frontend',
      number: '03',
      title: 'Modern Web & Mobile Systems',
      tagline: 'Ultra-responsive progressive web applications & cross-platform apps',
      description: 'Deliver instantaneous user experiences. From high-conversion SaaS web portals to fluid iOS/Android mobile applications built with React Native and modern frontends.',
      deliverables: ['Cross-platform mobile apps', 'Pixel-perfect responsive web', 'Offline-first PWA architecture', 'Accessibility & SEO compliance'],
      icon: Smartphone,
      outcome: 'Achieved sub-100ms interaction latency and 98+ Google Lighthouse scores.'
    },
    {
      id: 'security',
      category: 'security',
      number: '04',
      title: 'Cybersecurity & Data Governance',
      tagline: 'Zero-trust perimeter security, SOC2 preparation, and code audits',
      description: 'Harden your technical estate before going to market. We conduct penetration testing, vulnerability scanning, data encryption standards, and compliance hardening.',
      deliverables: ['Automated security scanning', 'OWASP Top 10 remediation', 'GDPR/HIPAA compliance controls', 'End-to-end data encryption'],
      icon: ShieldCheck,
      outcome: 'Zero critical vulnerabilities discovered in 3rd-party independent audits.'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-3">
            <span>Core Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Technical Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Engineering Capabilities Engineered for Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From initial system architecture to production scaling, Manzoor's Tech Solutions provides end-to-end technical execution with transparent milestones and dedicated delivery teams.
          </p>
        </div>

        {/* Bento grid of service offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card top row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-slate-400 font-mono tracking-wider">
                      {svc.number}
                    </span>
                  </div>

                  {/* Title and tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-display">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-700 mb-4 uppercase tracking-wider">
                    {svc.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="pt-4 border-t border-slate-100 mb-6 space-y-2.5">
                    <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    {svc.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card bottom: Outcome & CTA */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                  <div className="text-xs text-slate-500 italic max-w-xs">
                    <span className="font-semibold text-slate-700 not-italic">Outcome: </span>
                    {svc.outcome}
                  </div>
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="px-4 py-2 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-700 hover:text-white rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    <span>Consult on this</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
