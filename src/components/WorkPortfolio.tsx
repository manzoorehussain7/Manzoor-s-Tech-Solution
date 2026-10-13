import React, { useState } from 'react';
import { ExternalLink, X, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface WorkPortfolioProps {
  onStartProject: (projectContext?: string) => void;
}

export const WorkPortfolio: React.FC<WorkPortfolioProps> = ({ onStartProject }) => {
  const [filter, setFilter] = useState<'all' | 'cloud' | 'enterprise' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'apex-cloud',
      title: 'Global Financial Cloud Infrastructure',
      category: 'cloud',
      categoryLabel: 'Cloud Architecture',
      description: 'Multi-region AWS Kubernetes deployment with zero-downtime failover and automated compliance audit reporting for a fintech unicorn handling $40M daily volume.',
      image: '/src/assets/images/project_cloud_arch_1791870959413.jpg',
      metric: '99.99%',
      metricLabel: 'Uptime Achieved Under Load',
      technologies: ['AWS EKS', 'Terraform', 'Kafka', 'PostgreSQL', 'Go'],
      client: 'Apex Capital Partners',
      year: '2025'
    },
    {
      id: 'aura-analytics',
      title: 'Aura Enterprise Analytics Portal',
      category: 'enterprise',
      categoryLabel: 'Enterprise Platform',
      description: 'High-performance interactive business intelligence dashboard replacing four fragmented legacy tools with unified real-time analytics and predictive modeling.',
      image: '/src/assets/images/project_digital_app_1791870959906.jpg',
      metric: '-64%',
      metricLabel: 'Data Processing Latency',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'ClickHouse'],
      client: 'Aura Systems International',
      year: '2025'
    },
    {
      id: 'pulse-health',
      title: 'Synchronized Telehealth & Clinical Portal',
      category: 'mobile',
      categoryLabel: 'Mobile & Web',
      description: 'HIPAA-compliant cross-platform mobile suite enabling 18,000+ clinicians and patients to conduct encrypted video consults and sync real-time biometric telemetry.',
      image: '/src/assets/images/hero_tech_solutions_1791870959407.jpg',
      metric: '180,000+',
      metricLabel: 'Active Patient Encounters',
      technologies: ['React Native', 'WebRTC', 'FastAPI', 'Redis', 'Docker'],
      client: 'Pulse Medical Network',
      year: '2026'
    },
    {
      id: 'streamline-ops',
      title: 'Automated Supply Logistics Pipeline',
      category: 'cloud',
      categoryLabel: 'Cloud & Automation',
      description: 'Event-driven distributed messaging architecture orchestrating warehouse fulfillment and real-time inventory tracking across 14 distribution centers.',
      image: '/src/assets/images/project_cloud_arch_1791870959413.jpg',
      metric: '4.2x',
      metricLabel: 'Fulfillment Throughput Gain',
      technologies: ['Google Cloud Platform', 'Cloud Run', 'Python', 'BigQuery'],
      client: 'OmniLogistics Global',
      year: '2025'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
              <span>Featured Case Studies</span>
              <span aria-hidden="true">·</span>
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
              Recent Works & Engineering Milestones
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Explore how Manzoor's Tech Solutions helps enterprises solve complex engineering challenges with modern architecture.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter('cloud')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'cloud'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Cloud & DevOps
            </button>
            <button
              onClick={() => setFilter('enterprise')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'enterprise'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Enterprise Platforms
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'mobile'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Mobile & Web
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to gradient container
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Unboxed category & client metadata overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2 font-medium bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-md">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="bg-purple-700/90 backdrop-blur-md px-3 py-1 rounded-md font-semibold">
                    {project.client}
                  </div>
                </div>

                {/* Prominent Impact Metric on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-2xl sm:text-3xl font-extrabold tabular-nums font-display">
                    {project.metric}
                  </div>
                  <div className="text-xs text-purple-200 font-medium">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Unboxed technology metadata list */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 font-mono">
                    <span className="font-semibold text-slate-700 font-sans">Stack:</span>
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={idx}>
                        <span>{tech}</span>
                        {idx < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-purple-700 flex items-center gap-1 group-hover:underline">
                    View Case Study Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs text-slate-400">Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Detail */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
              <span>{selectedProject.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedProject.client}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedProject.year}</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-4">
              {selectedProject.title}
            </h3>

            <div className="rounded-xl overflow-hidden mb-6 aspect-video bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-100 mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-700">Quantified Business Result</div>
                <div className="text-2xl font-extrabold text-slate-900 tabular-nums font-display">{selectedProject.metric}</div>
              </div>
              <div className="text-xs text-slate-600 text-right max-w-xs font-medium">
                {selectedProject.metricLabel}
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-6">
              <p>{selectedProject.description}</p>
              <p>
                Manzoor's Tech Solutions architected this system from ground-up using test-driven development, continuous integration pipelines, and automated performance regressions to deliver enterprise-grade stability.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4 mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2">
                Technologies & Frameworks
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                {selectedProject.technologies.map((t, idx) => (
                  <span key={idx} className="bg-slate-100 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const projName = selectedProject.title;
                  setSelectedProject(null);
                  onStartProject(projName);
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
