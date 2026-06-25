'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    id: 'innovation',
    number: '01',
    title: 'Innovation',
    headline: 'Design forward-looking solutions',
    description:
      'We identify emerging challenges and design forward-looking, scalable solutions through research, technology, and cross-sector collaboration.',
    tags: ['Research', 'Technology', 'Cross-sector'],
    iconName: 'LightBulbIcon',
  },
  {
    id: 'action',
    number: '02',
    title: 'Action',
    headline: 'Implement with precision',
    description:
      'We implement high-impact programs through CSR partnerships, community engagement, and multi-stakeholder collaboration — context-specific and outcome-driven.',
    tags: ['CSR', 'Community', 'Multi-stakeholder'],
    iconName: 'BoltIcon',
  },
  {
    id: 'impact',
    number: '03',
    title: 'Verified Impact',
    headline: 'Measure what matters',
    description:
      'We ensure transparency through data-driven monitoring, real-time reporting, and continuous evaluation — enabling evidence-based, scalable impact.',
    tags: ['Data-driven', 'Real-time', 'Transparent'],
    iconName: 'ChartBarIcon',
  },
];

export default function HowWeWorkSection() {
  const [active, setActive] = useState('innovation');
  const activeStep = steps.find((s) => s.id === active) || steps[0];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-border pb-6">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Our Methodology
            </span>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground tracking-tight">
              How We Create Change
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            We turn bold ideas into real outcomes — combining innovation, grassroots implementation,
            and rigorous accountability across every initiative.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left: Step Tabs */}
          <div className="flex flex-col gap-3">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className={`text-left p-4 md:p-5 rounded-2xl border transition-all duration-300 group ${
                  active === step.id
                    ? 'bg-primary border-primary text-white shadow-lg'
                    : 'bg-card border-border hover:border-primary/30 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`font-display font-700 text-2xl md:text-3xl leading-none ${
                      active === step.id ? 'text-accent' : 'text-muted-foreground/40'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon
                        name={step.iconName as never}
                        size={16}
                        variant="outline"
                        className={active === step.id ? 'text-accent' : 'text-primary'}
                      />
                      <h3
                        className={`font-display font-700 text-base md:text-lg ${
                          active === step.id ? 'text-white' : 'text-foreground'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail Panel */}
          <div className="sticky top-24">
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
              {/* Visual header */}
              <div className="bg-primary p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <span className="text-accent/70 font-display font-600 text-xs uppercase tracking-widest mb-2 block">
                    Step {activeStep.number}
                  </span>
                  <h3 className="font-display font-700 text-2xl md:text-3xl text-white mb-2">
                    {activeStep.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    {activeStep.headline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {activeStep.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2 md:mb-4">
                  {activeStep.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-foreground text-xs font-display font-600 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}