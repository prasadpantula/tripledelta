import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProofBar from '@/app/components/ProofBar';
import CapabilitiesSection from '@/app/components/CapabilitiesSection';
import FlowBar from '@/app/components/FlowBar';
import ManufacturingSection from '@/app/components/ManufacturingSection';
import TechnologySection from '@/app/components/TechnologySection';
import PartnersSection from '@/app/components/PartnersSection';
import AboutSection from '@/app/components/AboutSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProofBar />
      <CapabilitiesSection />
      <FlowBar />
      <ManufacturingSection />
      <TechnologySection />
      <PartnersSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}