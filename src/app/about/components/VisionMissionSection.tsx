'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function VisionMissionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div className="space-y-6">
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
              A new generation of development professionals
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              EcoServe Development Foundation is a Section 8 non-profit organisation established in
              January 2025, headquartered in Ranchi with a growing pan-India presence.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Founded by a team of young social entrepreneurs, EcoServeDev was born from direct,
              on-ground experience with complex development and sustainability challenges. The
              organisation blends fresh, innovative thinking with the professionalism and guidance of
              experienced practitioners and domain experts.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              The Foundation is affiliated with leading United Nations and global platforms,
              reflecting its alignment with international standards and collaborative impact frameworks.
            </p>
          </div>

          {/* Stats panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: 'Jan 2025', label: 'Founded', icon: 'CalendarIcon' },
              { value: 'Section 8', label: 'Non-Profit Status', icon: 'DocumentCheckIcon' },
              { value: 'Pan India', label: 'Operations', icon: 'MapPinIcon' },
              { value: 'UN Affiliated', label: 'Global Platforms', icon: 'GlobeAltIcon' },
            ].map((item) => (
              <div key={item.label} className="stat-card">
                <Icon name={item.icon as never} size={20} variant="outline" className="text-accent mb-4" />
                <div>
                  <div className="font-display font-700 text-2xl text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-sans">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="border-t border-border pt-20">
          <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-6 block">
            Our Direction
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight mb-12">
            Our Vision & Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div
              className="bg-primary rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="EyeIcon" size={18} variant="outline" className="text-accent" />
                  </div>
                  <span className="font-display font-700 text-white text-lg">Vision</span>
                </div>
                <p className="text-white/85 text-base leading-relaxed">
                  To shape a future where sustainable and inclusive development is driven by
                  innovation, collaboration, and accountable impact.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="RocketLaunchIcon" size={18} variant="outline" className="text-primary" />
                  </div>
                  <span className="font-display font-700 text-foreground text-lg">Mission</span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  To design, implement, and scale solutions that address complex social and
                  environmental challenges — integrating innovation, on-ground action, and
                  data-driven impact systems.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
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