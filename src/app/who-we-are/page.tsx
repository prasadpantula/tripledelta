'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const partners = [
  {
    name: 'UnitBirwelco',
    abbr: 'UB',
    role: 'Engineering & EPC Excellence',
    description: '120+ years of world-class engineering heritage — fired heaters, flare systems, pressure equipment and full EPC from design through maintenance.',
    color: '#0077B6',
    bg: '#EBF5FB',
    href: '/partners/unitbirwelco',
  },
  {
    name: 'Thermo Design Engineering',
    abbr: 'TDE',
    role: 'Energy Processing & Modularisation',
    description: 'Integrated energy-processing engineering, modularisation and fabrication with proven turnkey project expertise across conventional and transition energy.',
    color: '#0096C7',
    bg: '#E8F8FC',
    href: '/partners/tde',
  },
  {
    name: 'CECO Environmental',
    abbr: 'CECO',
    role: 'Industrial Environmental Technology',
    description: 'Specialist industrial air, water treatment, emissions management and energy-transition technologies underpinning Triple Delta\'s decarbonisation offering.',
    color: '#023E8A',
    bg: '#EBF0FA',
    href: '/partners/ceco',
  },
  {
    name: 'Innovative Synergy Solutions',
    abbr: 'ISS',
    role: 'Technology Localisation & R&D',
    description: 'Full-spectrum technology localisation in KSA — integrating R&D through maintenance under one roof, aligned with Vision 2030 strategic objectives.',
    color: '#0077B6',
    bg: '#EBF5FB',
    href: '/partners/iss',
  },
];

const capabilities = [
  { icon: '⚙️', title: 'High-End Engineered Equipment', desc: 'Precision-manufactured equipment built to international standards, delivered in-Kingdom.' },
  { icon: '🏗️', title: 'Engineering, Procurement & Construction', desc: 'Full EPC capability from concept through commissioning — one integrated platform.' },
  { icon: '🌿', title: 'Environmental & Decarbonisation Technologies', desc: 'Industrial emissions reduction, air and water treatment, and energy-transition solutions.' },
  { icon: '🤖', title: 'AI & Digitalisation Solutions', desc: 'Smart industrial systems, digital monitoring and AI-driven operational optimisation.' },
  { icon: '🔧', title: 'Operational & Maintenance Solutions', desc: 'Long-term lifecycle support, shutdown services and performance optimisation.' },
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

export default function WhoWeArePage() {
  return (
    <main className="overflow-x-hidden" style={{ background: '#ffffff' }}>
      <Header />

      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 50%, #00B4D8 100%)',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #87CEEB 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B4D8 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow block mb-4" style={{ color: '#87CEEB' }}>
              Our Story · Our Mission · Our Partners
            </span>
            <h1 className="text-hero-xl text-white mb-6">
              Who We Are
            </h1>
            <p className="text-xl leading-relaxed font-semibold" style={{ color: 'rgba(220,240,255,0.90)' }}>
              Powered by Expertise. Driven by Innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <span className="eyebrow block mb-4" style={{ color: '#0077B6' }}>
                  Saudi-Owned · Globally Connected
                </span>
                <h2 className="text-section-h2 mb-8" style={{ color: '#0C2340' }}>
                  Triple Delta is a Saudi-based company that combines Saudi-Owned innovations with international engineering expertise and in-Kingdom manufacturing.
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="flex flex-col gap-6 text-base leading-relaxed" style={{ color: '#2C5F7A', fontSize: '1.05rem', lineHeight: '1.78' }}>
                  <p>
                    Triple Delta was founded on decades of collective industrial experience across various industries. By combining world-class expertise with local talents and resources, we help organisations improve performance, enhance operational efficiency, and unlock new growth opportunities.
                  </p>
                  <p>
                    Our vision is for an accelerated industrial transformation in the fields of Energy, Mining and Defence in the Kingdom of Saudi Arabia. We are committed to supporting the Kingdom of Saudi Arabia's Vision 2030 objectives by enabling localisation and fostering strategic partnerships that strengthen national industrial capabilities, national technology deployment, and economic diversification.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.15}>
                <div
                  className="rounded-2xl p-8 flex flex-col gap-6"
                  style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}
                >
                  <h3 className="font-bold text-lg" style={{ color: '#023E8A' }}>We deliver:</h3>
                  {capabilities.map((cap) => (
                    <div key={cap.title} className="flex items-start gap-4">
                      <span className="text-2xl shrink-0 mt-0.5">{cap.icon}</span>
                      <div>
                        <p className="font-bold text-sm mb-1" style={{ color: '#0C2340' }}>{cap.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4A7A96' }}>{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* The JV Partnership Story — MOST IMPORTANT */}
      <section className="section-pad" style={{ background: '#F0F8FF' }}>
        <div className="container-xl">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow block mb-4" style={{ color: '#0096C7' }}>
                Strategic Joint Ventures · Not Ordinary Marketing
              </span>
              <h2 className="text-section-h2 mb-6" style={{ color: '#0C2340' }}>
                Bringing Global Expertise to KSA<br className="hidden sm:block" /> Through Strategic JV Partnerships
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#2C5F7A', fontSize: '1.1rem' }}>
                Triple Delta is not a marketing agent. We are partnering with four world-class global companies to establish them in the Kingdom of Saudi Arabia as <strong style={{ color: '#0077B6' }}>Joint Venture strategic partnerships</strong> — bringing their full global expertise, technology and capabilities directly into KSA.
              </p>
            </div>
          </AnimatedSection>

          {/* JV Partnership Highlight Box */}
          <AnimatedSection delay={0.1}>
            <div
              className="rounded-2xl p-8 mb-14"
              style={{
                background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 60%, #0096C7 100%)',
                boxShadow: '0 16px 48px rgba(0,119,182,0.25)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '🤝', title: 'Joint Venture Partnerships', desc: 'Not distributors or agents — full JV structures bringing global companies into KSA as operating entities.' },
                  { icon: '🌍', title: 'Global Expertise, Local Delivery', desc: 'Each partner\'s complete technology portfolio, engineering capability and IP is localised for in-Kingdom delivery.' },
                  { icon: '🇸🇦', title: 'Vision 2030 Aligned', desc: 'Enabling technology localisation, IKTVA compliance and national industrial capability development.' },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="font-bold text-lg text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(220,240,255,0.85)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div
                  className="rounded-2xl overflow-hidden flex flex-col h-full"
                  style={{
                    background: '#ffffff',
                    border: `1px solid ${p.color}25`,
                    boxShadow: `0 4px 24px ${p.color}12`,
                  }}
                >
                  <div
                    className="px-7 py-5"
                    style={{ background: p.bg, borderBottom: `3px solid ${p.color}` }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm text-white shrink-0"
                        style={{ background: p.color }}
                      >
                        {p.abbr}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base" style={{ color: '#0C2340' }}>{p.name}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest mt-0.5" style={{ color: p.color }}>{p.role}</p>
                      </div>
                      <span
                        className="ml-auto text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                      >
                        JV Partner
                      </span>
                    </div>
                  </div>
                  <div className="px-7 py-6 flex-1 flex flex-col gap-5">
                    <p className="text-sm leading-relaxed" style={{ color: '#374151', lineHeight: '1.75' }}>{p.description}</p>
                    <div className="mt-auto">
                      <Link
                        href={p.href}
                        className="btn-partner inline-flex"
                        style={{
                          background: p.color,
                          boxShadow: `0 4px 16px ${p.color}40, 0 2px 4px rgba(0,0,0,0.1)`,
                        }}
                      >
                        Learn about this partnership
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <span className="eyebrow block mb-4" style={{ color: '#0096C7' }}>Our Vision</span>
              <h2 className="text-section-h2 mb-6" style={{ color: '#0C2340' }}>
                Accelerating industrial transformation in Energy, Mining & Defence.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#2C5F7A', fontSize: '1.05rem', lineHeight: '1.78' }}>
                We are committed to supporting the Kingdom of Saudi Arabia's Vision 2030 objectives by enabling localisation and fostering strategic partnerships that strengthen national industrial capabilities, national technology deployment, and economic diversification.
              </p>
              <Link href="/#contact" className="btn-primary">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Sectors', value: 'Energy · Mining · Defence' },
                  { label: 'Model', value: 'JV Strategic Partnerships' },
                  { label: 'Manufacturing', value: 'In-Kingdom, Riyadh' },
                  { label: 'Alignment', value: 'Vision 2030 · IKTVA' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-5"
                    style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0096C7' }}>{item.label}</p>
                    <p className="font-bold text-sm" style={{ color: '#0C2340' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
