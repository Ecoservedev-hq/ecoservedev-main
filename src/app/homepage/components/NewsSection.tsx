'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Script from 'next/script';

const perspectives = [
{
  id: 1,
  date: '8',
  month: 'FEB',
  category: 'Summit',
  title: 'Gender Equality Summit — EcoServeDev as Ecosystem Restoration Partner',
  description: 'EcoServeDev participated in the Gender Equality Summit as an Ecosystem Restoration Partner, championing the role of inclusive community-driven approaches in global sustainability initiatives.',
  image: "/gender.jpeg",
  alt: 'Gender Equality Summit'
}];


const news = [
{
  id: 1,
  date: 'March 12, 2026',
  title: 'Impact AI Summit 2026, New Delhi — Strategic Partnership for Digital Inclusion',
  badge: 'Partnership',
  badgeDark: true,
  image: "/impact.jpg",
  alt: 'Impact AI Summit 2026'
},
{
  id: 2,
  date: 'January 15, 2025',
  title: 'Breakpoint 2025, Abu Dhabi — Blockchain, Real-World Assets & Sustainability',
  badge: 'Global Summit',
  badgeDark: false,
  image: "/WhatsApp Image 2026-06-29 at 9.46.50 PM.jpeg",
  alt: 'Breakpoint 2025 event photo'
},
{
  id: 3,
  date: 'January 20, 2026',
  title: 'UN Biodiversity Credit Alliance: EcoServeDev joins global restoration network',
  badge: 'UN Affiliation',
  badgeDark: false,
  image: "/bcdd.jpg",
  alt: 'Biodiversity Credit Alliance'
}];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
          <h2 className="font-display font-700 text-3xl text-foreground tracking-tight">
            Media Center
          </h2>
          <Link
            href="#"
            className="text-xs font-display font-700 border border-border rounded-full px-4 py-2 hover:bg-primary hover:text-white hover:border-primary transition-colors inline-flex items-center gap-2">
            View All
            <Icon name="ArrowUpRightIcon" size={12} variant="outline" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Perspectives */}
          <div>
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

            <div className="space-y-6">
              {news?.map((item) =>
              <article key={item?.id} className="group cursor-pointer flex gap-4">
                  {item.image && (
                    <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 relative rounded-xl overflow-hidden">
                      <AppImage src={item.image} alt={item.alt || ''} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 128px, 160px" />
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
            <div className="mt-8 bg-muted rounded-2xl py-6 border border-border overflow-hidden max-w-[380px] mx-auto w-full">
              <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-4 block px-6 text-center">
                Connect With Us
              </span>
              <div className="w-full h-[350px] overflow-y-auto custom-scrollbar px-6">
                <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                <div className="elfsight-app-db637d39-6d9a-4d46-815a-7247ea75230a w-full" data-elfsight-app-lazy></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}