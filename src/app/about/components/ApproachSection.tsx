'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Innovation',
    description:
      'We identify emerging challenges and design forward-thinking solutions through research, technology, and cross-sector collaboration — prioritising scalability, adaptability, and long-term relevance.',
    icon: 'LightBulbIcon',
    tags: ['Research', 'Technology', 'Cross-sector Collaboration'],
  },
  {
    number: '02',
    title: 'Action',
    description:
      'We translate ideas into impactful interventions through on-ground implementation, CSR partnerships, and multi-stakeholder engagement. Our programs are context-specific, efficient, and outcome-driven.',
    icon: 'BoltIcon',
    tags: ['CSR Partnerships', 'On-ground Execution', 'Multi-stakeholder'],
  },
  {
    number: '03',
    title: 'Verified Impact',
    description:
      'We ensure accountability by measuring outcomes through data-driven frameworks, transparent reporting, and continuous evaluation — enabling evidence-based and scalable impact.',
    icon: 'ChartBarIcon',
    tags: ['Data-driven M&E', 'Transparent Reporting', 'Continuous Evaluation'],
  },
];

export default function ApproachSection() {
  return (
    <section className="py-20 bg-card section-rounded-top">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 border-b border-border pb-8">
          <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
            Our Framework
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
            Our Approach to Sustainable Impact
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl leading-relaxed">
            EcoServeDev follows a structured, systems-driven approach that integrates innovation,
            implementation, and impact measurement.
          </p>
        </div>

        {/* Approach cards — alternating layout */}
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
            >
              {/* Number + Visual side */}
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-primary rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/4 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent/10 translate-y-1/4 -translate-x-1/4" />
                  <div className="relative z-10 flex items-end justify-between">
                    <span className="font-display font-700 text-8xl text-white/10 leading-none select-none">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                      <Icon name={step.icon as never} size={24} variant="outline" className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-display font-700 text-2xl text-white mt-4 relative z-10">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Text side */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="font-display font-700 text-2xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-5">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted border border-border text-foreground text-xs font-display font-600 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}