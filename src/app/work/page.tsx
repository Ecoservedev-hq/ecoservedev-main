import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkHeroSection from './components/WorkHeroSection';
import WorkApproachSection from './components/WorkApproachSection';
import FocusAreasDetailSection from './components/FocusAreasDetailSection';
import FlagshipProjectsSection from './components/FlagshipProjectsSection';
import TransparencySection from './components/TransparencySection';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <WorkHeroSection />
      <WorkApproachSection />
      <FocusAreasDetailSection />
      <TransparencySection />
      <FlagshipProjectsSection />
      <Footer />
    </main>
  );
}
