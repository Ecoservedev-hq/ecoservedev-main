import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnershipsHeroSection from './components/PartnershipsHeroSection';
import PartnershipEcosystemSection from './components/PartnershipEcosystemSection';
import GlobalEngagementsSection from './components/GlobalEngagementsSection';
import WorkWithUsSection from './components/WorkWithUsSection';

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PartnershipsHeroSection />
      <PartnershipEcosystemSection />
      <GlobalEngagementsSection />
      <WorkWithUsSection />
      <Footer />
    </main>
  );
}