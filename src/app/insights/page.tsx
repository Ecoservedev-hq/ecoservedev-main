import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsightsHeroSection from './components/InsightsHeroSection';
import InsightsGridSection from './components/InsightsGridSection';

export const metadata: Metadata = {
  title: 'Sustainability Insights & Resources | EcoServeDev',
  description: 'Explore blogs and insights on climate action, ESG, sustainability, and technology for inclusive development.',
  keywords: 'sustainability blog, ESG insights, climate change articles, social innovation, tech for good, environmental insights, SDG knowledge, development sector trends',
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InsightsHeroSection />
      <InsightsGridSection />
      <Footer />
    </main>
  );
}
