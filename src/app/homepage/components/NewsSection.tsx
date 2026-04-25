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
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_199e3d190-1772176810131.png",
  alt: 'Large conference hall with dramatic stage lighting, dark auditorium with rows of attendees, deep shadows, moody atmospheric light'
}];


const news = [
{
  id: 1,
  date: 'March 12, 2026',
  title: 'Impact AI Summit 2026, New Delhi — Strategic Partnership for Digital Inclusion',
  badge: 'Partnership',
  badgeDark: true
},
{
  id: 2,
  date: 'February 8, 2026',
  title: 'Gender Equality Summit — EcoServeDev as Ecosystem Restoration Partner',
  badge: 'Summit',
  badgeDark: false
},
{
  id: 3,
  date: 'January 20, 2026',
  title: 'UN Biodiversity Credit Alliance: EcoServeDev joins global restoration network',
  badge: 'UN Affiliation',
  badgeDark: false
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
              <article key={item?.id} className="group cursor-pointer">
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
                  <div className="border-b border-border mt-5" />
                </article>
              )}
            </div>

            {/* Partner for Impact card */}
            <div className="mt-8 bg-muted rounded-2xl p-6 border border-border">
              <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-2 block">
                Get Involved
              </span>
              <h3 className="font-display font-700 text-xl text-foreground mb-3">
                Scale Impact With Us
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                We collaborate with corporates, governments, institutions, and communities to
                deliver sustainable development solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Corporates (CSR)', 'Governments', 'Institutions', 'Communities']?.map((p) =>
                <span key={p} className="bg-card border border-border text-foreground text-[10px] font-display font-600 px-3 py-1.5 rounded-full">
                    {p}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <Link href="/partnerships" className="btn-primary text-sm">
                  Partner With Us
                  <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}