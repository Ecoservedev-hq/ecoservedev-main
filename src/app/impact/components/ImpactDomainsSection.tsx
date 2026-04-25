'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const domains = [
  {
    id: 'climate',
    icon: 'GlobeAltIcon',
    title: 'Climate & Environmental Systems',
    color: 'bg-primary',
    items: [
      'Restoration of degraded ecosystems and biodiversity enhancement',
      'Improved water security through conservation and watershed interventions',
      'Increased carbon sequestration through afforestation and regenerative practices',
      'Adoption of climate-resilient and sustainable agricultural systems',
    ],
  },
  {
    id: 'inclusive',
    icon: 'UserGroupIcon',
    title: 'Inclusive & Equitable Development',
    color: 'bg-secondary',
    items: [
      'Expanded access to education and digital inclusion in underserved communities',
      'Strengthened rural livelihoods and income-generation opportunities',
      'Increased participation of women in leadership and decision-making',
      'Improved health, nutrition, and community well-being',
    ],
  },
  {
    id: 'tech',
    icon: 'CpuChipIcon',
    title: 'Technology for Social Impact',
    color: 'bg-accent',
    items: [
      'Enhanced digital inclusion and last-mile access to technology',
      'Deployment of ethical AI tools for productivity and decision-making',
      'Improved service delivery through technology-enabled platforms',
      'Strengthened transparency through digital infrastructure and traceability systems',
    ],
  },
];

export default function ImpactDomainsSection() {
  return (
    <section className="py-24 bg-card section-rounded-top-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Domain Impact
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Impact Across Key Domains
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md leading-relaxed">
            Our work creates measurable change across three interconnected domains of sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <div key={domain.id} className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              {/* Header */}
              <div className={`${domain.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <Icon name={domain.icon as never} size={28} variant="outline" className="text-white mb-3 relative z-10" />
                <h3 className="font-display font-700 text-lg text-white leading-tight relative z-10">
                  {domain.title}
                </h3>
              </div>

              {/* Items */}
              <div className="p-6">
                <ul className="space-y-3">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="CheckIcon" size={10} variant="outline" className="text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
