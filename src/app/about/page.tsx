import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHeroSection from './components/AboutHeroSection';
import VisionMissionSection from './components/VisionMissionSection';
import EvolutionSection from './components/EvolutionSection';
import ApproachSection from './components/ApproachSection';
import LeadershipSection from './components/LeadershipSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHeroSection />
      <VisionMissionSection />
      <EvolutionSection />
      <ApproachSection />
      <LeadershipSection />
      <Footer />
    </main>
  );
}