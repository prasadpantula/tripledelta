'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  'Research',
  'Design',
  'Engineering',
  'Manufacture',
  'Project Management',
  'Installation',
  'Commissioning',
  'Maintenance',
];

export default function FlowBar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = section.querySelectorAll('.flow-item');
          items.forEach((item, i) => {
            const el = item as HTMLElement;
            setTimeout(() => {
              el.style.transition = 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * 80);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const items = section.querySelectorAll('.flow-item');
    items.forEach((item) => {
      const el = item as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{ background: '#023E8A' }}
    >
      <div className="container-xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow mb-3 block" style={{ color: '#87CEEB' }}>
            Integrated execution
          </span>
          <h2 className="text-section-h2 text-white mb-4">
            Engineering intelligence.<br />
            Manufacturing discipline. Field execution.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(200,230,255,0.82)' }}>
            A continuous delivery chain from idea to operation, backed by specialist international JV partners and localised for Saudi industry.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-10">
          {steps.map((step, i) => (
            <div key={step} className="flow-item flow-step flex flex-col gap-3">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: 'rgba(135,206,235,0.55)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="text-sm font-semibold leading-snug"
                style={{ color: 'rgba(220,240,255,0.9)' }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}