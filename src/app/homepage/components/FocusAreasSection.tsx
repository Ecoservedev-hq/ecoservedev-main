'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const focusAreas = [
{
  id: 'climate',
  category: 'Environment',
  badge: 'Climate',
  title: 'Climate & Environmental Systems',
  description:
  'Ecosystem restoration, climate resilience, and sustainable resource management through science-based, community-led approaches.',
  image: "/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.12.59 PM.jpeg",
  alt: 'Aerial view of lush green forest canopy at dawn, misty mountains in background, dark shadowed valleys',
  tags: ['Afforestation', 'Water Conservation', 'Climate-Smart Agri'],
  iconName: 'GlobeAltIcon'
},
{
  id: 'inclusive',
  category: 'Development',
  badge: 'Inclusive',
  title: 'Inclusive & Equitable Development',
  description:
  'Strengthening livelihoods, enabling access to opportunities, and building community resilience in underserved regions.',
  image: "/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.00 PM.jpeg",
  alt: 'Group of diverse community members smiling together outdoors in a village setting, warm natural light',
  tags: ['Livelihoods', 'Women Empowerment', 'Rural Development'],
  iconName: 'UserGroupIcon'
},
{
  id: 'tech',
  category: 'Technology',
  badge: 'Tech for Good',
  title: 'Technology for Social Impact',
  description:
  'Digital innovation, ethical AI, and data systems for scalable, transparent, and future-ready development solutions.',
  image: "/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.01 PM.jpeg",
  alt: 'Close-up of circuit board with green electronic components, dark background with dramatic lighting',
  tags: ['Blockchain', 'AI Tools', 'GIS Traceability'],
  iconName: 'CpuChipIcon'
}];


export default function FocusAreasSection() {
  return (
    <section
      id="focus"
      className="py-20 section-rounded-top-lg bg-card">

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-border pb-6">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Our Focus
            </span>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground tracking-tight">
              Where We Work
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Operating across interconnected domains to address complex sustainability challenges.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-display font-700 hover:bg-secondary transition-colors whitespace-nowrap flex-shrink-0">

              Explore Work
              <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {focusAreas.map((area) =>
          <div key={area.id} className="card-program group flex flex-col h-full">
              {/* Image */}
              <div className="relative aspect-video sm:aspect-[4/3] md:aspect-video overflow-hidden rounded-2xl mb-4">
                {/* Category badge — top left */}
                <div className="absolute top-0 left-0 bg-primary text-white px-3 py-2 z-10 rounded-br-xl">
                  <span className="text-base font-display font-700 block leading-none">
                    {area.category.slice(0, 3).toUpperCase()}
                  </span>
                  <span className="text-[8px] font-display font-600 uppercase tracking-wider opacity-70">
                    {area.category}
                  </span>
                </div>
                <AppImage
                src={area.image}
                alt={area.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />

              </div>



              {/* Title */}
              <h3 className="font-display font-700 text-xl leading-tight mb-3 pr-8 text-foreground">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {area.description}
              </p>



              {/* Footer row */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-500">
                  <Icon name={area.iconName as never} size={14} variant="outline" className="text-accent" />
                  {area.category}
                </div>
                <div className="arrow-btn">
                  <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}