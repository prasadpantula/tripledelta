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
{ value: '2026', label: 'KSA Localisation Target' },
{ value: '100%', label: 'Value Chain Coverage' },
{ value: 'R&D', label: 'Through Maintenance' },
{ value: 'KSA', label: 'In-Kingdom Operations' }];


const services = [
{ title: 'Technology Localisation', desc: 'Full localisation of ISS technology capabilities within the Kingdom of Saudi Arabia — from R&D through to operational maintenance.' },
{ title: 'Process Technology Solutions', desc: 'Advanced process technology solutions for the oil, gas, petrochemical and industrial sectors across the full project lifecycle.' },
{ title: 'R&D & Innovation', desc: 'In-Kingdom research and development capability, enabling continuous technology advancement and local innovation.' },
{ title: 'Engineering & Design', desc: 'Detailed engineering and design services leveraging ISS proprietary technology and process expertise.' },
{ title: 'Operations & Maintenance', desc: 'Comprehensive operations and maintenance services ensuring sustained performance of deployed ISS technologies.' },
{ title: 'Vision 2030 Aligned Delivery', desc: 'All ISS capabilities are structured to maximise IKTVA compliance and support Saudi Arabia\'s industrial transformation objectives.' }];


export default function ISSPage() {
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
              <AppImage src="/assets/images/ISS_logo-1790673849770.png" alt="Innovative Synergy Solutions ISS logo" width={96} height={96} className="object-contain" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full" style={{ background: 'rgba(135,206,235,0.2)', color: '#87CEEB', border: '1px solid rgba(135,206,235,0.4)' }}>JV Strategic Partner</span>
              <h1 className="text-white font-extrabold" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}>Innovative Synergy Solutions</h1>
              <p className="mt-2 font-semibold" style={{ color: 'rgba(220,240,255,0.85)', fontSize: '1.15rem' }}>Full-Spectrum Technology Localisation — R&D Through Maintenance, Built in KSA</p>
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

      {/* Full-width Representative Photo */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(320px, 50vw, 600px)' }}>
        <img
          src="https://img.rocket.new/generatedImages/rocket_gen_img_4c4425ca6-1790676170026.png"
          alt="Innovative Synergy Solutions process technology facility showing advanced industrial process equipment and engineering operations"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80';
          }} />
        
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(2,62,138,0.1) 0%, rgba(2,62,138,0.05) 50%, rgba(2,62,138,0.4) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container-xl">
            <span className="inline-block text-sm font-semibold px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.92)', color: '#023E8A' }}>
              Innovative Synergy Solutions — Process Technology & Engineering
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
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">A Strategic JV Partnership — ISS Technology Fully Localised in KSA</h2>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(220,240,255,0.88)' }}>
                    Triple Delta and Innovative Synergy Solutions (ISS) are establishing a Joint Venture partnership to fully localise ISS's technology capabilities within the Kingdom of Saudi Arabia as part of Triple Delta's 2026–2030 strategic objectives. ISS technologies are integrated across the full value chain — from R&D through to maintenance — under one roof in the Kingdom. This is a complete technology localisation partnership, not a licensing or distribution arrangement.
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
                Technology Localisation from R&D to Maintenance
              </h2>
              <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: '#2C5F7A', lineHeight: '1.8' }}>
                <p>
                  Innovative Synergy Solutions (ISS) is a specialist process technology company whose capabilities are being fully localised within the Kingdom of Saudi Arabia as part of Triple Delta's 2026–2030 strategic objectives.
                </p>
                <p>
                  ISS technologies are integrated across the full value chain — from R&D through to maintenance — under one roof in the Kingdom. This comprehensive approach ensures that Saudi industry gains not just access to ISS technology, but the full capability to develop, deploy and maintain it locally.
                </p>
                <p>
                  The ISS partnership is a cornerstone of Triple Delta's Vision 2030 alignment — creating genuine in-Kingdom technology capability rather than dependency on international supply chains. By localising ISS's full R&D, engineering, manufacturing and maintenance capability, Triple Delta is building a sustainable, self-sufficient technology base in the Kingdom.
                </p>
                <p>
                  ISS's process technology expertise spans the oil, gas, petrochemical and industrial sectors — providing Triple Delta with a broad technology platform to serve Saudi Arabia's diverse industrial base.
                </p>
              </div>
              <a
                href="https://issprocess.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-10 self-start inline-flex items-center gap-2"
                style={{ fontSize: '1rem', padding: '14px 28px' }}>
                
                Visit ISS Website
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-5">
                <div className="rounded-2xl p-7" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: '#023E8A' }}>Strategic Alignment</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Vision 2030', 'IKTVA Compliant', 'In-Kingdom R&D', 'Technology Localisation', '2026–2030 Roadmap', 'Industrial Transformation'].map((tag) =>
                    <span key={tag} className="text-sm font-semibold px-4 py-2 rounded-lg" style={{ background: '#ffffff', color: '#023E8A', border: '1px solid #B8D9EC' }}>{tag}</span>
                    )}
                  </div>
                </div>
                <div className="rounded-2xl p-7" style={{ background: '#F0F8FF', border: '1px solid #B8D9EC' }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: '#023E8A' }}>Full Value Chain Coverage</h3>
                  <ul className="flex flex-col gap-3">
                    {[
                    'Research & Development (R&D)',
                    'Technology Engineering & Design',
                    'In-Kingdom Manufacturing',
                    'Installation & Commissioning',
                    'Operations Support',
                    'Long-Term Maintenance'].
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
              ISS's full technology localisation capability — being built in the Kingdom through the Triple Delta JV partnership.
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
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Access ISS Technology in the Kingdom</h2>
            <p className="mb-8 text-base" style={{ color: 'rgba(220,240,255,0.85)', maxWidth: '560px', margin: '0 auto 2rem' }}>
              Through Triple Delta's JV partnership, Saudi industry gains access to ISS's full technology capability — localised, developed and maintained entirely within the Kingdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary" style={{ background: '#ffffff', color: '#023E8A', fontWeight: 700 }}>
                Contact Triple Delta
              </Link>
              <a href="https://issprocess.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl border-2 transition-all" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}>
                Visit ISS Website
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>);

}