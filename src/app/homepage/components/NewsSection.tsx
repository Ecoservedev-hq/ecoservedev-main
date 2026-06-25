'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const perspectives = [
{
  id: 1,
  date: '15',
  month: 'JAN',
  category: 'Global Summit',
  title: 'Breakpoint 2025, Abu Dhabi — Blockchain, Real-World Assets & Sustainability',
  description:
  'Kumar Shivam delivered a session on blockchain, real-world assets, and sustainability at Breakpoint 2025, Abu Dhabi — exploring how decentralised infrastructure can drive verifiable environmental impact.',
  image: "/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.04 PM.jpeg",
  alt: 'Large conference hall with dramatic stage lighting, dark auditorium with rows of attendees, deep shadows, moody atmospheric light'
}];


const news = [
{
  id: 1,
  date: 'March 12, 2026',
  title: 'Impact AI Summit 2026, New Delhi — Strategic Partnership for Digital Inclusion',
  badge: 'Partnership',
  badgeDark: true,
  image: "/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.12.59.jpeg",
  alt: 'Conference hall with audience'
},
{
  id: 2,
  date: 'February 8, 2026',
  title: 'Gender Equality Summit — EcoServeDev as Ecosystem Restoration Partner',
  badge: 'Summit',
  badgeDark: false,
  image: "/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.00.jpeg",
  alt: 'Diverse panel discussion'
},
{
  id: 3,
  date: 'January 20, 2026',
  title: 'UN Biodiversity Credit Alliance: EcoServeDev joins global restoration network',
  badge: 'UN Affiliation',
  badgeDark: false,
  image: "/assets/images/WhatsApp Unknown 2026-06-25 at 11.35.14 PM/WhatsApp Image 2026-06-25 at 11.13.01.jpeg",
  alt: 'Green forest from above'
}];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Perspectives */}
          <div>
            <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
              <h2 className="font-display font-700 text-3xl text-foreground tracking-tight">
                Perspectives
              </h2>
              <Link
                href="#"
                className="text-xs font-display font-700 border border-border rounded-full px-4 py-2 hover:bg-primary hover:text-white hover:border-primary transition-colors inline-flex items-center gap-2">

                View All
                <Icon name="ArrowUpRightIcon" size={12} variant="outline" />
              </Link>
            </div>

            {perspectives?.map((item) =>
            <div
              key={item?.id}
              className="bg-card p-5 rounded-[32px] shadow-sm border border-border group cursor-pointer hover:shadow-lg transition-shadow">

                {/* Image */}
                <div className="relative mb-5 rounded-2xl overflow-hidden">
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl text-center shadow-sm z-10">
                    <span className="block font-display font-700 text-xl leading-none text-foreground">
                      {item?.date}
                    </span>
                    <span className="block text-[9px] uppercase font-700 text-muted-foreground font-display">
                      {item?.month}
                    </span>
                  </div>
                  <AppImage
                  src={item?.image}
                  alt={item?.alt}
                  width={700}
                  height={350}
                  className="w-full aspect-video object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw" />

                </div>

                {/* Badge */}
                <span className="inline-block border border-border rounded-full px-3 py-1 text-[10px] font-display font-700 uppercase tracking-wider mb-4 text-muted-foreground">
                  {item?.category}
                </span>

                {/* Title */}
                <h3 className="font-display font-700 text-xl text-foreground mb-3 leading-tight">
                  {item?.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                  {item?.description}
                </p>

                <div className="flex justify-end">
                  <div className="arrow-btn">
                    <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* News */}
          <div>
            <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
              <h2 className="font-display font-700 text-3xl text-foreground tracking-tight">
                News & Announcements
              </h2>
              <Link
                href="#"
                className="text-xs font-display font-700 border border-border rounded-full px-4 py-2 hover:bg-primary hover:text-white hover:border-primary transition-colors inline-flex items-center gap-2">

                View All
                <Icon name="ArrowUpRightIcon" size={12} variant="outline" />
              </Link>
            </div>

            <div className="space-y-6">
              {news?.map((item) =>
              <article key={item?.id} className="group cursor-pointer flex gap-4">
                  {item.image && (
                    <div className="w-24 h-24 flex-shrink-0 relative rounded-xl overflow-hidden">
                      <AppImage src={item.image} alt={item.alt || ''} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="100px" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-display font-700 text-lg text-foreground leading-tight mb-2 group-hover:text-accent transition-colors">
                      {item?.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-sans">
                      <Icon name="CalendarIcon" size={12} variant="outline" />
                      {item?.date}
                    </div>
                    <span
                    className={`text-[10px] font-display font-700 px-2.5 py-1 rounded-full ${
                    item?.badgeDark ?
                    'bg-primary text-white' : 'bg-card border border-border text-muted-foreground'}`
                    }>

                      {item?.badge}
                    </span>
                  </div>
                </article>
              )}
              <div className="border-b border-border mt-5" />
            </div>

            {/* Social Media Feeds Embed */}
            <div className="mt-8 bg-muted rounded-2xl p-6 border border-border">
              <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-4 block">
                Connect With Us
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-64 overflow-hidden">
                {/* Placeholder X / Twitter Feed */}
                <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden h-full">
                  <div className="bg-black text-white px-4 py-2 font-display text-sm font-700 flex items-center justify-between">
                    <span>X (Twitter)</span>
                    <Icon name="GlobeAltIcon" size={16} variant="outline" />
                  </div>
                  <div className="p-4 text-xs text-muted-foreground text-center flex items-center justify-center h-full">
                    <p>Live feed would be embedded here via standard twitter widget js.</p>
                  </div>
                </div>
                {/* Placeholder LinkedIn Feed */}
                <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden h-full">
                  <div className="bg-[#0077b5] text-white px-4 py-2 font-display text-sm font-700 flex items-center justify-between">
                    <span>LinkedIn</span>
                    <Icon name="BuildingOffice2Icon" size={16} variant="outline" />
                  </div>
                  <div className="p-4 text-xs text-muted-foreground text-center flex items-center justify-center h-full">
                    <p>Live feed would be embedded here via LinkedIn iframe or plugin.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}