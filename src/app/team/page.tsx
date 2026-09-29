'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const leadershipTeam = [
  {
    name: 'Mazen Mohammed Mashhour',
    role: 'Founder & CEO',
    company: 'Triple Delta',
    accent: '#006C35',
    bg: 'rgba(0,108,53,0.07)',
    border: 'rgba(0,108,53,0.22)',
    initials: 'MM',
    badge: 'Founder',
    badgeColor: '#006C35',
    highlights: [
      '32 years Saudi Aramco experience — upstream, refining & petrochemicals',
      'Inventor of the patented HP Air Assist System, deployed at 33 Aramco sites',
      'Gold Medal — Salon International des Inventions, Geneva 2006',
      'Multiple combustion and optimisation-software patents',
      '500K tonnes GHG/year eliminated through HP Air Assist commercialisation',
    ],
    expertise: ['Combustion Engineering', 'Flare Technology', 'Process Optimisation', 'IP Commercialisation'],
    quote:
      'We built HP Air Assist from a Saudi operating problem into a global solution. Triple Delta is the platform to do that again — at scale, across every discipline.',
  },
  {
    name: 'Cy Wilkinson',
    role: 'CEO',
    company: 'UnitBirwelco',
    accent: '#1A3A5C',
    bg: 'rgba(26,58,92,0.07)',
    border: 'rgba(26,58,92,0.22)',
    initials: 'CW',
    badge: 'Global Partner',
    badgeColor: '#1A3A5C',
    highlights: [
      'Leads UnitBirwelco — 120+ years of fired-heater and flare engineering heritage',
      'ASME U & S stamp holder with ISO 9001 and ISO 14001 certifications',
      'Active projects across UK, Sweden, UAE, Nigeria, India, Qatar and Australia',
      'Delivered projects for BP, Shell, ExxonMobil, ADNOC and Aramco',
      'Carbon-negative operations and full EPC capability from design to maintenance',
    ],
    expertise: ['Fired Heaters', 'EPC Delivery', 'Global Operations', 'ASME Certification'],
    quote:
      'UnitBirwelco brings 120 years of engineering heritage into the Kingdom. Together with Triple Delta, we are building the most capable thermal-equipment operation in the Middle East.',
  },
  {
    name: 'Andrew Williams',
    role: 'Finance Director',
    company: 'UnitBirwelco',
    accent: '#7C3D12',
    bg: 'rgba(124,61,18,0.07)',
    border: 'rgba(124,61,18,0.22)',
    initials: 'AW',
    badge: 'Finance',
    badgeColor: '#7C3D12',
    highlights: [
      'Finance Director at UnitBirwelco — overseeing financial strategy and governance',
      'Supports Triple Delta\'s commercial structuring and investment readiness',
      'Experienced in cross-border JV and licensing financial frameworks',
      'Aligned with IKTVA compliance and Saudi Vision 2030 reporting requirements',
    ],
    expertise: ['Financial Strategy', 'JV Structuring', 'Investment Readiness', 'Governance'],
    quote:
      'Sound financial governance underpins every technology partnership. Our role is to ensure Triple Delta is investment-ready and commercially structured for long-term growth.',
  },
  {
    name: 'Prasad Pantula',
    role: 'Engineering & PMT General Manager',
    company: 'Triple Delta',
    accent: '#5B2D8E',
    bg: 'rgba(91,45,142,0.07)',
    border: 'rgba(91,45,142,0.22)',
    initials: 'PP',
    badge: 'Engineering',
    badgeColor: '#5B2D8E',
    highlights: [
      'General Manager for Engineering and Project Management at Triple Delta',
      'Oversees multidisciplinary engineering: civil, structural, process, mechanical, piping, I&E',
      'Leads procurement, expediting and in-house EIC capability',
      'Drives FEED, detailed design, combustion studies and CFD delivery',
      'Responsible for project execution from concept through commissioning',
    ],
    expertise: ['Multidisciplinary Engineering', 'Project Management', 'FEED & Detailed Design', 'EPC Execution'],
    quote:
      'Engineering excellence is not a department — it is a discipline that runs through every phase of delivery, from the first concept study to final commissioning.',
  },
];

const hiringRoadmap = [
  {
    quarter: 'Q2 2026',
    role: 'Quality & IS Manager',
    status: 'Recruiting',
    statusColor: '#006C35',
    statusBg: 'rgba(0,108,53,0.12)',
    description: 'Leading quality assurance, ASME compliance and integrated safety management systems across fabrication and EPC delivery.',
  },
  {
    quarter: 'Q3 2026',
    role: 'Manufacturing Manager',
    status: 'Recruiting',
    statusColor: '#B8860B',
    statusBg: 'rgba(184,134,11,0.12)',
    description: 'Overseeing Riyadh manufacturing bays, production scheduling, CNC operations and Phase 2 facility expansion to 10,000 m².',
  },
  {
    quarter: 'Q4 2026',
    role: 'Construction Manager',
    status: 'Planned',
    statusColor: '#1A3A5C',
    statusBg: 'rgba(26,58,92,0.12)',
    description: 'Leading field construction, installation and commissioning activities for EPC project awards across KSA and the wider region.',
  },
];

const disciplines = [
  { label: 'Civil / Structural', icon: '🏗️', color: '#006C35' },
  { label: 'Process Engineering', icon: '⚗️', color: '#B8860B' },
  { label: 'Mechanical / Piping', icon: '🔧', color: '#1A3A5C' },
  { label: 'Instrument & Electrical', icon: '⚡', color: '#7C3D12' },
  { label: 'Procurement & Expediting', icon: '📦', color: '#5B2D8E' },
  { label: 'In-House EIC Capability', icon: '🛠️', color: '#006C35' },
];

export default function TeamPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef?.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs?.observe(el);
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
              'radial-gradient(circle at 75% 25%, rgba(0,108,53,0.13) 0%, transparent 55%), radial-gradient(circle at 15% 75%, rgba(26,58,92,0.10) 0%, transparent 50%)',
          }}
        />
        <div className="container-xl relative z-10">
          <div ref={heroRef} className="max-w-3xl">
            <span className="eyebrow block mb-5" style={{ color: 'var(--accent)' }}>
              Leadership
            </span>
            <h1 className="text-hero-xl text-white mb-6">
              The team behind{' '}
              <span style={{ color: 'var(--cyan)' }}>Triple Delta</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(148,163,184,0.90)', maxWidth: '640px', lineHeight: '1.78' }}
            >
              Decades of Saudi Aramco experience, global engineering heritage and proven IP
              commercialisation — combined into a single leadership team building Saudi Arabia's
              most capable industrial engineering enterprise.
            </p>
            <div className="flex flex-wrap gap-3">
              {['32 Yrs Aramco Experience', 'ASME Certified', 'Geneva Gold Medal', 'Global EPC Heritage']?.map((tag) => (
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

      {/* ── Leadership Cards ── */}
      <section className="section-pad" style={{ background: 'var(--paper)' }}>
        <div className="container-xl">
          <div className="mb-14">
            <span className="eyebrow block mb-3" style={{ color: 'var(--primary)' }}>
              Management Team
            </span>
            <h2 className="text-section-h2" style={{ color: 'var(--foreground)' }}>
              Experience that delivers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipTeam?.map((member) => (
              <div
                key={member?.name}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: '#fff',
                  border: `1px solid ${member?.border}`,
                  boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
                }}
              >
                {/* Card header */}
                <div
                  className="px-8 pt-8 pb-6 flex items-start gap-5"
                  style={{ background: member?.bg, borderBottom: `1px solid ${member?.border}` }}
                >
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0"
                    style={{ background: member?.accent }}
                  >
                    {member?.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-extrabold text-lg leading-tight" style={{ color: 'var(--foreground)' }}>
                        {member?.name}
                      </h3>
                      <span
                        className="text-xs font-bold px-2.5 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          background: `${member?.badgeColor}18`,
                          color: member?.badgeColor,
                          border: `1px solid ${member?.badgeColor}30`,
                        }}
                      >
                        {member?.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: member?.accent }}>
                      {member?.role}
                    </p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--muted)' }}>
                      {member?.company}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-6 flex flex-col gap-5 flex-1">
                  {/* Quote */}
                  <blockquote
                    className="text-sm italic leading-relaxed pl-4"
                    style={{
                      color: 'var(--muted)',
                      borderLeft: `3px solid ${member?.accent}`,
                      lineHeight: '1.72',
                    }}
                  >
                    "{member?.quote}"
                  </blockquote>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2">
                    {member?.highlights?.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--foreground)' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: member?.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {member?.expertise?.map((e) => (
                      <span
                        key={e}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${member?.accent}12`,
                          color: member?.accent,
                          border: `1px solid ${member?.accent}28`,
                        }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineering Disciplines ── */}
      <section className="section-pad" style={{ background: 'var(--dark)' }}>
        <div className="container-xl">
          <div className="mb-12">
            <span className="eyebrow block mb-3" style={{ color: 'var(--accent)' }}>
              Engineering Capability
            </span>
            <h2 className="text-section-h2 text-white">
              Disciplines we deliver{' '}
              <span style={{ color: 'var(--cyan)' }}>in-Kingdom</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {disciplines?.map((d) => (
              <div
                key={d?.label}
                className="rounded-xl px-6 py-5 flex items-center gap-4"
                style={{
                  background: `${d?.color}10`,
                  border: `1px solid ${d?.color}28`,
                }}
              >
                <span className="text-2xl">{d?.icon}</span>
                <span className="text-sm font-semibold text-white leading-snug">{d?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring Roadmap ── */}
      <section className="section-pad" style={{ background: '#F4F7F4' }}>
        <div className="container-xl">
          <div className="mb-12">
            <span className="eyebrow block mb-3" style={{ color: 'var(--primary)' }}>
              KSA Hiring Roadmap
            </span>
            <h2 className="text-section-h2" style={{ color: 'var(--foreground)' }}>
              Building the team for{' '}
              <span style={{ color: 'var(--primary)' }}>2026 delivery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hiringRoadmap?.map((item) => (
              <div
                key={item?.quarter}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,108,53,0.12)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: 'var(--muted)' }}
                  >
                    {item?.quarter}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: item?.statusBg,
                      color: item?.statusColor,
                    }}
                  >
                    {item?.status}
                  </span>
                </div>
                <h3 className="font-extrabold text-base leading-snug" style={{ color: 'var(--foreground)' }}>
                  {item?.role}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.68' }}>
                  {item?.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-12 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(0,108,53,0.08) 0%, rgba(26,58,92,0.08) 100%)',
              border: '1px solid rgba(0,108,53,0.18)',
            }}
          >
            <div>
              <h3 className="font-extrabold text-xl mb-2" style={{ color: 'var(--foreground)' }}>
                Join the Triple Delta team
              </h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                We are building Saudi Arabia's most capable industrial engineering enterprise. If you share that ambition, we want to hear from you.
              </p>
            </div>
            <a
              href="/#contact"
              className="btn-primary whitespace-nowrap flex-shrink-0"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
