'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const missionPillars = [
  {
    number: '01',
    color: '#006C35',
    bg: 'rgba(0,108,53,0.08)',
    border: 'rgba(0,108,53,0.25)',
    title: 'Localise In-Kingdom Capability',
    body:
      'Transfer and embed UnitBirwelco and ISS technologies — from R&D through fabrication to maintenance — entirely within the Kingdom. Every discipline, every process, every credential: Saudi-owned and Saudi-operated.',
    tags: ['IKTVA 40%+', 'In-Kingdom Fabrication', 'Technology Transfer'],
  },
  {
    number: '02',
    color: '#B8860B',
    bg: 'rgba(184,134,11,0.08)',
    border: 'rgba(184,134,11,0.25)',
    title: 'Commercialise Saudi-Owned IP',
    body:
      'The HP Air Assist System — patented, Geneva-recognised, deployed at 33 Aramco sites — is proof that Saudi industrial ingenuity can reach global markets. Triple Delta exists to repeat that model across combustion, flare monitoring and hydrogen combustion IP.',
    tags: ['HP Air Assist Patent', '500K t GHG/yr Saved', 'Saudi IP Export'],
  },
  {
    number: '03',
    color: '#1A3A5C',
    bg: 'rgba(26,58,92,0.10)',
    border: 'rgba(26,58,92,0.30)',
    title: 'Develop Saudi Engineering Talent',
    body:
      'Graduating the first AI-powered Saudi Engineering Academy cohort. Twelve-month rotational programmes, UnitBirwelco UK placements and Saudi-certified credentials — with a stated goal of zero dependency on foreign expertise.',
    tags: ['AI Engineering Academy', 'Saudi Credentials', 'Zero Foreign Dependency'],
  },
];

const saudizationStats = [
  { value: '40%+', label: 'Local content target under IKTVA', accent: '#006C35' },
  { value: '33', label: 'Aramco sites — Saudi-developed HP Air Assist', accent: '#B8860B' },
  { value: '32 yrs', label: 'Saudi Aramco experience of founder Mazen Mashhour', accent: '#1A3A5C' },
  { value: '2028', label: 'Target year for GCC & global equipment export', accent: '#006C35' },
];

const workforceStreams = [
  {
    icon: '⚙️',
    title: 'Digital Manufacturing',
    items: ['CNC & robotic programming', 'Facility digital twins', 'CAD/CAM and FEA'],
  },
  {
    icon: '🔥',
    title: 'Combustion & Process',
    items: ['First-principles flare design', 'Fired-heater simulation', 'EPA compliance & monitoring'],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    items: ['Plant data science', 'Supply-chain optimisation', 'Operations dashboards'],
  },
  {
    icon: '🤖',
    title: 'AI-Powered Engineering',
    items: ['Local LLM engineering tools', 'Predictive-maintenance AI', 'AI-assisted QA/QC'],
  },
];

export default function MissionPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [heroRef.current, statsRef.current].filter(Boolean) as HTMLElement[];
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`;
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
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(0,108,53,0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(184,134,11,0.08) 0%, transparent 50%)',
          }}
        />
        <div className="container-xl relative z-10">
          <div ref={heroRef} className="max-w-3xl">
            <span className="eyebrow block mb-5" style={{ color: 'var(--accent)' }}>
              Our Mission
            </span>
            <h1 className="text-hero-xl text-white mb-6">
              Built in the Kingdom.{' '}
              <span style={{ color: 'var(--cyan)' }}>For the Kingdom.</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(148,163,184,0.90)', maxWidth: '640px', lineHeight: '1.78' }}
            >
              Triple Delta's mission is to build Saudi Arabia's most capable industrial engineering
              enterprise — one that localises world-class technology, commercialises Saudi-owned
              intellectual property and develops the next generation of Saudi engineers, with no
              dependency on foreign expertise.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Saudi-Owned', 'IKTVA Compliant', 'Vision 2030 Aligned', 'ASME Certified'].map((tag) => (
                <span
                  key={tag}
                  className="pill-tag"
                  style={{ borderColor: 'rgba(0,108,53,0.4)', color: '#a7f3c0' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="container-xl">
          <div className="mb-14">
            <span className="eyebrow block mb-3" style={{ color: 'var(--primary)' }}>
              Three Pillars
            </span>
            <h2 className="text-section-h2" style={{ color: 'var(--foreground)' }}>
              What drives every decision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="card-hover rounded-xl p-8 flex flex-col gap-5"
                style={{
                  background: pillar.bg,
                  border: `1px solid ${pillar.border}`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="capability-card-number"
                    style={{ color: pillar.color, fontSize: '0.8rem' }}
                  >
                    {pillar.number}
                  </span>
                  <div
                    className="w-10 h-1 rounded-full mt-2"
                    style={{ background: pillar.color }}
                  />
                </div>
                <h3 className="text-card-h3" style={{ color: 'var(--foreground)' }}>
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--muted)', lineHeight: '1.72' }}
                >
                  {pillar.body}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {pillar.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${pillar.color}18`,
                        color: pillar.color,
                        border: `1px solid ${pillar.color}30`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Saudization Stats ── */}
      <section
        className="section-pad"
        style={{ background: 'var(--dark)' }}
      >
        <div className="container-xl">
          <div className="mb-14">
            <span className="eyebrow block mb-3" style={{ color: 'var(--accent)' }}>
              Saudization in Numbers
            </span>
            <h2 className="text-section-h2 text-white">
              Measurable commitment to{' '}
              <span style={{ color: 'var(--cyan)' }}>in-Kingdom delivery</span>
            </h2>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '1rem', overflow: 'hidden' }}>
            {saudizationStats.map((stat) => (
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

      {/* ── Saudi Workforce Development ── */}
      <section className="section-pad" style={{ background: '#F4F7F4' }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="eyebrow block mb-4" style={{ color: 'var(--primary)' }}>
                Saudi Workforce Development
              </span>
              <h2 className="text-section-h2" style={{ color: 'var(--foreground)' }}>
                The AI-powered{' '}
                <span style={{ color: 'var(--primary)' }}>Saudi Engineering Academy</span>
              </h2>
              <div
                className="mt-6 w-14 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)' }}
              />
              <p
                className="mt-8 text-base leading-relaxed"
                style={{ color: 'var(--muted)', lineHeight: '1.78' }}
              >
                Triple Delta's workforce strategy is built around a single objective: graduate
                Saudi engineers who need no foreign support. The Academy combines AI-powered
                training tools, international placements at UnitBirwelco UK, and Saudi-certified
                credentials across four technical streams.
              </p>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: 'var(--muted-foreground)', lineHeight: '1.75' }}
              >
                Career pathways include a 12-month rotational programme, UnitBirwelco UK
                placements and Saudi-certified credentials — with a stated goal of zero
                dependency on foreign expertise by 2030.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {workforceStreams.map((stream) => (
                <div
                  key={stream.title}
                  className="rounded-xl p-6 flex flex-col gap-4"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,108,53,0.15)',
                    boxShadow: '0 2px 16px rgba(0,108,53,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{stream.icon}</span>
                    <h4 className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>
                      {stream.title}
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {stream.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--primary)' }}
                        />
                        <span className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #006C35 0%, #0F2318 60%, #0D1F2D 100%)',
        }}
      >
        <div className="container-xl text-center">
          <h2 className="text-section-h2 text-white mb-4">
            Partner with a Saudi-owned EPC operator
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            IKTVA-compliant, ASME-certified and Vision 2030 aligned — Triple Delta is ready
            for giga-project scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="/#contact" className="btn-primary">
              Discuss a Project
            </a>
            <Link
              href="/vision"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white"
              style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.08)' }}
            >
              Our Vision 2030 Strategy →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
