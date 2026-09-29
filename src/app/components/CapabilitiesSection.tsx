'use client';

import React, { useEffect, useRef } from 'react';

const capabilities = [
  {
    num: '01',
    title: 'Engineering & EPC',
    desc: 'Concept studies, FEED, detailed design, process and combustion engineering, CFD, multidisciplinary engineering, procurement, project management, construction and commissioning.',
    color: '#0077B6',
    bg: '#EBF5FB',
    border: '#0077B6',
    numColor: '#0077B6',
    icon: '⚙️',
  },
  {
    num: '02',
    title: 'Flares & Combustion',
    desc: 'Flare tips, sonic systems, stacks, ignition systems, knock-out drums, flare gas recovery, fired equipment and proprietary HP Air Assist technology.',
    color: '#0096C7',
    bg: '#E8F8FC',
    border: '#0096C7',
    numColor: '#0096C7',
    icon: '🔥',
  },
  {
    num: '03',
    title: 'Process & Thermal Systems',
    desc: 'Fired heaters, WHRU, pressure equipment, heat exchangers, process skids and modular energy-processing systems engineered for demanding service.',
    color: '#023E8A',
    bg: '#EBF0FA',
    border: '#023E8A',
    numColor: '#023E8A',
    icon: '🌡️',
  },
  {
    num: '04',
    title: 'Environmental Technology',
    desc: 'Emissions reduction, flare monitoring, VOC and air-emissions solutions, digital environmental monitoring and industrial environmental compliance support.',
    color: '#0077B6',
    bg: '#EBF5FB',
    border: '#0077B6',
    numColor: '#0077B6',
    icon: '🌿',
  },
  {
    num: '05',
    title: 'Energy Transition',
    desc: 'Hydrogen-ready combustion, waste-heat recovery, CCUS integration and cleaner industrial energy solutions designed for the transition ahead.',
    color: '#0096C7',
    bg: '#E8F8FC',
    border: '#0096C7',
    numColor: '#0096C7',
    icon: '⚡',
  },
  {
    num: '06',
    title: 'Lifecycle Services',
    desc: 'Installation, maintenance, shutdown and T&I support, optimisation, retrofit engineering and long-term support for critical industrial assets.',
    color: '#023E8A',
    bg: '#EBF0FA',
    border: '#023E8A',
    numColor: '#023E8A',
    icon: '🔧',
  },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1)';
          section.style.opacity = '1';
          const cards = cardsRef.current?.querySelectorAll('.cap-card');
          cards?.forEach((card, i) => {
            const el = card as HTMLElement;
            setTimeout(() => {
              el.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 90);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    section.style.opacity = '0';
    const cards = cardsRef.current?.querySelectorAll('.cap-card');
    cards?.forEach((card) => {
      const el = card as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="section-pad"
      style={{ background: '#ffffff' }}
    >
      <div className="container-xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow mb-3 block" style={{ color: '#0096C7' }}>
            One integrated industrial platform
          </span>
          <h2 className="text-section-h2 mb-5" style={{ color: '#0C2340' }}>
            From first engineering principle<br className="hidden sm:block" /> to operating asset.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#2C5F7A', fontSize: '1.05rem' }}>
            Triple Delta brings research, engineering, fabrication, project delivery and lifecycle support together — shortening interfaces and turning specialist technology into deployable Saudi industrial capability.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="cap-card card-hover rounded-xl p-7 flex flex-col gap-4"
              style={{
                background: cap.bg,
                border: `1px solid ${cap.border}25`,
                borderTop: `4px solid ${cap.border}`,
                boxShadow: `0 2px 16px 0 ${cap.border}12`,
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="capability-card-number"
                  style={{ color: cap.numColor, fontSize: '0.8rem' }}
                >
                  {cap.num}
                </span>
                <span className="text-2xl">{cap.icon}</span>
              </div>
              <h3 className="text-card-h3" style={{ color: cap.color }}>
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#374151', lineHeight: '1.72' }}>
                {cap.desc}
              </p>
              <div
                className="h-0.5 w-10 rounded-full mt-1"
                style={{ background: cap.border }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}