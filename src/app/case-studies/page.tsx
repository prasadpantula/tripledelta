'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'hp-air-assist-aramco',
    title: 'HP Air Assist — Aramco Flare Improvement Programme',
    category: 'Technology Deployment',
    client: 'Saudi Aramco',
    scope: 'Flare combustion improvement across 33 operational sites',
    outcome: 'Stated 500,000 tonnes/year GHG reduction; clean combustion achieved at all sites',
    image: '/assets/images/image-8-2-1790611073026.jpeg',
    imageAlt: 'Clean flare stack after HP Air Assist installation showing minimal blue flame and no visible smoke emissions',
    tags: ['HP Air Assist', 'Flare Technology', 'Emissions Reduction', 'Saudi Aramco'],
    highlight: '33 sites · 500K t/yr GHG reduction',
    year: '2006–Present',
  },
  {
    id: 'riyadh-manufacturing',
    title: 'In-Kingdom Manufacturing Facility — Riyadh',
    category: 'Manufacturing',
    client: 'Triple Delta',
    scope: 'Establishment of ASME U & S certified manufacturing facility in Riyadh, KSA',
    outcome: 'Full in-Kingdom fabrication capability for pressure equipment, fired heaters and flare systems',
    image: '/assets/images/image-1-1-1790608472645.jpeg',
    imageAlt: 'Triple Delta Riyadh manufacturing facility interior showing overhead crane, welding bays and polished concrete floor',
    tags: ['ASME Certified', 'In-Kingdom Manufacturing', 'Vision 2030', 'Localisation'],
    highlight: 'ASME U & S · In-Kingdom',
    year: '2024',
  },
  {
    id: 'unitbirwelco-jv',
    title: 'UnitBirwelco JV — Technology Localisation Programme',
    category: 'JV Partnership',
    client: 'UnitBirwelco / Triple Delta',
    scope: 'Establishing full JV partnership to localise UnitBirwelco\'s 120+ year engineering heritage in KSA',
    outcome: 'Direct in-Kingdom access to fired heaters, flare systems, pressure equipment and full EPC capability',
    image: '/assets/images/image-1-3-1790611114036.png',
    imageAlt: 'UnitBirwelco logo representing the strategic JV partnership with Triple Delta for KSA technology localisation',
    tags: ['JV Partnership', 'Technology Localisation', 'EPC', 'UnitBirwelco'],
    highlight: '120+ years heritage · Full EPC',
    year: '2025',
  },
];

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.transition = `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}

export default function CaseStudiesPage() {
  return (
    <main className="overflow-x-hidden" style={{ background: '#ffffff' }}>
      <Header />

      {/* Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 50%, #00B4D8 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #87CEEB 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="container-xl relative z-10">
          <span className="eyebrow block mb-4" style={{ color: '#87CEEB' }}>
            Proof of Delivery · Projects & Partnerships
          </span>
          <h1 className="text-hero-xl text-white mb-6">
            Case Studies &<br />Projects
          </h1>
          <p className="text-xl font-semibold max-w-2xl" style={{ color: 'rgba(220,240,255,0.90)' }}>
            Technology deployed. Partnerships established. Capability built in the Kingdom.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-pad" style={{ background: '#F0F8FF' }}>
        <div className="container-xl">
          <div className="flex flex-col gap-12">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.id} delay={i * 0.08}>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #B8D9EC',
                    boxShadow: '0 6px 32px rgba(0,119,182,0.10)',
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Image */}
                    <div className="lg:col-span-2 relative" style={{ minHeight: '280px' }}>
                      <AppImage
                        src={cs.image}
                        alt={cs.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to right, transparent 60%, rgba(255,255,255,0.1) 100%)' }}
                      />
                      <div
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                        style={{ background: '#0077B6', color: '#ffffff' }}
                      >
                        {cs.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8 flex flex-col gap-5">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0096C7' }}>{cs.year}</span>
                          <span className="text-xs" style={{ color: '#B8D9EC' }}>·</span>
                          <span className="text-xs font-semibold" style={{ color: '#2C5F7A' }}>{cs.client}</span>
                        </div>
                        <h2 className="font-extrabold text-xl mb-3" style={{ color: '#0C2340', lineHeight: '1.3' }}>{cs.title}</h2>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl p-4" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0096C7' }}>Scope</p>
                          <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{cs.scope}</p>
                        </div>
                        <div className="rounded-xl p-4" style={{ background: '#EBF5FB', border: '1px solid #B8D9EC' }}>
                          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0077B6' }}>Outcome</p>
                          <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{cs.outcome}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {cs.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{ background: '#EBF5FB', color: '#023E8A', border: '1px solid #B8D9EC' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div
                        className="flex items-center gap-2 pt-2"
                        style={{ borderTop: '1px solid #B8D9EC' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-xs font-bold italic" style={{ color: '#0077B6' }}>{cs.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.2}>
            <div
              className="mt-16 rounded-2xl p-10 text-center"
              style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 60%, #00B4D8 100%)' }}
            >
              <h2 className="text-2xl font-extrabold text-white mb-4">Have a project in mind?</h2>
              <p className="text-base mb-8" style={{ color: 'rgba(220,240,255,0.85)' }}>
                Triple Delta welcomes technical and commercial conversations at any stage — from early feasibility through to full project execution.
              </p>
              <Link href="/#contact" className="btn-outline inline-flex">
                Discuss Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
