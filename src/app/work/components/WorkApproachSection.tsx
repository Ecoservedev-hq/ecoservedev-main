'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Innovation',
    description: 'We identify emerging challenges and design forward-thinking solutions through research, technology, and cross-sector collaboration — prioritising scalability, adaptability, and long-term relevance.',
    metric: '15+ Research Initiatives',
    icon: 'LightBulbIcon',
    tags: ['Research', 'Technology', 'Cross-sector Collaboration'],
  },
  {
    number: '02',
    title: 'Action',
    description: 'We translate ideas into impactful interventions through on-ground implementation, CSR partnerships, and multi-stakeholder engagement. Our programs are context-specific, efficient, and outcome-driven.',
    metric: '5 Flagship Programs',
    icon: 'BoltIcon',
    tags: ['CSR Partnerships', 'Community Engagement', 'Multi-stakeholder'],
  },
  {
    number: '03',
    title: 'Verified Impact',
    description: 'We ensure accountability by measuring outcomes through data-driven frameworks, transparent reporting, and continuous evaluation — enabling evidence-based and scalable impact.',
    metric: '100% Traceable Outcomes',
    icon: 'ChartBarIcon',
    tags: ['Data-driven M&E', 'Real-time Reporting', 'Blockchain Traceability'],
  },
];

export default function WorkApproachSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Our Framework
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Delivering Impact Through<br />Innovation, Action & Accountability
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md leading-relaxed">
            Our work is anchored in a structured framework that combines innovation, implementation,
            and verified impact — ensuring every intervention is effective, scalable, and sustainable.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-12 gap-8 py-12 ${i < steps.length - 1 ? 'border-b border-border' : ''}`}
            >
              {/* Number */}
              <div className="md:col-span-1 flex md:block items-center gap-4">
                <span className="font-display font-700 text-6xl md:text-7xl text-primary/10 leading-none select-none">
                  {step.number}
                </span>
              </div>

              {/* Icon + Title */}
              <div className="md:col-span-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center mb-4">
                  <Icon name={step.icon as never} size={22} variant="outline" className="text-primary" />
                </div>
                <h3 className="font-display font-700 text-2xl text-foreground mb-2">{step.title}</h3>
                <div className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-display font-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {step.metric}
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-muted-foreground leading-relaxed text-base">{step.description}</p>
              </div>

              {/* Tags */}
              <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-foreground text-xs font-display font-600 px-3 py-1.5 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
