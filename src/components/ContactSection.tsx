import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, RefreshCw, Calendar } from 'lucide-react';

interface ContactSectionProps {
  initialServiceOrPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceOrPlan }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceOrPlan: initialServiceOrPlan || 'Custom Enterprise Software',
    budget: '$15,000 - $50,000',
    message: ''
  });

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Update selected service if passed from pricing/service click
  useEffect(() => {
    if (initialServiceOrPlan) {
      setFormData(prev => ({ ...prev, serviceOrPlan: initialServiceOrPlan }));
    }
  }, [initialServiceOrPlan]);

  // Email format validation regex
  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).trim());
  };

  // Run validation on form fields
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Work email address is required';
        if (!validateEmail(value)) return 'Please enter a valid email format (e.g. name@company.com)';
        return '';
      case 'message':
        if (!value.trim()) return 'Project details or inquiry message is required';
        if (value.trim().length < 10) return 'Please provide at least 10 characters describing your project';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: { [key: string]: string } = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setTouched({
      fullName: true,
      email: true,
      message: true
    });

    setErrors(newErrors);

    // If any error exists, prevent submit
    if (Object.values(newErrors).some(err => err.length > 0)) {
      return;
    }

    // Simulate submission latency
    setIsSubmitting(true);
    setTimeout(() => {
      const randomTicket = `MTS-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
      setTicketId(randomTicket);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      serviceOrPlan: 'Custom Enterprise Software',
      budget: '$15,000 - $50,000',
      message: ''
    });
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
  };

  const serviceOptions = [
    'Cloud & DevOps Architecture',
    'Custom Enterprise Software',
    'Modern Web & Mobile Systems',
    'Cybersecurity & Data Governance',
    'Startup Accelerator (Plan)',
    'Growth Enterprise (Plan)',
    'Custom Scale Pod (Plan)',
    'Technical Architecture Audit'
  ];

  const isEmailValid = touched.email && !errors.email && formData.email.length > 0;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 mb-3">
            <span>Direct Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Fast Response Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            Let’s Build Something Exceptional Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Fill out the consultation form below or contact our engineering desk directly. We analyze every inquiry and respond with an architectural review within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Form with Email Validation */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry has been routed to our Lead Solutions Architect.
                  </p>
                </div>

                {/* Ticket Receipt Box */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Ticket Reference:</span>
                    <span className="font-mono font-bold text-purple-700">{ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Subject:</span>
                    <span className="font-semibold text-slate-800">{formData.serviceOrPlan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Confirmation Sent To:</span>
                    <span className="font-mono text-slate-800">{formData.email}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-200/80">
                    <span className="text-slate-500">Guaranteed SLA:</span>
                    <span className="font-semibold text-slate-900">Within 4 business hours</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-purple-900 py-2.5 px-5 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="e.g. Alex Henderson"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                        touched.fullName && errors.fullName
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-300 focus:border-purple-600 focus:ring-1 focus:ring-purple-600'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Work Email with Live Validation */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      {isEmailValid && (
                        <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Valid format
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors pr-9 ${
                          touched.email && errors.email
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : isEmailValid
                            ? 'border-emerald-500 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                            : 'border-slate-300 focus:border-purple-600 focus:ring-1 focus:ring-purple-600'
                        }`}
                      />
                      {isEmailValid && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {touched.email && errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Tech Labs"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                    />
                  </div>

                  {/* Service / Plan of Interest */}
                  <div>
                    <label htmlFor="serviceOrPlan" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service or Package
                    </label>
                    <select
                      id="serviceOrPlan"
                      name="serviceOrPlan"
                      value={formData.serviceOrPlan}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Estimated Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors"
                  >
                    <option value="$5,000 - $15,000">$5,000 - $15,000 (MVP / Audit Sprint)</option>
                    <option value="$15,000 - $50,000">$15,000 - $50,000 (Standard System Build)</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000 (Enterprise Infrastructure)</option>
                    <option value="$100,000+">$100,000+ (Multi-Quarter Retainer)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Scope & Objectives <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Briefly describe your technical objectives, timeline constraints, current tech stack, or problem statement..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                      touched.message && errors.message
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-300 focus:border-purple-600 focus:ring-1 focus:ring-purple-600'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-purple-700 hover:bg-purple-800 active:scale-[0.99] transition-all duration-150 shadow-md shadow-purple-700/20 flex items-center justify-center gap-2 disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2.5">
                    Protected by NDA. We never share your data with 3rd parties.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct Cards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Headquarters & Direct Inquiries
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Engineering Office</div>
                    <div className="mt-0.5 text-slate-500 leading-relaxed">
                      Manzoor's Tech Solutions HQ<br />
                      Hazara Town, Brewery Road<br />
                      Quetta, Pakistan
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Direct Inquiries</div>
                    <a
                      href="mailto:hello121786@gmail.com"
                      className="mt-0.5 text-purple-700 hover:underline font-medium block font-mono"
                    >
                      hello121786@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Contact Number</div>
                    <a
                      href="tel:03478076485"
                      className="mt-0.5 text-slate-700 hover:text-purple-700 font-mono block font-semibold"
                    >
                      03478076485
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Working Hours</div>
                    <div className="mt-0.5 text-slate-500 leading-relaxed">
                      Monday - Friday 09:00 Am to 10:00 PM Pakistan Time<br />
                      <span className="text-purple-700 font-medium">(24/7 dedicated engineering)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Booking Card */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-950 rounded-2xl p-6 text-white shadow-lg border border-purple-800/50">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                <Calendar className="w-4 h-4" />
                <span>Prefer a live conversation?</span>
              </div>
              <h4 className="text-base font-bold font-display mb-2">
                Book a 15-Minute Architecture Review
              </h4>
              <p className="text-xs text-purple-200 leading-relaxed mb-4">
                Speak directly with an engineering lead to evaluate technical feasibility, estimate sprints, and discuss your roadmap.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    message: prev.message || 'I would like to schedule a 15-minute introductory architecture call.'
                  }));
                  window.scrollTo({ top: document.getElementById('contact')?.offsetTop ?? 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-purple-950 bg-white hover:bg-purple-50 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Select for Architecture Call</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
