'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const trustPillars = [
  {
    id: '01',
    accent: '#006C35',
    bg: 'rgba(0,108,53,0.07)',
    border: 'rgba(0,108,53,0.22)',
    icon: '🏅',
    title: 'ASME U & S Certified',
    subtitle: 'Pressure vessel and boiler codes — the global benchmark',
    body:
      'Triple Delta holds ASME U & S certification — the internationally recognised standard for pressure vessel and boiler fabrication. Combined with ISO 9001 quality management, ISO 14001 environmental management, OHSAS 18001 safety culture and EC PED conformity, every piece of equipment we manufacture meets the most demanding regulatory requirements in the world.',
    credentials: ['ASME U Stamp', 'ASME S Stamp', 'ISO 9001', 'ISO 14001', 'OHSAS 18001', 'EC PED', 'NB R', 'BS EN1090 EXC 4'],
  },
  {
    id: '02',
    accent: '#B8860B',
    bg: 'rgba(184,134,11,0.07)',
    border: 'rgba(184,134,11,0.22)',
    icon: '🔥',
    title: 'Proven HP Air Assist — 33 Aramco Sites',
    subtitle: 'Not a pilot. A proven, at-scale deployment across Saudi Arabia.',
    body:
      'The patented HP Air Assist System — invented by Triple Delta founder Mazen Mashhour — was deployed across 33 Saudi Aramco facilities under Aramco BI 10-222 in 2008–09. It eliminates smoky, non-compliant flaring and delivers EPA-equivalent clean combustion. Retrofit capital cost is $0.03M versus $1.2M for an LP system, and shutdown is just 4–7 days versus 14–28 days. The result: 500,000 tonnes of GHG eliminated every year.',
    credentials: ['33 Aramco Sites', '500K t GHG/yr Saved', '$0.03M Retrofit Cost', '4–7 Day Shutdown', 'Aramco BI 10-222', 'EPA Compliant', 'Geneva Gold Medal 2006'],
  },
  {
    id: '03',
    accent: '#1A3A5C',
    bg: 'rgba(26,58,92,0.07)',
    border: 'rgba(26,58,92,0.22)',
    icon: '🇸🇦',
    title: 'IKTVA Compliant — 40%+ Local Content',
    subtitle: 'Fully aligned with Saudi Vision 2030 and IKTVA requirements',
    body:
      'Triple Delta is structured from the ground up for IKTVA compliance, with 40%+ local content across all projects. MiSA — our licensed in-Kingdom manufacturer — is already registered with SA, SADARA and SATORP. Every engineering discipline, every fabrication process and every delivery is designed to maximise Saudi content, reduce import dependency and build lasting in-Kingdom industrial capability.',
    credentials: ['40%+ IKTVA Local Content', 'MiSA Registered', 'SA Registered', 'SADARA Registered', 'SATORP Registered', 'Vision 2030 Aligned'],
  },
  {
    id: '04',
    accent: '#5B2D8E',
    bg: 'rgba(91,45,142,0.07)',
    border: 'rgba(91,45,142,0.22)',
    icon: '🤝',
    title: 'UnitBirwelco Licensed Partner',
    subtitle: '120+ years of global engineering heritage, now in the Kingdom',
    body:
      'Triple Delta operates under licence from UnitBirwelco — a global leader in fired heaters, flares, pressure equipment and heat exchangers with 120+ years of engineering heritage. UnitBirwelco holds ASME U & S stamps, ISO 9001 and ISO 14001 certifications, and has delivered projects for BP, Shell, ExxonMobil, ADNOC and Aramco across the UK, Sweden, UAE, Nigeria, India, Qatar and Australia. That global track record is now available in-Kingdom.',
    credentials: ['UnitBirwelco Licensed', '120+ Years Heritage', 'BP Projects', 'Shell Projects', 'ExxonMobil Projects', 'ADNOC Projects', 'Aramco Projects'],
  },
  {
    id: '05',
    accent: '#7C3D12',
    bg: 'rgba(124,61,18,0.07)',
    border: 'rgba(124,61,18,0.22)',
    icon: '🏭',
    title: 'In-Kingdom Manufacturing',
    subtitle: 'Riyadh fabrication bays — operational today',
    body:
      'Our Riyadh manufacturing facility is operational with two welding bays: Bay 1 for stainless steel and Bay 2 for carbon steel with CNC plasma. Phase 1 covers approximately 3,000 m² expandable to 10,000 m², with crane capacity of 5T in Bay 1 and 10T in Bay 2 (250T heavy lift planned). Annual output targets are SAR 15–25M in 2026, scaling to SAR 100M+ by 2028. Short lead times, no import delays, full Saudi control.',
    credentials: ['Riyadh Facility', '3,000 m² Phase 1', '10,000 m² Planned', 'CNC Plasma', 'SAR 100M+ by 2028', 'Short Lead Times'],
  },
  {
    id: '06',
    accent: '#006C35',
    bg: 'rgba(0,108,53,0.07)',
    border: 'rgba(0,108,53,0.22)',
    icon: '📋',
    title: 'Saudi-Owned Track Record',
    subtitle: '32 years of Aramco experience behind every decision',
    body:
      'Triple Delta is Saudi-owned and Saudi-led. Founder Mazen Mashhour brings 32 years of Saudi Aramco experience across upstream, refining and petrochemicals — the deepest possible understanding of how Saudi industrial assets operate, what they need and how to deliver it. Combined with UnitBirwelco\u2019s global engineering heritage, this is not a foreign company entering the market. It is a Saudi company that built the market.',
    credentials: ['Saudi-Owned', 'Saudi-Led', '32 Yrs Aramco Experience', 'Upstream', 'Refining', 'Petrochemicals'],
  },
];

const certifications = [
  { name: 'ASME U Stamp', desc: 'Pressure vessel fabrication', color: '#006C35' },
  { name: 'ASME S Stamp', desc: 'Power boiler fabrication', color: '#006C35' },
  { name: 'ISO 9001', desc: 'Quality management systems', color: '#1A3A5C' },
  { name: 'ISO 14001', desc: 'Environmental management', color: '#1A3A5C' },
  { name: 'OHSAS 18001', desc: 'Occupational health & safety', color: '#B8860B' },
  { name: 'EC PED', desc: 'European pressure equipment directive', color: '#B8860B' },
  { name: 'NB R', desc: 'National Board repair certification', color: '#7C3D12' },
  { name: 'BS EN1090 EXC 4', desc: 'Structural steel execution class 4', color: '#5B2D8E' },
];

const keyStats = [
  { value: '33', label: 'Aramco sites with HP Air Assist deployed', accent: '#B8860B' },
  { value: '500K t', label: 'GHG tonnes eliminated per year', accent: '#006C35' },
  { value: '40%+', label: 'IKTVA local content across all projects', accent: '#1A3A5C' },
  { value: '120+', label: 'Years of UnitBirwelco engineering heritage', accent: '#5B2D8E' },
  { value: '$0.03M', label: 'HP Air Assist retrofit cost vs $1.2M LP system', accent: '#B8860B' },
  { value: '32 yrs', label: 'Saudi Aramco experience of founder', accent: '#006C35' },
];

export default function TrustPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [heroRef.current, statsRef.current].filter(Boolean) as HTMLElement[];
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
    });
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-24"
        style={{
          background: 'linear-gradient(160deg, #071410 0%, #0F2318 55%, #0D1F2D 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(184,134,11,0.10) 0%, transparent 55%), radial-gradient(circle at 20% 75%, rgba(0,108,53,0.12) 0%, transparent 50%)',
          }}
        />
        <div className="container-xl relative z-10">
          <div ref={heroRef} className="max-w-3xl">
            <span className="eyebrow block mb-5" style={{ color: 'var(--accent)' }}>
              Why Clients Trust Us
            </span>
            <h1 className="text-hero-xl text-white mb-6">
              Credentials earned.{' '}
              <span style={{ color: 'var(--cyan)' }}>Not claimed.</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(148,163,184,0.90)', maxWidth: '640px', lineHeight: '1.78' }}
            >
              Every certification, every deployment, every partnership behind Triple Delta is
              documented, verifiable and operational. Here is why Saudi Arabia's most demanding
              industrial clients choose to work with us.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ASME Certified', '33 Aramco Sites', 'IKTVA 40%+', 'UnitBirwelco Licensed', 'Saudi-Owned'].map((tag) => (
                <span
                  key={tag}
                  className="pill-tag"
                  style={{ borderColor: 'rgba(184,134,11,0.4)', color: '#fde68a' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Stats ── */}
      <section className="section-pad" style={{ background: 'var(--dark)' }}>
        <div className="container-xl">
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '1rem', overflow: 'hidden' }}>
            {keyStats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col gap-3 p-8"
                style={{ background: 'var(--dark)' }}
              >
                <span className="stat-number" style={{ color: stat.accent }}>
                  {stat.value}
                </span>
                <span
                  className="text-sm font-medium leading-snug"
                  style={{ color: 'rgba(148,163,184,0.80)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Six Trust Pillars ── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="container-xl">
          <div className="mb-14">
            <span className="eyebrow block mb-3" style={{ color: 'var(--primary)' }}>
              Six Reasons
            </span>
            <h2 className="text-section-h2" style={{ color: 'var(--foreground)' }}>
              What makes Triple Delta different
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trustPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#fff',
                  border: `1px solid ${pillar.border}`,
                  boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
                }}
              >
                {/* Header */}
                <div
                  className="px-8 pt-7 pb-6"
                  style={{ background: pillar.bg, borderBottom: `1px solid ${pillar.border}` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{pillar.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: pillar.accent }}
                        >
                          {pillar.id}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-lg leading-tight mb-1" style={{ color: 'var(--foreground)' }}>
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: pillar.accent }}>
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-6 flex flex-col gap-5">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.72' }}>
                    {pillar.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.credentials.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${pillar.accent}10`,
                          color: pillar.accent,
                          border: `1px solid ${pillar.accent}25`,
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications Grid ── */}
      <section className="section-pad" style={{ background: 'var(--dark)' }}>
        <div className="container-xl">
          <div className="mb-12">
            <span className="eyebrow block mb-3" style={{ color: 'var(--accent)' }}>
              Certifications & Standards
            </span>
            <h2 className="text-section-h2 text-white">
              Every standard that{' '}
              <span style={{ color: 'var(--cyan)' }}>matters</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl px-6 py-5 flex flex-col gap-2"
                style={{
                  background: `${cert.color}10`,
                  border: `1px solid ${cert.color}28`,
                }}
              >
                <span className="font-extrabold text-base" style={{ color: cert.color }}>
                  {cert.name}
                </span>
                <span className="text-xs leading-snug" style={{ color: 'rgba(148,163,184,0.75)' }}>
                  {cert.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ background: '#F4F7F4' }}>
        <div className="container-xl">
          <div
            className="rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0,108,53,0.08) 0%, rgba(26,58,92,0.08) 100%)',
              border: '1px solid rgba(0,108,53,0.18)',
            }}
          >
            <div className="max-w-xl">
              <h2 className="font-extrabold text-2xl mb-3" style={{ color: 'var(--foreground)' }}>
                Ready to work with a certified, proven partner?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.72' }}>
                Whether you need ASME-certified fabrication, HP Air Assist retrofits, IKTVA-compliant EPC delivery or a long-term maintenance partner — Triple Delta has the credentials, the track record and the in-Kingdom capability to deliver.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a href="/#contact" className="btn-primary whitespace-nowrap">
                Discuss a Project
              </a>
              <a
                href="/team"
                className="whitespace-nowrap font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                style={{
                  background: 'rgba(0,108,53,0.10)',
                  color: '#006C35',
                  border: '1px solid rgba(0,108,53,0.25)',
                }}
              >
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
