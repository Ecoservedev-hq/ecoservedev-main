import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkHeroSection from './components/WorkHeroSection';
import FocusAreasDetailSection from './components/FocusAreasDetailSection';

export const metadata: Metadata = {
  title: 'Our Work | Climate, ESG & Inclusive Development',
  description: 'Explore EcoServeDev’s programs in climate action, digital inclusion, ESG, and sustainable development delivering measurable impact.',
  keywords: 'climate programs, sustainable development projects, ESG initiatives, digital inclusion programs, climate resilience, ecosystem restoration projects, rural development, tech for good solutions',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WorkHeroSection />
      <FocusAreasDetailSection />
      <Footer />
    </main>
  );
}
