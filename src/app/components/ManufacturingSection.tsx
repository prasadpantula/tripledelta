'use client';

import React, { useEffect, useRef } from 'react';

const mfgStats = [
  { value: '~3,000 m²', label: 'Phase 1 manufacturing area' },
  { value: '10,000 m²', label: 'Planned expandable footprint' },
  { value: '2 bays', label: 'Operational welding bays' },
  { value: '40%+', label: 'Local-content objective' },
];

export default function ManufacturingSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [textRef.current, imgRef.current].filter(Boolean) as HTMLElement[];
    const observers = elements.map((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="manufacturing"
      className="section-pad"
      style={{ background: '#F0F8FF' }}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">

          {/* Text + Stats */}
          <div ref={textRef}>
            <span className="eyebrow block mb-4" style={{ color: '#0096C7' }}>
              Made in Saudi Arabia
            </span>
            <h2 className="text-section-h2 mb-5" style={{ color: '#0C2340' }}>
              Not imported capability.<br />
              <span style={{ color: '#0077B6' }}>In-Kingdom capability.</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: '#2C5F7A', fontSize: '1.05rem', lineHeight: '1.72' }}
            >
              Triple Delta's Riyadh manufacturing operation is designed to localise specialist industrial equipment, shorten delivery cycles and build Saudi engineering and fabrication capability.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {mfgStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl p-5 border flex flex-col gap-1"
                  style={{
                    background: '#ffffff',
                    borderColor: '#B8D9EC',
                  }}
                >
                  <span
                    className="font-extrabold text-2xl leading-none"
                    style={{ color: '#0077B6', letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-semibold leading-snug mt-1"
                    style={{ color: '#2C5F7A' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image — welding/crane interior */}
          <div
            ref={imgRef}
            className="relative rounded-2xl overflow-hidden shadow-[0_16px_56px_rgba(0,119,182,0.14)]"
            style={{ height: '460px' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/image-2-1-1790612506064.jpeg"
              alt="Triple Delta Riyadh manufacturing facility interior — active welding bays with red welding screens, yellow overhead crane, industrial fabrication in progress"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            {/* Subtle bottom gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20"
              style={{ background: 'linear-gradient(to top, rgba(2,62,138,0.30) 0%, transparent 100%)' }}
            />
            {/* Location badge */}
            <div
              className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold tracking-wide text-white"
              style={{ background: 'rgba(0,119,182,0.82)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.18)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
              </svg>
              Riyadh, Kingdom of Saudi Arabia
            </div>
            {/* Active badge */}
            <div
              className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: '#0077B6', color: '#ffffff' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
              In-Kingdom Fabrication
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}