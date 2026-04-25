'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function InsightsHeroSection() {
  return (
    <section
      className="relative w-full min-h-[50vh] overflow-hidden bg-primary"
      style={{ borderBottomLeftRadius: '80px' }}
      aria-label="Insights Hero"
    >
      {/* Geometric grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end min-h-[50vh] pb-16 pt-32">
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Research · Blogs · CSR Guides · Reports
          </span>
        </div>

        <h1 className="font-display font-700 text-5xl md:text-7xl leading-[1.1] max-w-4xl mb-6">
          <span className="text-highlight">Insights, Research</span>{' '}
          <span className="text-highlight">& Resources</span>
        </h1>

        <p className="text-white/80 text-lg max-w-2xl mb-8 leading-relaxed font-sans">
          Explore our latest blogs, research, and knowledge resources on sustainability, CSR,
          technology for development, and ecosystem restoration.
        </p>

        <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-3 max-w-md">
          <Icon name="MagnifyingGlassIcon" size={16} variant="outline" className="text-white/50" />
          <span className="text-white/40 text-sm font-sans">Search articles, research, guides...</span>
        </div>
      </div>
    </section>
  );
}
