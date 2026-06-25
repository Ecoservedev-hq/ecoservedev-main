import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHeroSection from './components/AboutHeroSection';
import VisionMissionSection from './components/VisionMissionSection';
import LeadershipSection from './components/LeadershipSection';

export const metadata: Metadata = {
  title: 'About EcoServeDev | Sustainable Development Organization',
  description: 'EcoServeDev is a nonprofit advancing climate action, ESG impact, and inclusive development through innovation and global partnerships.',
  keywords: 'nonprofit organization India, sustainable development NGO, ESG, SDGs, climate resilience, global partnerships, social impact organization, systems change, sustainability leadership',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHeroSection />
      <VisionMissionSection />
      <LeadershipSection />
      <Footer />
    </main>
  );
}