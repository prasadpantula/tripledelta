'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

const techStats = [
  { value: '4–7 days', label: 'Stated retrofit shutdown range' },
  { value: '2006', label: 'Geneva invention recognition' },
  { value: '33 sites', label: 'Aramco deployment heritage' },
  { value: '500K t/yr', label: 'GHG reduction stated' },
];

function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updatePos(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePos(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (isDragging.current) updatePos(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (isDragging.current) updatePos(e.touches[0].clientX); };
    const onUp = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [updatePos]);

  return (
    <div
      ref={containerRef}
      className="ba-slider-container rounded-xl overflow-hidden"
      style={{ height: '280px', cursor: 'ew-resize' }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* AFTER image (full width, behind) */}
      <div className="absolute inset-0">
        <AppImage
          src="/assets/images/image-8-2-1790611073026.jpeg"
          alt="Flare stack after HP Air Assist — clean small blue flame with no visible smoke, low-emission state"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 40%)' }} />
        <span
          className="before-after-tag text-white"
          style={{ background: 'rgba(0,119,182,0.85)', right: '0.75rem', left: 'auto' }}
        >
          AFTER
        </span>
      </div>

      {/* BEFORE image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div style={{ position: 'absolute', inset: 0, width: `${(100 / sliderPos) * 100}%` }}>
          <AppImage
            src="/assets/images/image-8-1-1790608490880.jpeg"
            alt="Flare stack before HP Air Assist — large orange flame with heavy black smoke, high-emission state"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 40%)' }} />
          <span
            className="before-after-tag text-white"
            style={{ background: 'rgba(184,134,11,0.85)' }}
          >
            BEFORE
          </span>
        </div>
      </div>

      {/* Drag Handle */}
      <div
        className="ba-handle"
        style={{ left: `calc(${sliderPos}% - 1.5px)` }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3l-5 9 5 9M16 3l5 9-5 9" />
          </svg>
        </div>
      </div>

      {/* Drag hint */}
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.55)', color: '#ffffff', whiteSpace: 'nowrap' }}
      >
        ← Drag to compare →
      </div>
    </div>
  );
}

export default function TechnologySection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLElement[];
    const observers = els.map((el, idx) => {
      el.style.opacity = '0';
      el.style.transform = idx === 0 ? 'translateX(-24px)' : 'translateX(24px)';
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = 'opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)';
            el.style.transitionDelay = `${idx * 0.12}s`;
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
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
      id="technology"
      className="section-pad"
      style={{ background: '#ffffff' }}
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — HP Air Assist Feature Card */}
          <div
            ref={leftRef}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: 'linear-gradient(145deg, #023E8A 0%, #0077B6 100%)',
              boxShadow: '0 24px 64px rgba(2,62,138,0.30)',
            }}
          >
            <div className="p-8 pb-6">
              <span className="eyebrow block mb-3" style={{ color: '#87CEEB' }}>
                Saudi-owned innovation
              </span>
              <h3 className="text-card-h3 text-white mb-3 text-2xl font-bold">
                HP Air Assist
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,230,255,0.88)' }}>
                Patented flare improvement technology developed from Saudi industrial experience and deployed across 33 Aramco sites according to the Triple Delta technology record.
              </p>
            </div>

            {/* Interactive Before / After Slider */}
            <div className="px-4 pb-4">
              <BeforeAfterSlider />
            </div>

            {/* Bottom label */}
            <div
              className="px-8 py-4 flex items-center gap-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ color: '#87CEEB' }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-xs font-semibold tracking-wide" style={{ color: 'rgba(200,230,255,0.75)' }}>
                Interactive comparison — drag to see HP Air Assist combustion improvement
              </span>
            </div>
          </div>

          {/* RIGHT — Stats & Text */}
          <div ref={rightRef} className="flex flex-col justify-center gap-8 py-4">
            <div>
              <span className="eyebrow block mb-4" style={{ color: '#0096C7' }}>
                Proven at industrial scale
              </span>
              <h2 className="text-section-h2 mb-5" style={{ color: '#0C2340' }}>
                Innovation that moves<br className="hidden sm:block" /> from patent to plant.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#2C5F7A', fontSize: '1.05rem', lineHeight: '1.72' }}>
                Triple Delta's technology heritage is anchored in combustion engineering and real operating experience. The HP Air Assist programme demonstrates the model: identify a high-value operating problem, engineer a practical solution, validate it at scale, then localise its delivery.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {techStats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl p-5 border flex flex-col gap-1"
                  style={{
                    background: '#F0F8FF',
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

            {/* ASME badge */}
            <div
              className="flex items-center gap-4 rounded-xl p-5 border"
              style={{ background: '#F0F8FF', borderColor: '#B8D9EC' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-extrabold text-sm text-white"
                style={{ background: '#0077B6' }}
              >
                ASME
              </div>
              <div>
                <span className="font-bold text-sm block" style={{ color: '#0C2340' }}>
                  ASME U &amp; S Certified
                </span>
                <span className="text-xs" style={{ color: '#2C5F7A' }}>
                  Certified capability through the industrial platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}