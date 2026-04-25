'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function PartnershipsHeroSection() {
  return (
    <section
      className="relative w-full min-h-[70vh] overflow-hidden bg-primary"
      style={{ borderBottomLeftRadius: '80px' }}>

      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_1c0a9d673-1775460474459.png"
        alt="Business professionals in a meeting room with glass walls, dim ambient corporate lighting, dark shadows, atmospheric low-key environment"
        fill
        priority
        className="object-cover opacity-55"
        sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end min-h-[70vh] pb-16 pt-32">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            CSR · Government · Institutions · Communities
          </span>
        </div>

        <h1 className="font-display font-700 text-5xl md:text-7xl leading-[1.15] max-w-4xl mb-5">
          <span className="text-highlight">CSR Partnerships &</span>{' '}
          <span className="text-highlight">Collaborations for</span>{' '}
          <span className="text-highlight">Sustainable Impact</span>
        </h1>

        <p className="text-white/80 text-lg max-w-2xl mb-7 leading-relaxed font-sans">
          EcoServe Development Foundation partners with corporates, governments, institutions, and
          communities to design and implement high-impact CSR and sustainability initiatives aligned
          with ESG goals and global frameworks.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="#partner-form" className="btn-white">
            Partner With Us
            <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
          </Link>
          <Link
            href="#ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-700 font-display text-white border border-white/30 hover:bg-white/10 transition-all">

            Explore Ecosystem
            <Icon name="ArrowDownIcon" size={16} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

}