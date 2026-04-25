'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function WorkHeroSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] overflow-hidden bg-primary"
      style={{ borderBottomLeftRadius: '80px' }}
      aria-label="Work & Innovation Hero">

      <AppImage
        src="https://img.rocket.new/generatedImages/rocket_gen_img_1d77a9752-1767196504972.png"
        alt="Modern open office workspace with large windows, clean desks, and collaborative environment with natural light"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw" />

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      {/* Geometric grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end min-h-[80vh] pb-20 pt-32">
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-display font-600 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Innovation · Action · Verified Impact
          </span>
        </div>

        <h1 className="font-display font-700 text-5xl md:text-7xl leading-[1.1] max-w-5xl mb-6">
          <span className="text-highlight">Designing Scalable Solutions</span>{' '}
          <span className="text-highlight">for Complex Global Challenges</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-sans">
          We design and implement scalable, systems-driven solutions across interconnected domains
          to address critical social and environmental challenges — integrating innovation,
          on-ground execution, and data-driven impact.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/impact" className="btn-white">
            View Our Impact
            <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
          </Link>
          <Link
            href="#focus-areas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-700 font-display text-white border border-white/30 hover:bg-white/10 transition-all">

            Explore Focus Areas
            <Icon name="ChevronDownIcon" size={16} variant="outline" />
          </Link>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
          { label: 'Focus Areas', value: '3' },
          { label: 'Flagship Projects', value: '5' },
          { label: 'Technologies Deployed', value: '3+' },
          { label: 'SDGs Addressed', value: '8' }]?.
          map((stat) =>
          <div key={stat?.label}>
              <div className="font-display font-700 text-3xl text-white mb-1">{stat?.value}</div>
              <div className="text-white/50 text-xs font-sans uppercase tracking-wider">{stat?.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}