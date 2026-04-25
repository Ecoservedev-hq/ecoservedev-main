'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function AboutHeroSection() {
  return (
    <section
      className="relative w-full min-h-[70vh] overflow-hidden bg-primary"
      style={{ borderBottomLeftRadius: '80px' }}>

      {/* Background */}
      <AppImage
        src="https://images.unsplash.com/photo-1729745941994-7c1764a166d6"
        alt="Aerial view of green forested hills with river valley, dark deep shadows, misty atmospheric low-key environment"
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/85 via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end min-h-[70vh] pb-16 pt-32">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Section 8 Non-Profit · Est. January 2025
          </span>
        </div>

        <h1 className="font-display font-700 text-5xl md:text-7xl leading-[1.15] max-w-3xl mb-5">
          <span className="text-highlight">About EcoServe</span>{' '}
          <span className="text-highlight">Development Foundation</span>
        </h1>

        <p className="text-white/80 text-lg max-w-2xl mb-7 leading-relaxed font-sans">
          Founded by young social entrepreneurs with direct, on-ground experience — blending fresh
          innovative thinking with professional guidance from experienced practitioners.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/partnerships" className="btn-white">
            Partner With Us
            <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
          </Link>
          <Link
            href="/about#leadership"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-700 font-display text-white border border-white/30 hover:bg-white/10 transition-all">

            Meet the Team
            <Icon name="ArrowDownIcon" size={16} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

}