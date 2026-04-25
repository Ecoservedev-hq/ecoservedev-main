import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsightsHeroSection from './components/InsightsHeroSection';
import InsightsGridSection from './components/InsightsGridSection';

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
