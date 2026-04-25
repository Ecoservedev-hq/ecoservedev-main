'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const projects = [
  {
    name: 'Project VRIKSHA',
    metrics: [
      { label: 'Trees Planted', value: '1,50,000+' },
      { label: 'Acres Restored', value: '400+' },
    ],
    sdgs: [13, 15],
    status: 'Active',
  },
  {
    name: 'Dharampur Valley Initiative',
    metrics: [
      { label: 'Community Members', value: '30+' },
      { label: 'Livelihood Models', value: '2' },
    ],
    sdgs: [8, 1],
    status: 'Active',
  },
  {
    name: 'AI for Inclusive Growth',
    metrics: [
      { label: 'Tech Solutions', value: '2' },
      { label: 'Expected Reach', value: '10,000+' },
    ],
    sdgs: [8, 17],
    status: 'Ongoing',
  },
  {
    name: 'Sahkar Vikas',
    metrics: [
      { label: 'Farmers Engaged', value: '1,500+' },
      { label: 'Economic Value', value: '₹9.5M+' },
    ],
    sdgs: [1, 2, 8],
    status: 'Active',
  },
  {
    name: 'Sustainable Harvest Network',
    metrics: [
      { label: 'Villages Reached', value: '7+' },
      { label: 'Harvest Cycles', value: '15+' },
    ],
    sdgs: [2, 8, 15],
    status: 'Active',
  },
];

export default function ImpactProjectsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Flagship Initiatives
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Impact in Action
            </h2>
          </div>
          <Link href="/work" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-display font-700 hover:bg-secondary transition-colors whitespace-nowrap flex-shrink-0">
            Explore Our Work
            <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
          </Link>
        </div>

        {/* Table-style layout */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-6 text-xs font-display font-600 text-muted-foreground uppercase tracking-widest">Project</th>
                <th className="text-left py-3 pr-6 text-xs font-display font-600 text-muted-foreground uppercase tracking-widest">Key Metrics</th>
                <th className="text-left py-3 pr-6 text-xs font-display font-600 text-muted-foreground uppercase tracking-widest">SDGs</th>
                <th className="text-left py-3 text-xs font-display font-600 text-muted-foreground uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects?.map((project, i) => (
                <tr key={i} className="border-b border-border group hover:bg-muted/30 transition-colors">
                  <td className="py-5 pr-6">
                    <span className="font-display font-700 text-base text-foreground group-hover:text-primary transition-colors">
                      {project?.name}
                    </span>
                  </td>
                  <td className="py-5 pr-6">
                    <div className="flex gap-6">
                      {project?.metrics?.map((m) => (
                        <div key={m?.label}>
                          <div className="font-display font-700 text-lg text-primary">{m?.value}</div>
                          <div className="text-xs text-muted-foreground font-sans">{m?.label}</div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-5 pr-6">
                    <div className="flex gap-1.5">
                      {project?.sdgs?.map((sdg) => (
                        <span key={sdg} className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-xs font-display font-700 flex items-center justify-center">
                          {sdg}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-5">
                    <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-display font-600 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {project?.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-primary rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
                Scale Impact
              </span>
              <h3 className="font-display font-700 text-3xl md:text-4xl text-white mb-3">
                Scale Impact With Us
              </h3>
              <p className="text-white/70 text-base max-w-lg leading-relaxed">
                Partner with EcoServe Development Foundation to design, implement, and measure
                high-impact initiatives that deliver real, verifiable outcomes.
              </p>
            </div>
            <Link href="/partnerships" className="btn-white flex-shrink-0">
              Partner With Us
              <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
