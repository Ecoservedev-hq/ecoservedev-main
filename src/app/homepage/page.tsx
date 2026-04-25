import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import FocusAreasSection from './components/FocusAreasSection';
import ImpactBentoSection from './components/ImpactBentoSection';
import NewsSection from './components/NewsSection';
import PartnerCTASection from './components/PartnerCTASection';
import ResourceHubSection from './components/ResourceHubSection';

export default function HomepagePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowWeWorkSection />
      <FocusAreasSection />
      <ImpactBentoSection />
      <NewsSection />
      <ResourceHubSection />
      <PartnerCTASection />
      <Footer />
    </main>
  );
}