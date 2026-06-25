import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImpactHeroSection from './components/ImpactHeroSection';
import ImpactCountersSection from './components/ImpactCountersSection';
import ImpactDomainsSection from './components/ImpactDomainsSection';
import SDGAlignmentSection from './components/SDGAlignmentSection';
import ImpactProjectsSection from './components/ImpactProjectsSection';
import ImpactMeasurementSection from './components/ImpactMeasurementSection';

export const metadata: Metadata = {
  title: 'Our Impact | ESG & SDG Verified Outcomes',
  description: 'Discover measurable impact across climate action, livelihoods, and digital inclusion aligned with global SDGs.',
  keywords: 'impact measurement, ESG impact, SDG outcomes, nonprofit impact India, climate impact data, social impact metrics, data-driven impact, verified outcomes, sustainability reporting',
};

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ImpactHeroSection />
      <ImpactCountersSection />
      <ImpactMeasurementSection />
      <ImpactDomainsSection />
      <SDGAlignmentSection />
      <ImpactProjectsSection />
      <Footer />
    </main>
  );
}
