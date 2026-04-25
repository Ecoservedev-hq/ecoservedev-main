'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function ImpactHeroSection() {
  return (
    <section
      className="relative w-full min-h-[75vh] overflow-hidden bg-primary"
      style={{ borderBottomLeftRadius: '80px' }}
      aria-label="Impact Hero">

      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_172358f67-1775077047617.png"
        alt="Aerial view of green forest with river winding through, lush canopy, environmental conservation landscape"
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/65 to-transparent" />

      {/* Geometric grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end min-h-[75vh] pb-20 pt-32">
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Data-Driven · Verified · Transparent
          </span>
        </div>

        <h1 className="font-display font-700 text-5xl md:text-7xl leading-[1.1] max-w-5xl mb-6">
          <span className="text-highlight">Delivering Measurable Impact</span>{' '}
          <span className="text-highlight">Across Communities,</span>{' '}
          <span className="text-highlight">Ecosystems & Systems</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-sans">
          At EcoServeDev, impact is intentionally designed, rigorously measured, and transparently
          verified — delivering scalable, data-driven outcomes across environmental, social, and
          technological domains.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/partnerships" className="btn-white">
            Partner With Us
            <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
          </Link>
          <Link
            href="#counters"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-700 font-display text-white border border-white/30 hover:bg-white/10 transition-all">

            View Impact Data
            <Icon name="ChevronDownIcon" size={16} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

}