import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ background: '#023E8A', borderColor: 'rgba(135,206,235,0.15)' }}
    >
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span className="text-white font-extrabold text-sm tracking-[0.14em] uppercase">
              TRIPLE DELTA
            </span>
            <span className="text-xs font-medium tracking-wide" style={{ color: 'rgba(135,206,235,0.75)' }}>
              Engineering · Manufacturing · Installation · Industrial Technology
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium" style={{ color: 'rgba(135,206,235,0.75)' }}>
            <Link href="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link>
            <Link href="/mission" className="hover:text-white transition-colors">Mission</Link>
            <Link href="/vision" className="hover:text-white transition-colors">Vision</Link>
            <Link href="/team" className="hover:text-white transition-colors">Our Team</Link>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <span style={{ color: 'rgba(135,206,235,0.5)' }}>© 2026 Triple Delta · Built in the Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}