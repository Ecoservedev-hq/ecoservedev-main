import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnershipsHeroSection from './components/PartnershipsHeroSection';
import PartnershipEcosystemSection from './components/PartnershipEcosystemSection';
import GlobalEngagementsSection from './components/GlobalEngagementsSection';
import WorkWithUsSection from './components/WorkWithUsSection';

export const metadata: Metadata = {
  title: 'Partner with EcoServe Development Foundation',
  description: 'Partner with EcoServe Development Foundation - CSR, government collaborations, institutional partnerships, and volunteering opportunities. Build measurable, sustainable impact across India.',
  keywords: 'CSR partnerships India, NGO partnerships India, corporate social responsibility projects, development sector partnerships, sustainability partnerships India, NGO collaborations, ESG implementation partners, nonprofit partnerships India, CSR implementation agency India, NGO for CSR funding, sustainability NGO India, volunteering opportunities NGO India, development consulting nonprofit, ecosystem restoration partnerships, social impact partnerships',
};

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