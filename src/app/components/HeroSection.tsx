'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef?.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-end min-h-screen overflow-hidden"
      style={{ minHeight: '760px' }}
    >
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ken-burns absolute inset-0" style={{ willChange: 'transform' }}>
          <AppImage
            src="/assets/images/image-1-1-1790608472645.jpeg"
            alt="Triple Delta Riyadh manufacturing facility interior showing overhead crane, welding bays and polished concrete floor"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Sky blue gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(2,62,138,0.90) 0%, rgba(0,119,182,0.75) 40%, rgba(0,180,216,0.40) 75%, rgba(135,206,235,0.15) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, rgba(240,248,255,0.6) 0%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container-xl w-full pb-24 pt-40"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(0, 180, 216, 0.18)',
              border: '1px solid rgba(0, 180, 216, 0.45)',
              color: '#87CEEB',
              backdropFilter: 'blur(4px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#87CEEB' }}
            />
            Saudi Industrial Technology · Engineering · Manufacturing
          </div>
        </div>

        {/* H1 */}
        <h1 className="text-hero-xl text-white mb-6 max-w-3xl">
          Built in the Kingdom.<br />
          <span style={{ color: '#87CEEB' }}>Engineered for the World.</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg leading-relaxed mb-10 max-w-xl font-medium"
          style={{ color: 'rgba(226, 240, 255, 0.88)' }}
        >
          Triple Delta combines Saudi-owned innovation, global engineering expertise and in-Kingdom manufacturing to deliver high-end engineered equipment, EPC solutions and industrial decarbonisation technologies.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a href="#capabilities" className="btn-primary">
            Explore Our Capabilities
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Discuss a Project
          </a>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex items-center gap-3 mt-16 opacity-50">
          <div
            className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5"
          >
            <div
              className="w-1 h-2 rounded-full bg-white"
              style={{ animation: 'scrollHint 2s ease-in-out infinite' }}
            />
          </div>
          <span className="text-white text-xs font-medium tracking-widest uppercase">Scroll</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollHint {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}