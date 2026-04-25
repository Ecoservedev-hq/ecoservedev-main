'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function VisionMissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background">
      {/* Who We Are — editorial full-width */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: label + headline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs font-display font-600 uppercase tracking-[0.2em]">
                Who We Are
              </span>
            </div>
            <h2
              className={`font-display font-700 text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              A new generation of development professionals
            </h2>

            {/* Decorative element */}
            <div className="mt-10 relative">
              <div className="w-full h-px bg-border" />
              <div className="absolute left-0 top-0 w-24 h-px bg-accent" />
            </div>

            {/* Key facts */}
            <div className="mt-10 space-y-4">
              {[
                { label: 'Headquarters', value: 'Ranchi, Jharkhand' },
                { label: 'Operations', value: 'Pan India' },
                { label: 'Established', value: 'January 2025' },
                { label: 'Affiliation', value: 'UN & Global Platforms' },
              ]?.map((fact, i) => (
                <div
                  key={fact?.label}
                  className={`flex items-center justify-between py-3 border-b border-border transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-muted-foreground text-sm font-sans">{fact?.label}</span>
                  <span className="font-display font-600 text-foreground text-sm">{fact?.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: editorial text */}
          <div className="lg:col-span-7 lg:pt-16">
            {/* Pull quote */}
            <blockquote className="border-l-4 border-accent pl-8 mb-10">
              <p className="font-display font-600 text-2xl md:text-3xl text-foreground leading-[1.4]">
                "Born from direct, on-ground experience with complex development and sustainability
                challenges."
              </p>
            </blockquote>

            <div className="space-y-5 text-muted-foreground text-base leading-relaxed font-sans">
              <p>
                EcoServe Development Foundation is a Section 8 non-profit organisation established
                in January 2025, headquartered in Ranchi with a growing pan-India presence.
              </p>
              <p>
                Founded by a team of young social entrepreneurs, EcoServeDev blends fresh,
                innovative thinking with the professionalism and guidance of experienced
                practitioners and domain experts — creating a unique model that bridges institutional
                frameworks with on-ground realities.
              </p>
              <p>
                Within a short span, EcoServeDev has implemented technology-enabled,
                innovation-driven interventions across key sectors of sustainable development. The
                Foundation is affiliated with leading United Nations and global platforms, reflecting
                its alignment with international standards and collaborative impact frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Vision & Mission — dark editorial panel */}
      <div className="bg-[#060E1F] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-display font-600 uppercase tracking-[0.2em]">
              Our Direction
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
            {/* Vision */}
            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
              {/* Geometric accent */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#2E86C1" strokeWidth="1" />
                  <circle cx="100" cy="100" r="50" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#2E86C1" strokeWidth="0.5" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#2E86C1" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1.5 rounded-full text-xs font-display font-600 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Vision
                </div>
                <h3 className="font-display font-700 text-3xl md:text-4xl text-white leading-[1.2] mb-6">
                  Shaping a future driven by innovation and accountable impact
                </h3>
                <p className="text-white/60 text-base leading-relaxed font-sans">
                  To shape a future where sustainable and inclusive development is driven by
                  innovation, collaboration, and accountable impact.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="p-10 md:p-14 relative overflow-hidden group">
              {/* Geometric accent */}
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="160" height="160" fill="none" stroke="#2E86C1" strokeWidth="1" />
                  <rect x="50" y="50" width="100" height="100" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                  <rect x="80" y="80" width="40" height="40" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                  <line x1="20" y1="20" x2="180" y2="180" stroke="#2E86C1" strokeWidth="0.5" />
                  <line x1="180" y1="20" x2="20" y2="180" stroke="#2E86C1" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 px-3 py-1.5 rounded-full text-xs font-display font-600 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Mission
                </div>
                <h3 className="font-display font-700 text-3xl md:text-4xl text-white leading-[1.2] mb-6">
                  Design, implement, and scale solutions for complex challenges
                </h3>
                <p className="text-white/60 text-base leading-relaxed font-sans mb-4">
                  To design, implement, and scale solutions that address complex social and
                  environmental challenges — integrating innovation, on-ground action, and
                  data-driven impact systems.
                </p>
                <p className="text-white/40 text-sm leading-relaxed font-sans">
                  We work at the intersection of policy, technology, and communities to enable
                  equitable access, strengthen resilience, and drive long-term systemic change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}