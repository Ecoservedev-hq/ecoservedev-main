'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function PartnershipsHeroSection() {
  return (
    <section
      className="relative w-full min-h-[100vh] overflow-hidden bg-primary"
    >
      <AppImage
        src="/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.04 PM (1).jpeg"
        alt="Business professionals in a meeting room with glass walls, dim ambient corporate lighting, dark shadows, atmospheric low-key environment"
        fill
        priority
        className="object-cover opacity-55"
        sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[100vh] pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            CSR · Government · Institutions · Communities
          </span>
        </div>

        <h1 className="font-display font-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] max-w-4xl mb-6 text-white animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          CSR Partnerships & <br className="hidden md:block" /> Collaborations for Sustainable Impact
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          EcoServe Development Foundation partners with corporates, governments, institutions, and
          communities to design and implement high-impact CSR and sustainability initiatives aligned
          with ESG goals and global frameworks.
        </p>

        <div className="flex items-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link 
            href="#partner-form" 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-7 py-3 rounded-full text-sm font-700 font-display bg-white text-primary hover:bg-white/90 transition-all duration-300 whitespace-nowrap"
          >
            Partner With Us
            <Icon name="ArrowUpRightIcon" size={14} variant="outline" className="hidden sm:block" />
          </Link>
          <div className="w-px h-6 bg-white/30 hidden sm:block" />
          <Link
            href="#ecosystem"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-7 py-3 rounded-full text-sm font-700 font-display text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Explore Ecosystem
            <Icon name="ArrowDownIcon" size={14} variant="outline" className="hidden sm:block" />
          </Link>
        </div>
      </div>
    </section>);

}