'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

const stats = [
  { value: '120+', label: 'Years of Engineering Heritage' },
  { value: '7', label: 'Countries of Active Operation' },
  { value: '500+', label: 'Projects Delivered Globally' },
  { value: '33', label: 'Aramco Sites Served' },
];

const services = [
  { title: 'Fired Heaters', desc: 'Open-Art, Cracking & Reformer Furnaces designed and manufactured to the highest international standards.' },
  { title: 'Flare Systems', desc: 'Pipe, Sonic & Sonajet™ Flares — industry-leading combustion technology for safe, efficient flaring.' },
  { title: 'Pressure Equipment', desc: 'Heat exchangers, pressure vessels and exotic materials fabrication for demanding process environments.' },
  { title: 'Flare Gas Recovery', desc: 'Complete flare gas recovery packages reducing emissions and recovering valuable hydrocarbons.' },
  { title: 'Full EPC Delivery', desc: 'End-to-end engineering, procurement and construction from concept design through to long-term maintenance.' },
  { title: 'Carbon-Negative Manufacturing', desc: 'UnitBirwelco operates carbon-negative manufacturing facilities — a global first in heavy engineering.' },
];

export default function UnitBirwelcoPage() {
  return (
    <main className="overflow-x-hidden" style={{ background: '#ffffff' }}>
      <Header />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 60%, #00B4D8 100%)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #87CEEB 0%, transparent 50%)' }} />
        <div className="container-xl relative z-10">
          <Link href="/#partners" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#87CEEB' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Back to Partners
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.97)', padding: '10px' }}>
              <AppImage src="/assets/images/image-1-3-1790611114036.png" alt="UnitBirwelco logo" width={96} height={96} className="object-contain" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full" style={{ background: 'rgba(135,206,235,0.2)', color: '#87CEEB', border: '1px solid rgba(135,206,235,0.4)' }}>JV Strategic Partner</span>
              <h1 className="text-white font-extrabold" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}>UnitBirwelco</h1>
              <p className="mt-2 font-semibold" style={{ color: 'rgba(220,240,255,0.85)', fontSize: '1.15rem' }}>120+ Years of Global Engineering Heritage — Now Delivered in KSA</p>
            </div>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: 'rgba(220,240,255,0.75)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Facility Photo */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(320px, 50vw, 600px)' }}>
        <AppImage
          src="/assets/images/image-11-1-1790675911569.jpeg"
          alt="UnitBirwelco manufacturing facility — brick building with branded company vans parked outside"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,62,138,0.15) 0%, rgba(2,62,138,0.05) 50%, rgba(2,62,138,0.35) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container-xl">
            <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.92)', color: '#023E8A' }}>
              UnitBirwelco Manufacturing Facility — UK Operations
            </span>
          </div>
        </div>
      </section>

      {/* JV Partnership Statement */}
      <section className="py-16" style={{ background: '#F0F8FF' }}>
        <div className="container-xl">
          <AnimatedSection>
            <div className="rounded-2xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 100%)', boxShadow: '0 20px 60px rgba(0,119,182,0.25)' }}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">A Strategic JV Partnership — Not a Distribution Agreement</h2>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(220,240,255,0.88)' }}>
                    Triple Delta and UnitBirwelco are establishing a full Joint Venture partnership to bring UnitBirwelco's complete engineering capability, technology portfolio and manufacturing expertise directly into the Kingdom of Saudi Arabia. This is not a marketing or distribution arrangement — it is a full strategic partnership creating an in-Kingdom operating entity that delivers UnitBirwelco's global expertise locally, supporting Vision 2030 localisation objectives.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="font-extrabold mb-6" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#0C2340', lineHeight: 1.2 }}>
                Global Leaders in Thermal Equipment Solutions
              </h2>
              <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: '#2C5F7A', lineHeight: '1.8' }}>
                <p>
                  UnitBirwelco brings over 120 years of world-class engineering heritage to Triple Delta — delivering full-service EPC from research and design through manufacturing, installation and long-term maintenance.
                </p>
                <p>
                  As Triple Delta's exclusive technology licensor, UnitBirwelco's IP is now being localised for the Kingdom of Saudi Arabia, creating a direct route for Saudi industry to access proven global engineering capability without the delays and costs of international procurement.
                </p>
                <p>
                  UnitBirwelco operates carbon-negative manufacturing facilities and maintains active projects across 7 countries, serving the world's leading energy companies including BP, Shell, ExxonMobil, ADNOC and Aramco.
                </p>
                <p>
                  The UnitBirwelco group encompasses three specialist divisions: Birwelco (thermal equipment), IISP (inspection and integrity services), and Middle East operations — all of which will be accessible through the Triple Delta JV in KSA.
                </p>
              </div>
              <a
                href="https://www.unitbirwelco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 self-start inline-flex items-center gap-2"
                style={{ fontSize: '1rem', padding: '14px 28px' }}
              >
                Visit UnitBirwelco Website
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl p-7" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                  <h3 className="font-bold text-lg mb-5" style={{ color: '#023E8A' }}>Certifications & Standards</h3>
                  <div className="flex flex-wrap gap-2">
                    {['ASME U & S', 'ISO 9001', 'ISO 14001', 'EC PED', 'OHSAS 18001', 'NB R', 'BS EN1090 EXC 4'].map((cert) => (
                      <span key={cert} className="text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: '#ffffff', color: '#023E8A', border: '1px solid #B8D9EC' }}>{cert}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-7" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: '#023E8A' }}>Global Clients Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {['BP', 'Shell', 'ExxonMobil', 'ADNOC', 'Saudi Aramco', 'TotalEnergies', 'Chevron'].map((c) => (
                      <span key={c} className="text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: '#ffffff', color: '#374151', border: '1px solid #E5E7EB' }}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-7" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: '#023E8A' }}>Group Divisions</h3>
                  <ul className="flex flex-col gap-3">
                    {['Birwelco — Thermal Equipment & Flare Systems', 'IISP — Inspection & Integrity Services', 'Middle East — Regional Operations'].map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ background: '#0077B6' }} />
                        <span className="text-sm" style={{ color: '#374151' }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" style={{ background: '#F0F8FF' }}>
        <div className="container-xl">
          <AnimatedSection>
            <h2 className="font-extrabold text-center mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#0C2340' }}>
              Services & Capabilities
            </h2>
            <p className="text-center mb-12 text-base" style={{ color: '#2C5F7A', maxWidth: '600px', margin: '0 auto 3rem' }}>
              UnitBirwelco's full engineering capability — now available in the Kingdom through the Triple Delta JV partnership.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.07}>
                <div className="rounded-2xl p-7 h-full flex flex-col" style={{ background: '#ffffff', border: '1px solid #B8D9EC', boxShadow: '0 4px 16px rgba(0,119,182,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #0077B6, #00B4D8)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#023E8A' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4B7A94' }}>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 100%)' }}>
        <div className="container-xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Bring UnitBirwelco's Expertise to Your KSA Project</h2>
            <p className="mb-8 text-base" style={{ color: 'rgba(220,240,255,0.85)', maxWidth: '560px', margin: '0 auto 2rem' }}>
              Through Triple Delta's JV partnership, you can now access UnitBirwelco's full engineering capability, technology and manufacturing — delivered locally in the Kingdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary" style={{ background: '#ffffff', color: '#023E8A', fontWeight: 700 }}>
                Contact Triple Delta
              </Link>
              <a href="https://www.unitbirwelco.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl border-2 transition-all" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}>
                Visit UnitBirwelco
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
