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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Our Methodology
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              How We Create Change
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-md leading-relaxed">
            We turn bold ideas into real outcomes — combining innovation, grassroots implementation,
            and rigorous accountability across every initiative.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Step Tabs */}
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 group ${
                  active === step.id
                    ? 'bg-primary border-primary text-white shadow-lg'
                    : 'bg-card border-border hover:border-primary/30 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`font-display font-700 text-3xl leading-none ${
                      active === step.id ? 'text-accent' : 'text-muted-foreground/40'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        name={step.iconName as never}
                        size={18}
                        variant="outline"
                        className={active === step.id ? 'text-accent' : 'text-primary'}
                      />
                      <h3
                        className={`font-display font-700 text-lg ${
                          active === step.id ? 'text-white' : 'text-foreground'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        active === step.id ? 'text-white/80' : 'text-muted-foreground'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail Panel */}
          <div className="sticky top-24">
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
              {/* Visual header */}
              <div className="bg-primary p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <span className="text-accent/70 font-display font-600 text-xs uppercase tracking-widest mb-3 block">
                    Step {activeStep.number}
                  </span>
                  <h3 className="font-display font-700 text-3xl text-white mb-2">
                    {activeStep.title}
                  </h3>
                  <p className="text-white/70 text-base">
                    {activeStep.headline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {activeStep.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeStep.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-foreground text-xs font-display font-600 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* SVG Network Diagram */}
                <div className="relative rounded-2xl bg-muted p-4 overflow-hidden">
                  <svg viewBox="0 0 300 160" className="w-full h-auto opacity-80">
                    {/* Center node */}
                    <circle cx="150" cy="80" r="18" fill="var(--primary)" />
                    <text x="150" y="84" textAnchor="middle" fontSize="8" fill="white" fontFamily="var(--font-display)" fontWeight="600">
                      {activeStep.title.slice(0, 3).toUpperCase()}
                    </text>

                    {/* Orbit ring */}
                    <circle cx="150" cy="80" r="45" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
                    <circle cx="150" cy="80" r="65" fill="none" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />

                    {/* Satellite nodes */}
                    {[
                      { cx: 85, cy: 45, label: activeStep.tags[0] || 'Data' },
                      { cx: 215, cy: 45, label: activeStep.tags[1] || 'Action' },
                      { cx: 85, cy: 115, label: activeStep.tags[2] || 'Impact' },
                      { cx: 215, cy: 115, label: 'SDGs' },
                    ].map((node, i) => (
                      <g key={i}>
                        <line x1="150" y1="80" x2={node.cx} y2={node.cy} stroke="var(--primary)" strokeWidth="0.5" opacity="0.3" />
                        <circle cx={node.cx} cy={node.cy} r="6" fill="var(--accent)" opacity="0.7" />
                        <text x={node.cx} y={node.cy + 14} textAnchor="middle" fontSize="6" fill="var(--foreground)" fontFamily="var(--font-display)" opacity="0.7">
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}