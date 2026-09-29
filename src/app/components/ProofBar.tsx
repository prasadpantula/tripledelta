'use client';

import React, { useEffect, useRef } from 'react';

const metrics = [
  {
    value: '33',
    label: 'Aramco sites',
    sub: 'HP Air Assist deployment heritage',
  },
  {
    value: '500K',
    label: 'tonnes/year',
    sub: 'Stated GHG reduction across deployments',
  },
  {
    value: 'ASME',
    label: 'U & S Certified',
    sub: 'Certified capability through the industrial platform',
  },
  {
    value: 'KSA',
    label: 'In-Kingdom',
    sub: 'Engineering and manufacturing delivered in Saudi Arabia',
  },
];

const clientLogos = [
  { name: 'Saudi Aramco', abbr: 'Aramco' },
  { name: 'SABIC', abbr: 'SABIC' },
  { name: 'ADNOC', abbr: 'ADNOC' },
  { name: 'BP', abbr: 'BP' },
  { name: 'Shell', abbr: 'Shell' },
  { name: 'ExxonMobil', abbr: 'ExxonMobil' },
  { name: 'Saudi Aramco', abbr: 'Aramco' },
  { name: 'SABIC', abbr: 'SABIC' },
  { name: 'ADNOC', abbr: 'ADNOC' },
  { name: 'BP', abbr: 'BP' },
  { name: 'Shell', abbr: 'Shell' },
  { name: 'ExxonMobil', abbr: 'ExxonMobil' },
];

export default function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <>
      <section className="relative z-20 -mt-16 px-4">
        <div ref={ref} className="container-xl">
          <div
            className="rounded-xl shadow-[0_8px_48px_rgba(0,119,182,0.15)] overflow-hidden"
            style={{ background: '#ffffff' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {metrics?.map((m, i) => (
                <div
                  key={i}
                  className="metric-separator flex flex-col items-center text-center px-6 py-7 gap-1"
                >
                  <span className="stat-number">{m?.value}</span>
                  <span
                    className="text-sm font-700 font-bold mt-1"
                    style={{ color: '#0C2340' }}
                  >
                    {m?.label}
                  </span>
                  <span
                    className="text-xs leading-snug mt-0.5"
                    style={{ color: '#2C5F7A' }}
                  >
                    {m?.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section
        className="py-8 overflow-hidden"
        style={{ background: '#F0F8FF', borderTop: '1px solid #B8D9EC', borderBottom: '1px solid #B8D9EC', marginTop: '3rem' }}
      >
        <div className="container-xl mb-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest" style={{ color: '#0096C7' }}>
            Technology deployed with global industry leaders
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="ticker-track">
            {clientLogos?.map((logo, i) => (
              <div
                key={`a-${i}`}
                className="flex items-center justify-center mx-8 shrink-0"
                style={{ minWidth: '140px', height: '48px' }}
              >
                <div
                  className="px-5 py-2.5 rounded-lg font-extrabold text-sm tracking-wide"
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #B8D9EC',
                    color: '#023E8A',
                    boxShadow: '0 2px 8px rgba(0,119,182,0.08)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {logo?.abbr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}