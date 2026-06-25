'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { articles } from '@/data/articles';

const categories = ['All', 'Research', 'Blog', 'CSR Guide', 'Report', 'Case Study'];

export default function InsightsGridSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ?
  articles :
  articles?.filter((a) => a?.category === activeCategory);

  const featured = filtered?.find((a) => a?.featured) || filtered?.[0];
  const rest = filtered?.filter((a) => a?.id !== featured?.id);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories?.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-display font-600 transition-all duration-200 ${
            activeCategory === cat ?
            'bg-primary text-white' : 'bg-card border border-border text-foreground hover:border-primary/30'}`
            }>

              {cat}
            </button>
          )}
        </div>

        {/* Featured article */}
        {featured &&
          <Link href={`/insights/${featured?.slug}`} className="block mb-12 group cursor-pointer">
            <div className="grid md:grid-cols-2 gap-8 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <AppImage
                src={featured?.image}
                alt={featured?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary text-white text-[10px] font-display font-700 uppercase tracking-wider px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                    <span className="bg-muted text-muted-foreground text-[10px] font-display font-700 uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {featured?.category}
                    </span>
                  </div>
                  <h2 className="font-display font-700 text-2xl md:text-3xl text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                    {featured?.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {featured?.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured?.tags?.map((tag) =>
                  <span key={tag} className="bg-muted text-muted-foreground text-[10px] font-600 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                  )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1.5">
                      <Icon name="CalendarIcon" size={12} variant="outline" />
                      {featured?.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="ClockIcon" size={12} variant="outline" />
                      {featured?.readTime}
                    </span>
                  </div>
                  <div className="arrow-btn">
                    <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        }

        {/* Article grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest?.map((article) =>
            <Link href={`/insights/${article?.slug}`} key={article?.id} className="block group cursor-pointer">
              <article
                className="group h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">

                <div className="relative aspect-video overflow-hidden">
                  <AppImage
                  src={article?.image}
                  alt={article?.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw" />

                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-muted text-muted-foreground text-[10px] font-display font-700 uppercase tracking-wider px-3 py-1 rounded-full">
                      {article?.category}
                    </span>
                  </div>
                  <h3 className="font-display font-700 text-base text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                    {article?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {article?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-sans">
                      <span className="flex items-center gap-1">
                        <Icon name="ClockIcon" size={11} variant="outline" />
                        {article?.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-accent text-xs font-display font-600 group-hover:gap-2.5 transition-all">
                      Read
                      <Icon name="ArrowRightIcon" size={12} variant="outline" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}