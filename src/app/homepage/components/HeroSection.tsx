'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const [cardVisible, setCardVisible] = useState(true);

  return (
    <section
      className="relative w-full min-h-[92vh] overflow-hidden bg-primary"
      style={{ borderBottomLeftRadius: '100px' }}
      aria-label="Hero">

      {/* Background Image */}
      <AppImage
        src="https://images.unsplash.com/photo-1614953167872-5fdffc05440a"
        alt="Dense forest canopy with sunlight filtering through green leaves in a tropical ecosystem, dark lush environment"
        fill
        priority
        className="object-cover opacity-70"
        sizes="100vw" />


      {/* Gradient Scrim — strong bottom-left for white text legibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

      {/* Navigation overlay clearance handled by Header */}

      {/* Floating Impact Card — top right */}
      {cardVisible &&
      <div className="absolute top-24 right-6 md:right-12 bg-primary text-white p-6 md:p-7 rounded-[28px] w-68 md:w-76 shadow-2xl z-20 hidden md:block border border-white/10">
          <div className="flex justify-between items-start mb-5">
            <h3 className="text-base font-display font-700 leading-tight">
              Impact at a Glance
            </h3>
            <button
            onClick={() => setCardVisible(false)}
            className="hover:opacity-60 transition-opacity p-1"
            aria-label="Close card">

              <Icon name="XMarkIcon" size={16} variant="outline" />
            </button>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white/70 font-sans text-xs">Trees Planted</span>
              <span className="font-display font-700 text-accent">1,50,000+</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white/70 font-sans text-xs">Lives Impacted</span>
              <span className="font-display font-700 text-accent">1,500+</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white/70 font-sans text-xs">Economic Value</span>
              <span className="font-display font-700 text-accent">₹7M+</span>
            </div>
            <div className="flex items-center justify-between pb-1">
              <span className="text-white/70 font-sans text-xs">Partnerships</span>
              <span className="font-display font-700 text-accent">15+</span>
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <Link href="/homepage#impact" aria-label="View full impact data">
              <Icon name="ArrowUpRightIcon" size={20} variant="outline" className="text-white" />
            </Link>
          </div>
        </div>
      }

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end h-full min-h-[92vh] pb-20 pt-32">
        {/* Eyebrow */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Youth-Led · Innovation-Driven · Verified Impact
          </span>
        </div>

        {/* Headline with text-highlight editorial treatment */}
        <h1 className="font-display font-700 text-5xl md:text-7xl lg:text-8xl leading-[1.15] max-w-4xl mb-6">
          <span className="text-highlight">Sustainable Solutions.</span>{' '}
          <span className="text-highlight">Inclusive Futures.</span>{' '}
          <span className="text-highlight">Measurable Impact.</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/85 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-sans">
          EcoServe Development Foundation is a youth-led, innovation-driven non-profit delivering
          scalable climate action, inclusive development, and technology-enabled solutions across
          India and beyond.
        </p>

        {/* Supporting line */}
        <p className="text-accent/90 text-sm font-display font-600 mb-8 tracking-wide uppercase">
          Advancing data-driven development where it matters most
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link href="/partnerships" className="btn-white">
            Partner With Us
            <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
          </Link>
          <Link
            href="/homepage#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-700 font-display text-white border border-white/40 hover:bg-white/10 transition-all">

            Explore Our Work
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
          <Link
            href="/homepage#impact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-700 font-display text-white/80 hover:text-white transition-colors">

            View Impact
            <Icon name="ChevronDownIcon" size={16} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

}