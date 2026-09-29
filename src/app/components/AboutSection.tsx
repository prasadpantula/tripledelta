'use client';

import React, { useEffect, useRef } from 'react';

const pillTags = [
  'Saudi-owned innovation',
  'Thermal equipment',
  'EPC delivery',
  'Environmental technology',
  'Energy transition',
  'JV Partnerships',
];

export default function AboutSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLElement[];
    const observers = els.map((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: 'linear-gradient(135deg, #023E8A 0%, #0077B6 60%, #00B4D8 100%)' }}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div ref={leftRef}>
            <span className="eyebrow block mb-4" style={{ color: '#87CEEB' }}>
              Triple Delta
            </span>
            <h2 className="text-section-h2 text-white leading-tight">
              Saudi industrial capability<br className="hidden sm:block" />
              <span style={{ color: '#87CEEB' }}> with global reach.</span>
            </h2>

            {/* Decorative rule */}
            <div
              className="mt-8 w-16 h-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, #87CEEB 0%, #00B4D8 100%)' }}
            />
          </div>

          {/* Right */}
          <div ref={rightRef} className="flex flex-col gap-6">
            <p className="text-base leading-relaxed" style={{ color: 'rgba(220,240,255,0.90)', fontSize: '1.05rem', lineHeight: '1.75' }}>
              Triple Delta is building an integrated Saudi engineering, manufacturing and technology enterprise around three principles: localise proven capability through JV partnerships, commercialise Saudi-owned innovation and develop the engineering talent required for long-term industrial capability.
            </p>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2 my-2">
              {pillTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#e2f0ff',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-base leading-relaxed" style={{ color: 'rgba(200,230,255,0.78)', fontSize: '1rem', lineHeight: '1.72' }}>
              Its model combines multidisciplinary engineering, specialist equipment, in-Kingdom fabrication, project execution, maintenance and environmental technology under a single industrial platform — delivered through four strategic JV partnerships with world-class global companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}