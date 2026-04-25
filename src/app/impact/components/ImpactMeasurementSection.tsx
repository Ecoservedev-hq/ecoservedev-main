'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    icon: 'ChartBarIcon',
    title: 'Data-driven monitoring and evaluation systems',
    description: 'Structured M&E frameworks capturing quantitative and qualitative outcomes across all programs.',
  },
  {
    icon: 'MapPinIcon',
    title: 'Field-level validation and reporting mechanisms',
    description: 'On-ground verification teams ensuring data accuracy and contextual relevance.',
  },
  {
    icon: 'CpuChipIcon',
    title: 'Digital tools and traceability systems for real-time insights',
    description: 'Blockchain ledgers, GIS mapping, and digital dashboards providing live impact visibility.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Continuous evaluation and adaptive learning',
    description: 'Regular review cycles enabling program adaptation based on evidence and stakeholder feedback.',
  },
];

export default function ImpactMeasurementSection() {
  return (
    <section className="py-24 bg-card section-rounded-top">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-4 block">
              Methodology
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight mb-6 leading-tight">
              Measuring<br />What Matters
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              We follow a robust, multi-layered impact measurement framework that moves beyond
              output-based reporting to focus on long-term, evidence-based impact.
            </p>

            <div className="bg-primary rounded-2xl p-6 text-white">
              <div className="font-display font-700 text-2xl mb-1">100%</div>
              <div className="text-white/70 text-sm">of programs tracked through verifiable data frameworks</div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon name={step.icon as never} size={18} variant="outline" className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-3 min-h-[24px]" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-display font-700 text-base text-foreground mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
