'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Mission', href: '/mission' },
  { label: 'Vision', href: '/vision' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Why Trust Us', href: '/trust' },
  { label: 'Our Team', href: '/team' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400`}
        style={{
          transition: 'background 0.35s, padding 0.35s, box-shadow 0.35s',
          background: scrolled
            ? 'rgba(2, 62, 138, 0.97)'
            : 'linear-gradient(180deg, rgba(2,62,138,0.88) 0%, rgba(0,119,182,0.65) 70%, transparent 100%)',
          boxShadow: scrolled ? '0 2px 32px rgba(2,62,138,0.45)' : 'none',
          paddingTop: scrolled ? '0.75rem' : '1rem',
          paddingBottom: scrolled ? '0.75rem' : '1rem',
        }}
      >
        <div className="container-xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/triple-delta-logo1-1790614295084.jpeg"
                alt="Triple Delta Logo"
                style={{ height: 32, width: 'auto', borderRadius: 4, display: 'block', background: '#fff', padding: '2px 4px' }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks?.map((link) => (
              link?.href?.startsWith('/') && !link?.href?.startsWith('/#') ? (
                <Link
                  key={link?.label}
                  href={link?.href}
                  className="nav-link-hover text-sm font-semibold text-white/85 hover:text-white transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ) : (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="nav-link-hover text-sm font-semibold text-white/85 hover:text-white transition-colors duration-200"
                >
                  {link?.label}
                </a>
              )
            ))}
            <a
              href="/#contact"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Discuss a Project
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? '500px' : '0',
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          <div className="border-t border-white/10 px-6 py-6 flex flex-col gap-5" style={{ background: 'rgba(2,62,138,0.97)' }}>
            {navLinks?.map((link) => (
              link?.href?.startsWith('/') && !link?.href?.startsWith('/#') ? (
                <Link
                  key={link?.label}
                  href={link?.href}
                  onClick={handleMobileLink}
                  className="text-white/85 font-semibold text-lg hover:text-white transition-colors"
                >
                  {link?.label}
                </Link>
              ) : (
                <a
                  key={link?.label}
                  href={link?.href}
                  onClick={handleMobileLink}
                  className="text-white/85 font-semibold text-lg hover:text-white transition-colors"
                >
                  {link?.label}
                </a>
              )
            ))}
            <a
              href="/#contact"
              onClick={handleMobileLink}
              className="btn-primary text-center justify-center mt-2"
            >
              Discuss a Project
            </a>
          </div>
        </div>
      </header>
    </>
  );
}