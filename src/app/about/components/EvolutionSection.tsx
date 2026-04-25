'use client';

import React, { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    period: 'Jan 2025',
    title: 'Foundation Established',
    description:
      'EcoServe Development Foundation incorporated as a Section 8 non-profit in Ranchi, Jharkhand — bringing together young social entrepreneurs with a shared vision for systems-level change.',
    tag: 'Origin',
    accent: true,
  },
  {
    period: 'Q1 2025',
    title: 'Project VRIKSHA Launched',
    description:
      'Initiated large-scale ecosystem restoration across degraded landscapes — planting 1,50,000+ trees and restoring 400+ acres through community-led implementation.',
    tag: 'Environment',
    accent: false,
  },
  {
    period: 'Q2 2025',
    title: 'UN Platform Affiliations',
    description:
      'Affiliated with leading United Nations platforms including the UN Decade on Ecosystem Restoration, World Wetland Network, and UN Biodiversity Credit Alliance.',
    tag: 'Global',
    accent: false,
  },
  {
    period: 'Q3 2025',
    title: 'Technology Innovation',
    description:
      'Deployed blockchain-based traceability systems and GIS-enabled monitoring tools — establishing a new standard for transparent, verifiable impact reporting.',
    tag: 'Technology',
    accent: false,
  },
  {
    period: 'Q4 2025',
    title: 'Dharampur Valley Initiative',
    description:
      'Launched community-led sustainable rural tourism model in Dharampur Valley, generating livelihoods and strengthening local economies.',
    tag: 'Livelihoods',
    accent: false,
  },
  {
    period: '2026',
    title: 'Global Stage Recognition',
    description:
      'Represented at Breakpoint 2025 Abu Dhabi and Impact AI Summit 2026 New Delhi — establishing EcoServeDev as a credible voice in global sustainability and digital inclusion discourse.',
    tag: 'Recognition',
    accent: false,
  },
];

export default function EvolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs font-display font-600 uppercase tracking-[0.2em]">
                Our Journey
              </span>
            </div>
            <h2
              className={`font-display font-700 text-4xl md:text-5xl text-foreground leading-[1.1] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              From Idea to
              <br />
              <span className="text-accent">Global Impact</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed font-sans lg:pb-2">
            In just over a year, EcoServeDev has moved from inception to implementing
            technology-enabled interventions across multiple domains — building credibility,
            partnerships, and measurable impact at scale.
          </p>
        </div>

        {/* Timeline — horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-border z-0" />
          <div
            className={`hidden lg:block absolute top-[2.75rem] left-0 h-px bg-accent z-0 transition-all duration-1000 ease-out ${visible ? 'w-full' : 'w-0'}`}
            style={{ transitionDelay: '300ms' }}
          />

          <div className="grid lg:grid-cols-6 gap-0 lg:gap-0">
            {milestones?.map((milestone, i) => (
              <div
                key={milestone?.period}
                className={`relative cursor-pointer transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100 + 400}ms` }}
                onClick={() => setActiveIndex(i)}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center mb-6">
                  <div
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${activeIndex === i ? 'bg-accent border-accent scale-125' : 'bg-background border-border hover:border-accent'}`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`lg:px-4 py-4 lg:py-0 border-l-2 lg:border-l-0 lg:border-t-0 mb-6 lg:mb-0 transition-all duration-300 ${activeIndex === i ? 'border-accent' : 'border-border'}`}
                >
                  <div className="pl-4 lg:pl-0">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-display font-600 mb-3 transition-colors ${activeIndex === i ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-muted text-muted-foreground border border-border'}`}
                    >
                      {milestone?.tag}
                    </div>
                    <div className="font-display font-700 text-foreground text-sm mb-1">
                      {milestone?.period}
                    </div>
                    <h3 className="font-display font-600 text-foreground text-sm leading-snug mb-2">
                      {milestone?.title}
                    </h3>
                    <p
                      className={`text-muted-foreground text-xs leading-relaxed font-sans transition-all duration-300 ${activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:max-h-40 lg:opacity-60'} overflow-hidden`}
                    >
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active milestone detail — desktop only */}
        <div className="hidden lg:block mt-12 border border-border rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <div className="bg-primary p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/30 text-accent px-3 py-1 rounded-full text-xs font-display font-600 mb-4">
                  {milestones?.[activeIndex]?.tag}
                </div>
                <div className="font-display font-700 text-white/50 text-5xl mb-2">
                  {milestones?.[activeIndex]?.period}
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {milestones?.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-accent w-6' : 'bg-white/20 w-3 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 p-8 bg-card">
              <h3 className="font-display font-700 text-2xl text-foreground mb-4">
                {milestones?.[activeIndex]?.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed font-sans">
                {milestones?.[activeIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
