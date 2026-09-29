'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current, formRef.current].filter(Boolean) as HTMLElement[];
    const observers = els.map((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.18}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.18}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    border: '1.5px solid #B8D9EC',
    background: '#F0F8FF',
    color: '#0C2340',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: '#F0F8FF' }}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-14">

          {/* Left */}
          <div ref={leftRef} className="flex flex-col gap-8">
            <div>
              <span className="eyebrow block mb-4" style={{ color: '#0096C7' }}>
                Start a conversation
              </span>
              <h2 className="text-section-h2 leading-tight" style={{ color: '#0C2340' }}>
                Your next industrial challenge<br className="hidden sm:block" /> can be engineered<br className="hidden sm:block" />
                <span style={{ color: '#0077B6' }}> in the Kingdom.</span>
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#2C5F7A', fontSize: '1.05rem' }}>
              Whether you have a defined project scope or are at the early feasibility stage, Triple Delta welcomes technical and commercial conversations.
            </p>

            {/* Contact Card */}
            <div
              ref={rightRef}
              className="rounded-xl p-8 flex flex-col gap-7"
              style={{
                border: '1px solid #B8D9EC',
                background: '#FFFFFF',
                boxShadow: '0 4px 24px rgba(0,119,182,0.08)',
              }}
            >
              {/* Head Office */}
              <div className="flex flex-col gap-2">
                <span className="eyebrow" style={{ color: '#0096C7' }}>
                  Head Office
                </span>
                <div className="flex flex-col gap-0.5 mt-2">
                  {[
                    'Nexus Tower',
                    '4748 King Abdul Aziz Road',
                    'Dhahran 34255',
                    'Kingdom of Saudi Arabia',
                  ].map((line) => (
                    <span key={line} className="text-sm font-medium" style={{ color: '#0C2340' }}>
                      {line}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px w-full" style={{ background: '#B8D9EC' }} />

              <div className="flex flex-col gap-2">
                <span className="eyebrow" style={{ color: '#0096C7' }}>Manufacturing</span>
                <span className="text-sm font-medium mt-2" style={{ color: '#0C2340' }}>
                  Riyadh, Kingdom of Saudi Arabia
                </span>
              </div>

              <div className="h-px w-full" style={{ background: '#B8D9EC' }} />

              <a
                href="mailto:info@tripledelta.sa"
                className="text-sm font-bold transition-colors"
                style={{ color: '#0077B6' }}
              >
                info@tripledelta.sa
              </a>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {['ASME U & S Certified', 'Built in KSA', 'Saudi-Owned'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide"
                    style={{
                      background: '#EBF5FB',
                      border: '1px solid #B8D9EC',
                      color: '#023E8A',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Enquiry Form */}
          <div ref={formRef}>
            <div
              className="rounded-2xl p-8"
              style={{
                background: '#ffffff',
                border: '1px solid #B8D9EC',
                boxShadow: '0 8px 40px rgba(0,119,182,0.10)',
              }}
            >
              <h3 className="font-extrabold text-xl mb-2" style={{ color: '#0C2340' }}>
                Project Enquiry Form
              </h3>
              <p className="text-sm mb-7" style={{ color: '#2C5F7A' }}>
                Tell us about your project and we'll be in touch within 2 business days.
              </p>

              {submitted ? (
                <div
                  className="rounded-xl p-8 text-center flex flex-col items-center gap-4"
                  style={{ background: '#EBF5FB', border: '1px solid #B8D9EC' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: '#0077B6' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg" style={{ color: '#0C2340' }}>Enquiry Received</h4>
                  <p className="text-sm" style={{ color: '#2C5F7A' }}>
                    Thank you for reaching out. The Triple Delta team will respond within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wide" style={{ color: '#2C5F7A' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wide" style={{ color: '#2C5F7A' }}>Company *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wide" style={{ color: '#2C5F7A' }}>Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wide" style={{ color: '#2C5F7A' }}>Phone</label>
                      <input
                        type="tel"
                        placeholder="+966 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide" style={{ color: '#2C5F7A' }}>Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select enquiry type...</option>
                      <option value="epc">Engineering & EPC Project</option>
                      <option value="equipment">Equipment Supply</option>
                      <option value="technology">Technology Licensing</option>
                      <option value="jv">JV Partnership Enquiry</option>
                      <option value="maintenance">Maintenance & Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide" style={{ color: '#2C5F7A' }}>Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project, requirements or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center mt-2"
                  >
                    Submit Enquiry
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #B8D9EC', boxShadow: '0 4px 24px rgba(0,119,182,0.07)' }}>
          <div
            className="px-6 py-4 flex items-center gap-3"
            style={{ background: '#FFFFFF', borderBottom: '1px solid #B8D9EC' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: '#0077B6' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: '#0C2340' }}>Dhahran Head Office</p>
              <p className="text-xs" style={{ color: '#2C5F7A' }}>Nexus Tower, 4748 King Abdul Aziz Road, Dhahran 34255, KSA</p>
            </div>
            <a
              href="https://maps.google.com/?q=Nexus+Tower,+4748+King+Abdul+Aziz+Road,+Dhahran+34255,+Saudi+Arabia"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
              style={{ color: '#0077B6' }}
            >
              Open in Maps
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
          <div style={{ height: '320px', position: 'relative' }}>
            <iframe
              title="Triple Delta Head Office — Dhahran, KSA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d50.1167!3d26.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e7b5b5b5b5b5%3A0x0!2sNexus+Tower%2C+4748+King+Abdul+Aziz+Road%2C+Dhahran+34255%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}