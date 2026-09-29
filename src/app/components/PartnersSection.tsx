'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const partners = [
  {
    name: 'UnitBirwelco',
    logo: '/assets/images/image-1-3-1790611114036.png',
    logoAlt: 'UnitBirwelco logo — global engineering and manufacturing company',
    tagline: 'Engineering & EPC Excellence',
    heritage: '120+ Years of Heritage',
    url: 'https://www.unitbirwelco.com/',
    pageUrl: '/partners/unitbirwelco',
    hasLogo: true,
    abbr: 'UB',
    accentColor: '#0077B6',
    lightBg: '#EBF5FB',
    tagColor: '#EBF5FB',
    tagText: '#023E8A',
    description:
      'UnitBirwelco brings over 120 years of world-class engineering heritage to Triple Delta — delivering full-service EPC from research and design through manufacturing, installation and long-term maintenance. As Triple Delta\'s exclusive technology licensor, UnitBirwelco\'s IP is now being localised for the Kingdom of Saudi Arabia.',
    services: [
      'Fired Heaters — Open-Art, Cracking & Reformer Furnaces',
      'Flare Systems — Pipe, Sonic & Sonajet™ Flares',
      'Pressure Equipment & Heat Exchangers',
      'Flare Gas Recovery Packages',
      'Exotic Materials & High-Pressure Systems',
      'Full EPC — Design to Maintenance',
    ],
    certifications: ['ASME U & S', 'ISO 9001', 'ISO 14001', 'EC PED', 'OHSAS 18001', 'NB R · BS EN1090 EXC 4'],
    clients: ['BP', 'Shell', 'ExxonMobil', 'ADNOC', 'Aramco'],
    highlight: 'Carbon-negative operations · Active projects across 7 countries',
  },
  {
    name: 'Thermo Design Engineering',
    logo: '/assets/images/TDE_logo-1790673862256.webp',
    logoAlt: 'Thermo Design Engineering TDE logo',
    tagline: 'Energy Processing & Modularisation',
    heritage: 'Turnkey Project Expertise',
    url: 'https://www.thermodesign.com/en/',
    pageUrl: '/partners/tde',
    hasLogo: true,
    abbr: 'TDE',
    accentColor: '#0096C7',
    lightBg: '#E8F8FC',
    tagColor: '#E8F8FC',
    tagText: '#023E8A',
    description:
      'Thermo Design Engineering delivers integrated energy-processing engineering, modularisation and fabrication with proven turnkey project expertise. TDE strengthens Triple Delta\'s capability across both conventional energy and energy-transition applications — from concept through commissioning.',
    services: [
      'Integrated Energy-Processing Engineering',
      'Modularisation & Fabrication',
      'Turnkey Project Delivery',
      'Conventional Energy Applications',
      'Energy-Transition Engineering',
      'Process Systems Design',
    ],
    certifications: [],
    clients: [],
    highlight: 'Modular fabrication expertise · Conventional & transition energy markets',
  },
  {
    name: 'CECO Environmental',
    logo: '/assets/images/image-1790674471190.png',
    logoAlt: 'CECO Environmental logo — industrial environmental technology company',
    tagline: 'Industrial Environmental Technology',
    heritage: 'Air · Water · Emissions',
    url: 'https://www.cecoenviro.com/',
    pageUrl: '/partners/ceco',
    hasLogo: true,
    abbr: 'CECO',
    accentColor: '#023E8A',
    lightBg: '#EBF0FA',
    tagColor: '#EBF0FA',
    tagText: '#023E8A',
    description:
      'CECO Environmental is a specialist in industrial environmental and process technologies — covering industrial air, water treatment, emissions management and energy-transition markets. CECO\'s environmental platform underpins Triple Delta\'s decarbonisation offering and industrial compliance capability in the Kingdom.',
    services: [
      'Industrial Air Quality Solutions',
      'Water Treatment Technologies',
      'Emissions Management Systems',
      'Environmental Process Technologies',
      'Energy-Transition Market Solutions',
      'Industrial Compliance Support',
    ],
    certifications: [],
    clients: [],
    highlight: 'Environmental compliance · Industrial decarbonisation technologies',
  },
  {
    name: 'Innovative Synergy Solutions',
    logo: '/assets/images/ISS_logo-1790673849770.png',
    logoAlt: 'Innovative Synergy Solutions ISS logo',
    tagline: 'Technology Localisation & R&D',
    heritage: 'R&D to Maintenance',
    url: 'https://issprocess.com',
    pageUrl: '/partners/iss',
    hasLogo: true,
    abbr: 'ISS',
    accentColor: '#0077B6',
    lightBg: '#EBF5FB',
    tagColor: '#EBF5FB',
    tagText: '#023E8A',
    description:
      'Innovative Synergy Solutions (ISS) is a core technology partner whose capabilities are being fully localised within the Kingdom of Saudi Arabia as part of Triple Delta\'s 2026–2030 strategic objectives. ISS technologies are integrated across the full value chain — from R&D through to maintenance — under one roof in the Kingdom.',
    services: [
      'Technology Localisation in KSA',
      'R&D to Maintenance Integration',
      'In-Kingdom Capability Development',
      'Strategic Technology Partnership',
      'Vision 2030 Aligned Delivery',
      'Full Value-Chain Integration',
    ],
    certifications: [],
    clients: [],
    highlight: 'Full localisation in KSA · Integrated R&D through Maintenance',
  },
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll('.partner-card-anim');
    cards.forEach((c) => {
      const el = c as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((c, i) => {
            const el = c as HTMLElement;
            setTimeout(() => {
              el.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="section-pad"
      style={{ background: '#F0F8FF' }}
    >
      <div className="container-xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow block mb-3" style={{ color: '#0096C7' }}>
            Joint Venture Partnerships · Not Ordinary Marketing
          </span>
          <h2 className="text-section-h2 mb-5" style={{ color: '#0C2340' }}>
            Bringing global expertise<br className="hidden sm:block" /> to KSA through strategic JVs.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#2C5F7A', fontSize: '1.05rem' }}>
            Triple Delta is partnering with four world-class global companies to establish them in the Kingdom of Saudi Arabia as Joint Venture strategic partnerships — bringing their full global expertise, technology and capabilities directly into KSA. This is not a marketing arrangement. These are full JV partnerships.
          </p>
        </div>

        {/* Partner Cards Grid — one per row on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {partners.map((p) => (
            <div
              key={p.name}
              className="partner-card-anim rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: '#ffffff',
                border: `1px solid ${p.accentColor}22`,
                boxShadow: `0 6px 32px 0 ${p.accentColor}14`,
              }}
            >
              {/* Colored Header Banner */}
              <div
                className="px-7 pt-7 pb-6"
                style={{
                  background: p.lightBg,
                  borderBottom: `3px solid ${p.accentColor}`,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  {/* Logo */}
                  <div className="flex items-center" style={{ minHeight: '56px' }}>
                    <div
                      className="relative h-14 w-[180px] rounded-xl overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.95)', padding: '6px 10px', border: `1px solid ${p.accentColor}20` }}
                    >
                      <AppImage
                        src={p.logo}
                        alt={p.logoAlt}
                        fill
                        className="object-contain object-left"
                        sizes="180px"
                      />
                    </div>
                  </div>
                  {/* Heritage Tag */}
                  <span
                    className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
                    style={{ background: `${p.accentColor}15`, color: p.accentColor, border: `1px solid ${p.accentColor}30` }}
                  >
                    {p.heritage}
                  </span>
                </div>
                {/* Name + Tagline */}
                <h3 className="font-extrabold text-lg mb-1" style={{ color: '#0C2340' }}>{p.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: p.accentColor }}>
                  {p.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="px-7 pt-6 pb-7 flex-1 flex flex-col gap-5">
                {/* JV Badge */}
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `${p.accentColor}12`, color: p.accentColor, border: `1px solid ${p.accentColor}25` }}
                  >
                    🤝 JV Strategic Partner
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: '#374151', lineHeight: '1.75' }}>
                  {p.description}
                </p>

                {/* Services */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p.accentColor }}>
                    Services & Capabilities
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: p.accentColor }}
                        />
                        <span className="text-xs leading-snug" style={{ color: '#4B5563' }}>
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                {p.certifications.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: p.accentColor }}>
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md"
                          style={{ background: p.tagColor, color: p.tagText, border: `1px solid ${p.accentColor}25` }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notable Clients */}
                {p.clients && p.clients.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2.5" style={{ color: p.accentColor }}>
                      Notable Clients
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.clients.map((client) => (
                        <span
                          key={client}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md"
                          style={{ background: '#F3F4F6', color: '#374151', border: '1px solid #E5E7EB' }}
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlight */}
                <p className="text-xs italic font-medium" style={{ color: p.accentColor, opacity: 0.85 }}>
                  {p.highlight}
                </p>

                {/* CTA Buttons — Prominent Raised */}
                <div className="mt-auto pt-2 flex flex-wrap gap-3">
                  <Link
                    href={p.pageUrl}
                    className="btn-partner flex-1 justify-center"
                    style={{
                      background: p.accentColor,
                      boxShadow: `0 6px 20px ${p.accentColor}45, 0 2px 6px rgba(0,0,0,0.12)`,
                    }}
                  >
                    Full Partnership Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all"
                    style={{
                      background: `${p.accentColor}12`,
                      color: p.accentColor,
                      border: `1.5px solid ${p.accentColor}35`,
                    }}
                  >
                    Visit Website
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Partnership Statement */}
        <div
          className="mt-12 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 50%, #00B4D8 100%)' }}
        >
          <div className="flex-1">
            <p className="text-white font-bold text-lg mb-2">
              One platform. Four world-class JV partners. Built for the Kingdom.
            </p>
            <p className="text-sm" style={{ color: 'rgba(220,240,255,0.82)' }}>
              Triple Delta is the exclusive KSA and Middle East operating centre — establishing Joint Ventures with global technology leaders, localising their expertise and delivering full EPC capability under one roof.
            </p>
          </div>
          <Link
            href="/who-we-are"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all text-white"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1.5px solid rgba(255,255,255,0.45)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}
          >
            Our Full Story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}