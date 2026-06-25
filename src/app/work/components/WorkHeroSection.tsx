'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function WorkHeroSection() {
  return (
    <>
    <section
      className="relative w-full min-h-[100vh] overflow-hidden bg-primary"
      aria-label="Work & Innovation Hero">

      <AppImage
        src="/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.03 PM.jpeg"
        alt="Modern open office workspace with large windows, clean desks, and collaborative environment with natural light"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      {/* Geometric grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[100vh] pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Innovation · Action · Verified Impact
          </span>
        </div>

        <h1 className="font-display font-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] max-w-5xl mb-6 text-white animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Designing Scalable Solutions<br className="hidden md:block" /> for Complex Global Challenges
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          We design and implement scalable, systems-driven solutions across interconnected domains
          to address critical social and environmental challenges — integrating innovation,
          on-ground execution, and data-driven impact.
        </p>

        <div className="flex items-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link 
            href="/impact" 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-7 py-3 rounded-full text-sm font-700 font-display bg-white text-primary hover:bg-white/90 transition-all duration-300 whitespace-nowrap"
          >
            View Our Impact
            <Icon name="ArrowUpRightIcon" size={14} variant="outline" className="hidden sm:block" />
          </Link>
          <div className="w-px h-6 bg-white/30 hidden sm:block" />
          <Link
            href="#focus-areas"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-7 py-3 rounded-full text-sm font-700 font-display text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Explore Focus Areas
            <Icon name="ChevronDownIcon" size={14} variant="outline" className="hidden sm:block" />
          </Link>
        </div>
      </div>
    </section>

    {/* Separate Stats Strip */}
    <div className="bg-background py-8 md:py-12 relative z-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-accent/20">
          {[
            { label: 'Focus Areas', value: '3' },
            { label: 'Flagship Projects', value: '5' },
            { label: 'Technologies Deployed', value: '3+' },
            { label: 'SDGs Addressed', value: '8' },
          ].map((stat, i) => (
            <div key={stat.label} className="px-4 sm:px-6 text-center">
              <div className="font-display font-700 text-4xl md:text-5xl text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-xs font-sans uppercase tracking-[0.1em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}