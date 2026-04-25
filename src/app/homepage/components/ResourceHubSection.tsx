'use client';

import React from 'react';
import Link from 'next/link';

import Icon from '@/components/ui/AppIcon';

const resources = [
  {
    id: 1,
    category: 'Research',
    title: 'Ecosystem Restoration in Degraded Landscapes: A Systems Approach',
    description: 'Exploring data-driven methods for large-scale afforestation and biodiversity recovery.',
    iconName: 'DocumentTextIcon',
  },
  {
    id: 2,
    category: 'CSR Guide',
    title: 'Aligning CSR Strategy with ESG Goals and SDG Frameworks',
    description: 'A practical guide for corporate sustainability officers designing high-impact CSR initiatives.',
    iconName: 'ChartBarIcon',
  },
  {
    id: 3,
    category: 'Blog',
    title: 'Blockchain for Environmental Accountability: Real-World Applications',
    description: 'How distributed ledger technology is transforming transparency in climate action programs.',
    iconName: 'LinkIcon',
  },
];

export default function ResourceHubSection() {
  return (
    <section className="py-16 bg-card section-rounded-top">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Knowledge Hub
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Insights, Research & Resources
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
              Explore our latest blogs, research, and knowledge resources on sustainability, CSR,
              technology for development, and ecosystem restoration.
            </p>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-display font-700 hover:bg-secondary transition-colors whitespace-nowrap flex-shrink-0"
            >
              View All
              <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div
              key={res.id}
              className="group cursor-pointer border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-background"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-muted text-muted-foreground text-[10px] font-display font-700 uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {res.category}
                </span>
                <Icon
                  name={res.iconName as never}
                  size={18}
                  variant="outline"
                  className="text-accent group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="font-display font-700 text-base text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                {res.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {res.description}
              </p>
              <div className="flex items-center gap-2 text-accent text-xs font-display font-600">
                Read More
                <Icon name="ArrowRightIcon" size={12} variant="outline" className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}