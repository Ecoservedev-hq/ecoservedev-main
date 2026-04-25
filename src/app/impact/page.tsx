import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImpactHeroSection from './components/ImpactHeroSection';
import ImpactCountersSection from './components/ImpactCountersSection';
import ImpactDomainsSection from './components/ImpactDomainsSection';
import SDGAlignmentSection from './components/SDGAlignmentSection';
import ImpactProjectsSection from './components/ImpactProjectsSection';
import ImpactMeasurementSection from './components/ImpactMeasurementSection';

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
