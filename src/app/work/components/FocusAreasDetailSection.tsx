'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const focusAreas = [
  {
    id: 'climate',
    icon: 'GlobeAltIcon',
    category: 'Environment',
    title: 'Climate & Environmental Systems',
    description: 'Advancing climate resilience and ecosystem restoration through science-based approaches and community-led implementation.',
    items: [
      'Afforestation and large-scale ecosystem restoration',
      'Water conservation and watershed management',
      'Renewable energy deployment',
      'Regenerative and climate-smart agriculture',
    ],
    metric: '1,50,000+ Trees Planted',
    color: 'bg-primary',
  },
  {
    id: 'inclusive',
    icon: 'UserGroupIcon',
    category: 'Development',
    title: 'Inclusive & Equitable Development',
    description: 'Strengthening communities by enabling equitable access to opportunities, resources, and essential services.',
    items: [
      'Education and digital inclusion',
      'Sustainable livelihoods and rural development',
      "Women\'s empowerment and grassroots leadership",
      'Health, nutrition, and community well-being',
    ],
    metric: '1,500+ Lives Impacted',
    color: 'bg-secondary',
  },
  {
    id: 'tech',
    icon: 'CpuChipIcon',
    category: 'Technology',
    title: 'Technology for Social Impact',
    description: 'Leveraging emerging technologies and digital innovation to build scalable, inclusive, and future-ready development solutions.',
    items: [
      'Digital inclusion and last-mile access',
      'Ethical AI tools and responsible innovation',
      'Technology-enabled service delivery',
      'Blockchain-based infrastructure and digital ledgers',
      'GIS-driven intelligence and traceability solutions',
    ],
    metric: '3+ Solutions Deployed',
    color: 'bg-accent',
  },
];

export default function FocusAreasDetailSection() {
  const [expanded, setExpanded] = useState<string | null>('climate');

  return (
    <section id="focus-areas" className="py-24 bg-card section-rounded-top-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Our Focus
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Our Focus Areas
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md leading-relaxed">
            We operate across interconnected domains to address complex sustainability and
            development challenges at scale.
          </p>
        </div>

        <div className="space-y-4">
          {focusAreas.map((area) => (
            <div
              key={area.id}
              className="border border-border rounded-2xl overflow-hidden bg-background transition-all duration-300"
            >
              {/* Header row — always visible */}
              <button
                onClick={() => setExpanded(expanded === area.id ? null : area.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                aria-expanded={expanded === area.id}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={area.icon as never} size={22} variant="outline" className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-display font-600 text-muted-foreground uppercase tracking-widest block mb-1">
                      {area.category}
                    </span>
                    <h3 className="font-display font-700 text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                  <span className="hidden md:block text-xs font-display font-600 text-accent bg-accent/10 px-3 py-1.5 rounded-full">
                    {area.metric}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-transform duration-300 ${expanded === area.id ? 'rotate-180' : ''}`}>
                    <Icon name="ChevronDownIcon" size={16} variant="outline" className="text-muted-foreground" />
                  </div>
                </div>
              </button>

              {/* Expandable content */}
              {expanded === area.id && (
                <div className="px-6 md:px-8 pb-8 border-t border-border">
                  <div className="grid md:grid-cols-2 gap-8 pt-6">
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{area.description}</p>
                      <ul className="space-y-3">
                        {area.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Icon name="CheckIcon" size={10} variant="outline" className="text-accent" />
                            </div>
                            <span className="text-sm text-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-display font-600 text-accent uppercase tracking-widest block mb-3">
                          Key Metric
                        </span>
                        <div className="font-display font-700 text-4xl text-primary mb-2">{area.metric}</div>
                        <p className="text-sm text-muted-foreground">Verified through structured monitoring and data frameworks</p>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="ShieldCheckIcon" size={14} variant="outline" className="text-accent" />
                        Blockchain-verified traceability
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
