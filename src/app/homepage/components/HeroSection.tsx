'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const [cardVisible, setCardVisible] = useState(true);

  return (
    <section
      className="relative w-full min-h-[100vh] overflow-hidden bg-primary"
      aria-label="Hero">

      <AppImage
        src="/assets/images/hero-bg.jpeg"
        alt="EcoServeDev Landscape Banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Navigation overlay clearance handled by Header */}

      {/* Floating Impact Card — top right */}
      {cardVisible &&
      <div className="absolute top-24 right-6 md:right-12 bg-primary text-white p-6 md:p-8 rounded-[24px] w-64 md:w-72 shadow-2xl z-20 hidden lg:block border border-white/10 animate-in slide-in-from-bottom-8 fade-in duration-700">
          <div className="flex justify-between items-start mb-4">
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
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-white/70 font-sans text-xs">Trees Planted</span>
              <span className="font-display font-700 text-accent">1,50,000+</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-white/70 font-sans text-xs">Lives Impacted</span>
              <span className="font-display font-700 text-accent">1,500+</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-white/70 font-sans text-xs">Economic Value</span>
              <span className="font-display font-700 text-accent">₹7M+</span>
            </div>
            <div className="flex items-center justify-between pb-1">
              <span className="text-white/70 font-sans text-xs">Partnerships</span>
              <span className="font-display font-700 text-accent">15+</span>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Link href="/homepage#impact" aria-label="View full impact data">
              <Icon name="ArrowUpRightIcon" size={18} variant="outline" className="text-white" />
            </Link>
          </div>
        </div>
      }

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end h-full min-h-[100vh] pb-32 sm:pb-16 pt-32">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Youth-Led · Innovation-Driven · Verified Impact
          </span>
        </div>

        {/* Headline with editorial treatment */}
        <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] max-w-4xl mb-6 text-white drop-shadow-lg">
          Sustainable Solutions. <br className="hidden md:block" />
          Inclusive Futures. <br className="hidden md:block" />
          Measurable Impact.
        </h1>

        {/* Subtext */}
        <p className="text-white/85 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-sans">
          EcoServe Development Foundation is a youth-led, innovation-driven non-profit delivering
          scalable climate action, inclusive development, and technology-enabled solutions across
          India and beyond.
        </p>

        {/* Supporting line */}
        <p className="text-white text-sm font-display font-600 mb-8 tracking-wide uppercase">
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