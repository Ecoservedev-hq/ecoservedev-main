'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Innovation',
    subtitle: 'Research-led, forward-thinking design',
    description:
      'We identify emerging challenges and design forward-thinking solutions through research, technology, and cross-sector collaboration — prioritising scalability, adaptability, and long-term relevance.',
    icon: 'LightBulbIcon',
    tags: ['Research', 'Technology', 'Cross-sector Collaboration'],
    metric: { value: '3+', label: 'Technology Solutions' },
  },
  {
    number: '02',
    title: 'Action',
    subtitle: 'On-ground execution at scale',
    description:
      'We translate ideas into impactful interventions through on-ground implementation, CSR partnerships, and multi-stakeholder engagement. Our programs are context-specific, efficient, and outcome-driven.',
    icon: 'BoltIcon',
    tags: ['CSR Partnerships', 'On-ground Execution', 'Multi-stakeholder'],
    metric: { value: '15+', label: 'Strategic Partnerships' },
  },
  {
    number: '03',
    title: 'Verified Impact',
    subtitle: 'Data-driven accountability',
    description:
      'We ensure accountability by measuring outcomes through data-driven frameworks, transparent reporting, and continuous evaluation — enabling evidence-based and scalable impact.',
    icon: 'ChartBarIcon',
    tags: ['Data-driven M&E', 'Transparent Reporting', 'Continuous Evaluation'],
    metric: { value: '1,500+', label: 'Lives Impacted' },
  },
];

export default function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#060E1F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20 border-b border-white/10 pb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs font-display font-600 uppercase tracking-[0.2em]">
                Our Framework
              </span>
            </div>
            <h2
              className={`font-display font-700 text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Our Approach to
              <br />
              <span className="text-white/40">Sustainable Impact</span>
            </h2>
          </div>
          <p className="text-white/50 text-base leading-relaxed font-sans lg:pb-2">
            EcoServeDev follows a structured, systems-driven approach that integrates innovation,
            implementation, and impact measurement — ensuring every intervention is effective,
            scalable, and sustainable.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-12 gap-0 border-b border-white/10 py-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Number */}
              <div className="lg:col-span-2 flex items-start">
                <span className="font-display font-700 text-7xl md:text-8xl text-white/10 leading-none select-none">
                  {step.number}
                </span>
              </div>

              {/* Icon + Title */}
              <div className="lg:col-span-3 flex flex-col justify-start pt-2 mb-6 lg:mb-0">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon name={step.icon as never} size={22} variant="outline" className="text-accent" />
                </div>
                <h3 className="font-display font-700 text-2xl text-white mb-1">{step.title}</h3>
                <p className="text-white/40 text-sm font-sans">{step.subtitle}</p>
              </div>

              {/* Description + Tags */}
              <div className="lg:col-span-5 pt-2 mb-6 lg:mb-0">
                <p className="text-white/60 text-base leading-relaxed font-sans mb-6">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 text-white/50 text-xs font-display font-600 px-3 py-1.5 rounded-full hover:border-accent/30 hover:text-white/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric */}
              <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-start pt-2">
                <div className="text-right">
                  <div className="font-display font-700 text-3xl text-accent">{step.metric.value}</div>
                  <div className="text-white/40 text-xs font-sans mt-1">{step.metric.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy callout */}
        <div className="mt-16 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="approach-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="15" cy="15" r="1" fill="#2E86C1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#approach-dots)" />
            </svg>
          </div>
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="font-display font-600 text-xl md:text-2xl text-white leading-[1.5]">
                "By aligning technology, policy, and community engagement, we create solutions that
                address root causes and enable long-term systemic change."
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-white/50 text-sm font-sans">Systems-level thinking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-white/50 text-sm font-sans">Evidence-based design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-white/50 text-sm font-sans">Transparent accountability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}