'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

function AnimatedSection({ children, className = '', delay = 0 }: {children: React.ReactNode;className?: string;delay?: number;}) {
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
{ value: '150+', label: 'Years Combined Heritage' },
{ value: '20+', label: 'Countries Served' },
{ value: '1000+', label: 'Installations Worldwide' },
{ value: '40+', label: 'Technology Brands' }];


const services = [
{ title: 'Industrial Air Quality', desc: 'Mist eliminators, scrubbers, cyclones, filters and custom air pollution control systems for industrial facilities.' },
{ title: 'Water & Fluid Handling', desc: 'Pump systems, separation technologies and fluid handling solutions for demanding industrial environments.' },
{ title: 'Emissions Management', desc: 'Thermal oxidisers, catalytic systems and emissions abatement technologies meeting the most stringent regulatory standards.' },
{ title: 'Environmental Process Technologies', desc: 'Integrated process solutions for environmental compliance across refining, petrochemical and industrial sectors.' },
{ title: 'Energy-Transition Solutions', desc: 'Decarbonisation technologies, carbon capture systems and low-emission process solutions for the energy transition.' },
{ title: 'Industrial Compliance Support', desc: 'Regulatory compliance consulting, technology selection and system integration to meet evolving environmental standards.' }];


export default function CECOPage() {
  return (
    <main className="overflow-x-hidden" style={{ background: '#ffffff' }}>
      <Header />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 60%, #00B4D8 100%)' }}>
        
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #87CEEB 0%, transparent 50%)' }} />
        <div className="container-xl relative z-10">
          <Link href="/#partners" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 opacity-75 hover:opacity-100 transition-opacity" style={{ color: '#87CEEB' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Back to Partners
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.97)', padding: '10px' }}>
              <AppImage src="/assets/images/image-1790674471190.png" alt="CECO Environmental logo" width={96} height={96} className="object-contain" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full" style={{ background: 'rgba(135,206,235,0.2)', color: '#87CEEB', border: '1px solid rgba(135,206,235,0.4)' }}>JV Strategic Partner</span>
              <h1 className="text-white font-extrabold" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}>CECO Environmental</h1>
              <p className="mt-2 font-semibold" style={{ color: 'rgba(220,240,255,0.85)', fontSize: '1.15rem' }}>Industrial Environmental & Decarbonisation Technologies — Localised for KSA</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {stats.map((s) =>
            <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: 'rgba(220,240,255,0.75)' }}>{s.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full-width Facility Photo */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(320px, 50vw, 600px)' }}>
        <img
          src="https://img.rocket.new/generatedImages/rocket_gen_img_4dffae47e-1790676172439.png"
          alt="CECO Environmental industrial air quality and emissions control equipment installation at a large industrial facility"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80';
          }} />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,62,138,0.1) 0%, rgba(2,62,138,0.05) 50%, rgba(2,62,138,0.4) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container-xl">
            <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.92)', color: '#023E8A' }}>
              CECO Environmental — Industrial Emissions & Air Quality Solutions
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">A Strategic JV Partnership — CECO's Environmental Platform in KSA</h2>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(220,240,255,0.88)' }}>
                    Triple Delta and CECO Environmental are establishing a Joint Venture partnership to bring CECO's complete industrial environmental and process technology portfolio into the Kingdom of Saudi Arabia. CECO's environmental platform underpins Triple Delta's decarbonisation offering and industrial compliance capability in the Kingdom — delivering real solutions for Saudi industry's environmental and energy-transition challenges.
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
                Specialist Industrial Environmental Technology
              </h2>
              <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: '#2C5F7A', lineHeight: '1.8' }}>
                <p>
                  CECO Environmental is a global leader in industrial environmental and process technologies — covering industrial air quality, water treatment, emissions management and energy-transition markets. With over 150 years of combined heritage across its technology brands, CECO serves customers in more than 20 countries.
                </p>
                <p>
                  Through the Triple Delta JV, CECO's environmental compliance and decarbonisation technologies are being localised for the Kingdom, enabling Saudi industrial operators to meet increasingly stringent environmental standards while supporting Vision 2030's sustainability objectives.
                </p>
                <p>
                  CECO's portfolio of 40+ technology brands covers the full spectrum of industrial environmental challenges — from mist elimination and air pollution control through to thermal oxidation, scrubbing and fluid handling — making it the most comprehensive environmental technology partner available to Saudi industry.
                </p>
                <p>
                  The CECO partnership is central to Triple Delta's environmental and decarbonisation offering, providing the technology backbone for Saudi Arabia's industrial transition to cleaner, more sustainable operations.
                </p>
              </div>
              <a
                href="https://www.cecoenviro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 self-start inline-flex items-center gap-2"
                style={{ fontSize: '1rem', padding: '14px 28px' }}>
                
                Visit CECO Environmental Website
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl p-7" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: '#023E8A' }}>Technology Markets</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Refining', 'Petrochemicals', 'Power Generation', 'Cement & Minerals', 'Metals & Mining', 'Chemical Processing', 'Oil & Gas', 'Food & Beverage'].map((tag) =>
                    <span key={tag} className="text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: '#ffffff', color: '#023E8A', border: '1px solid #B8D9EC' }}>{tag}</span>
                    )}
                  </div>
                </div>
                <div className="rounded-2xl p-7" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: '#023E8A' }}>KSA Environmental Alignment</h3>
                  <ul className="flex flex-col gap-3">
                    {[
                    'Saudi Vision 2030 Sustainability Goals',
                    'NCEC Environmental Compliance',
                    'Industrial Decarbonisation Roadmap',
                    'Aramco & SABIC Emissions Standards',
                    'In-Kingdom Environmental Technology'].
                    map((item) =>
                    <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ background: '#0077B6' }} />
                        <span className="text-sm" style={{ color: '#374151' }}>{item}</span>
                      </li>
                    )}
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
              CECO's full environmental technology portfolio — now available in the Kingdom through the Triple Delta JV partnership.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) =>
            <AnimatedSection key={s.title} delay={i * 0.07}>
                <div className="rounded-2xl p-7 h-full flex flex-col" style={{ background: '#ffffff', border: '1px solid #B8D9EC', boxShadow: '0 4px 16px rgba(0,119,182,0.06)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #0077B6, #00B4D8)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#023E8A' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4B7A94' }}>{s.desc}</p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 100%)' }}>
        <div className="container-xl text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Access CECO's Environmental Technologies in KSA</h2>
            <p className="mb-8 text-base" style={{ color: 'rgba(220,240,255,0.85)', maxWidth: '560px', margin: '0 auto 2rem' }}>
              Through Triple Delta's JV partnership, Saudi industry can now access CECO's full environmental and decarbonisation technology portfolio — delivered locally in the Kingdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary" style={{ background: '#ffffff', color: '#023E8A', fontWeight: 700 }}>
                Contact Triple Delta
              </Link>
              <a href="https://www.cecoenviro.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl border-2 transition-all" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}>
                Visit CECO Website
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>);

}