'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function PartnerCTASection() {
  return (
    <section className="px-4 md:px-6 py-16 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Dark banner with image */}
        <div
          className="bg-primary overflow-hidden relative flex items-center"
          style={{ borderRadius: '60px', minHeight: '420px' }}>

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Join the Mission
            </span>
            <h2 className="font-display font-700 text-4xl md:text-6xl leading-none tracking-tight mb-8 text-white">
              <span className="text-highlight-light">Let&apos;s Build Impact</span>{' '}
              <span className="text-highlight-light">That Matters</span>
            </h2>
            <p className="text-white/70 text-base mb-8 leading-relaxed max-w-md">
              Join us in designing scalable solutions for a more sustainable, inclusive, and
              resilient future. Partner with India&apos;s most innovative youth-led development foundation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/partnerships" className="btn-white">
                Partner With Us
                <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-display font-700 text-white/80 border border-white/20 hover:bg-white/10 transition-all">

                Learn About Us
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
            </div>
          </div>

          {/* Image right side */}
          <div className="absolute top-0 right-0 w-full md:w-3/5 h-full pointer-events-none">
            <AppImage
              src="/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.02 PM.jpeg"
              alt="Aerial view of green forest with mist, dark shadowed canopy, moody atmospheric low-key lighting"
              fill
              className="object-cover object-center opacity-50 md:opacity-70"
              sizes="60vw" />

            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
          </div>

          {/* Decorative orb */}
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/10 translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </section>);

}