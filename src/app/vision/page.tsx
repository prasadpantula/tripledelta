'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const strategicObjectives = [
  {
    year: '2026',
    color: '#006C35',
    bg: 'rgba(0,108,53,0.07)',
    border: 'rgba(0,108,53,0.22)',
    title: 'Localise & Certify',
    items: [
      'Localise UnitBirwelco and ISS technologies in the Kingdom',
      'Establish complete ASME-certified EPC delivery in KSA',
      'Achieve 40%+ IKTVA local content across all projects',
      'Reach SAR 15–25M annual manufacturing output',
    ],
  },
  {
    year: '2027',
    color: '#B8860B',
    bg: 'rgba(184,134,11,0.07)',
    border: 'rgba(184,134,11,0.22)',
    title: 'Commercialise IP',
    items: [
      'Commercialise Saudi-owned flare and combustion IP',
      'Graduate first AI-powered Saudi Engineering Academy cohort',
      'Expand Riyadh facility to 10,000 m² Phase 2',
      'Scale manufacturing output to SAR 50M+',
    ],
  },
  {
    year: '2028',
    color: '#1A3A5C',
    bg: 'rgba(26,58,92,0.08)',
    border: 'rgba(26,58,92,0.25)',
    title: 'Export & Scale',
    items: [
      'Export in-Kingdom equipment to GCC and global markets',
      'Establish Triple Delta as KSA\'s industrial decarbonisation platform',
      'Achieve SAR 100M+ annual manufacturing revenue',
      'Zero dependency on foreign engineering expertise',
    ],
  },
];

const lloSteps = [
  {
    step: 'L',
    word: 'Localise',
    color: '#006C35',
    bg: 'rgba(0,108,53,0.10)',
    description:
      'Transfer UnitBirwelco and ISS capabilities from R&D through fabrication to maintenance — entirely within the Kingdom. Every process, every credential, every delivery: Saudi-owned.',
    details: ['Technology transfer agreements', 'In-Kingdom fabrication bays', 'IKTVA 40%+ compliance', 'MiSA registered with SA, SADARA & SATORP'],
  },
  {
    step: 'L',
    word: 'License',
    color: '#B8860B',
    bg: 'rgba(184,134,11,0.10)',
    description:
      'Receive UnitBirwelco IP while licensing back Saudi-owned HP Air Assist, flare-monitoring and hydrogen-combustion technologies. Saudi innovation flows outward, not inward.',
    details: ['HP Air Assist patent (Geneva Gold Medal 2006)', 'Hydrogen-ready burner licensing', 'Real-time flare-gas metering IP', 'Exclusive KSA & Middle East operating rights'],
  },
  {
    step: 'O',
    word: 'Operate',
    color: '#1A3A5C',
    bg: 'rgba(26,58,92,0.10)',
    description:
      'Serve as the exclusive KSA and Middle East operating centre — delivering EPC, maintenance and environmental technology from a Saudi base to Saudi and regional clients.',
    details: ['Exclusive KSA & ME operating centre', 'Full EPC turnkey delivery', 'Long-term O&M and T&I contracts', 'Environmental monitoring & reporting'],
  },
];

const vision2030Alignments = [
  {
    icon: '🏭',
    title: 'Industrial Localisation',
    body: 'IKTVA-compliant manufacturing with 40%+ local content. In-Kingdom fabrication of fired heaters, flares, heat exchangers and pressure vessels — reducing import dependency for critical industrial equipment.',
    badge: 'IKTVA Compliant',
    badgeColor: '#006C35',
  },
  {
    icon: '🌿',
    title: 'Saudi Net Zero 2060',
    body: 'HP Air Assist eliminates 500K tonnes of GHG annually across 33 Aramco sites. Digital carbon accounting, VOC monitoring and EPA-equivalent reporting support Saudi Net Zero 2060 commitments.',
    badge: '500K t GHG/yr Saved',
    badgeColor: '#006C35',
  },
  {
    icon: '⚡',
    title: 'Energy Transition',
    body: 'Licensed hydrogen-ready burner expertise supports KSA\'s hydrogen export economy and NEOM Green Hydrogen. WHRU systems reduce fuel consumption by up to 30%, directly supporting decarbonisation targets.',
    badge: 'Hydrogen Ready',
    badgeColor: '#1A3A5C',
  },
  {
    icon: '🎓',
    title: 'Human Capital Development',
    body: 'AI-powered Saudi Engineering Academy, 12-month rotational programmes and UnitBirwelco UK placements. Saudi-certified credentials across combustion, digital manufacturing and data analytics.',
    badge: 'Saudi Academy',
    badgeColor: '#B8860B',
  },
  {
    icon: '🏗️',
    title: 'Giga-Project Readiness',
    body: 'ASME U & S certified fabrication, 250T heavy lift capability and a scalable 10,000 m² Riyadh facility — positioned to serve NEOM, industrial cities and the SAR 18B KSA fired-heater market.',
    badge: 'ASME U & S',
    badgeColor: '#006C35',
  },
  {
    icon: '🌍',
    title: 'Export Economy',
    body: 'By 2028, Triple Delta targets export of in-Kingdom manufactured equipment to GCC and global markets — turning Saudi industrial capability into a revenue-generating export asset.',
    badge: 'GCC Export 2028',
    badgeColor: '#1A3A5C',
  },
];

export default function VisionPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef?.current) return;
    const el = heroRef?.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs?.observe(el);
    return () => obs?.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-24"
        style={{
          background: 'linear-gradient(160deg, #071410 0%, #0D1F2D 55%, #0F2318 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 40%, rgba(184,134,11,0.10) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(0,108,53,0.10) 0%, transparent 50%)',
          }}
        />
        <div className="container-xl relative z-10">
          <div ref={heroRef} className="max-w-3xl">
            <span className="eyebrow block mb-5" style={{ color: 'var(--accent)' }}>
              Our Vision
            </span>
            <h1 className="text-hero-xl text-white mb-6">
              Saudi Arabia's industrial{' '}
              <span style={{ color: 'var(--cyan)' }}>decarbonisation platform</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(148,163,184,0.90)', maxWidth: '640px', lineHeight: '1.78' }}
            >
              By 2030, Triple Delta will be the Kingdom's leading ASME-certified EPC operator —
              exporting Saudi-owned technology to GCC and global markets, graduating Saudi
              engineers through an AI-powered academy, and eliminating industrial emissions
              through proven, in-Kingdom decarbonisation technology.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Vision 2030', 'Net Zero 2060', 'IKTVA', 'NEOM Ready', 'GCC Export']?.map((tag) => (
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

      {/* ── Localise–License–Operate ── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="container-xl">
          <div className="mb-14">
            <span className="eyebrow block mb-3" style={{ color: 'var(--primary)' }}>
              Operating Model
            </span>
            <h2 className="text-section-h2" style={{ color: 'var(--foreground)' }}>
              Localise · License · Operate
            </h2>
            <p
              className="mt-4 text-base max-w-xl"
              style={{ color: 'var(--muted)', lineHeight: '1.75' }}
            >
              Triple Delta's three-stage model turns global engineering expertise into
              sovereign Saudi industrial capability — and then exports it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {lloSteps?.map((step, idx) => (
              <div
                key={idx}
                className="card-hover rounded-xl overflow-hidden flex flex-col"
                style={{ border: `1px solid ${step?.border ?? step?.color + '30'}` }}
              >
                {/* Header band */}
                <div
                  className="px-8 py-6 flex items-center gap-4"
                  style={{ background: step?.bg }}
                >
                  <span
                    className="text-5xl font-extrabold leading-none"
                    style={{ color: step?.color, letterSpacing: '-0.04em', fontFamily: 'var(--font-sans)' }}
                  >
                    {step?.step}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: step?.color }}>
                      Stage {idx + 1}
                    </p>
                    <h3 className="text-card-h3" style={{ color: 'var(--foreground)' }}>
                      {step?.word}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-6 flex flex-col gap-5 flex-1" style={{ background: '#fff' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.72' }}>
                    {step?.description}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {step?.details?.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: step?.color }}
                        />
                        <span className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Objectives 2026–2030 ── */}
      <section className="section-pad" style={{ background: 'var(--dark)' }}>
        <div className="container-xl">
          <div className="mb-14">
            <span className="eyebrow block mb-3" style={{ color: 'var(--accent)' }}>
              Strategic Roadmap
            </span>
            <h2 className="text-section-h2 text-white">
              2026 → 2030{' '}
              <span style={{ color: 'var(--cyan)' }}>Objectives</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategicObjectives?.map((obj) => (
              <div
                key={obj?.year}
                className="card-hover rounded-xl p-8 flex flex-col gap-6"
                style={{ background: obj?.bg, border: `1px solid ${obj?.border}` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ color: obj?.color, letterSpacing: '-0.04em' }}
                  >
                    {obj?.year}
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `${obj?.color}20`, color: obj?.color }}
                  >
                    {obj?.title}
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {obj?.items?.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: obj?.color }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(148,163,184,0.85)' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision 2030 Alignment ── */}
      <section className="section-pad" style={{ background: '#F4F7F4' }}>
        <div className="container-xl">
          <div className="mb-14">
            <span className="eyebrow block mb-3" style={{ color: 'var(--primary)' }}>
              Vision 2030 Alignment
            </span>
            <h2 className="text-section-h2" style={{ color: 'var(--foreground)' }}>
              Six pillars of{' '}
              <span style={{ color: 'var(--primary)' }}>national alignment</span>
            </h2>
            <p
              className="mt-4 text-base max-w-xl"
              style={{ color: 'var(--muted)', lineHeight: '1.75' }}
            >
              Triple Delta was designed from inception to advance Saudi Arabia's Vision 2030
              industrial, environmental and human capital objectives.
            </p>
          </div>

          {/* Bento-style asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vision2030Alignments?.map((item, idx) => (
              <div
                key={item?.title}
                className={`card-hover rounded-xl p-7 flex flex-col gap-4 ${idx === 0 ? 'lg:col-span-2' : ''}`}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,108,53,0.12)',
                  boxShadow: '0 2px 20px rgba(0,108,53,0.05)',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item?.icon}</span>
                    <h3 className="font-bold text-base" style={{ color: 'var(--foreground)' }}>
                      {item?.title}
                    </h3>
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{
                      background: `${item?.badgeColor}15`,
                      color: item?.badgeColor,
                      border: `1px solid ${item?.badgeColor}30`,
                    }}
                  >
                    {item?.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.72' }}>
                  {item?.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #0D1F2D 0%, #0F2318 50%, #071410 100%)',
        }}
      >
        <div className="container-xl text-center">
          <span className="eyebrow block mb-4" style={{ color: 'var(--accent)' }}>
            Join the Platform
          </span>
          <h2 className="text-section-h2 text-white mb-4">
            Strategic partners. IKTVA partners. EPC awards.
          </h2>
          <p
            className="text-base mb-10"
            style={{ color: 'rgba(255,255,255,0.70)', maxWidth: '560px', margin: '0 auto 2.5rem' }}
          >
            Triple Delta is actively seeking JV partners, IKTVA/localisation programme partners,
            EPC project awards and industrial/PIF investment partnerships.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="/#contact" className="btn-primary">
              Start a Conversation
            </a>
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white"
              style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.08)' }}
            >
              Our Mission →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
