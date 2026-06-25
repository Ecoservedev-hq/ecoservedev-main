'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function ImpactHeroSection() {
  return (
    <section
      className="relative w-full min-h-[100vh] overflow-hidden bg-primary"
      aria-label="Impact Hero">

      <AppImage
        src="/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.04 PM.jpeg"
        alt="Aerial view of green forest with river winding through, lush canopy, environmental conservation landscape"
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

      {/* Geometric grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[100vh] pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Data-Driven · Verified · Transparent
          </span>
        </div>

        <h1 className="font-display font-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] max-w-5xl mb-6 text-white animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Delivering Measurable Impact<br className="hidden md:block" /> Across Communities, Ecosystems & Systems
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          At EcoServeDev, impact is intentionally designed, rigorously measured, and transparently
          verified — delivering scalable, data-driven outcomes across environmental, social, and
          technological domains.
        </p>

        <div className="flex items-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link 
            href="/partnerships" 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-7 py-3 rounded-full text-sm font-700 font-display bg-white text-primary hover:bg-white/90 transition-all duration-300 whitespace-nowrap"
          >
            Partner With Us
            <Icon name="ArrowUpRightIcon" size={14} variant="outline" className="hidden sm:block" />
          </Link>
          <div className="w-px h-6 bg-white/30 hidden sm:block" />
          <Link
            href="#counters"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-7 py-3 rounded-full text-sm font-700 font-display text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            View Impact Data
            <Icon name="ChevronDownIcon" size={14} variant="outline" className="hidden sm:block" />
          </Link>
        </div>
      </div>
    </section>);

}