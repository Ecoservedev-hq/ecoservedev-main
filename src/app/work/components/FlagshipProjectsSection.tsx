'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const projects = [
  {
    id: 'vriksha',
    number: '01',
    title: 'Project VRIKSHA',
    subtitle: 'Ecosystem Restoration at Scale',
    description: 'Reviving degraded landscapes through large-scale afforestation and ecosystem restoration — enhancing biodiversity, strengthening climate resilience, and enabling community stewardship.',
    metrics: [
      { label: 'Trees Planted', value: '1,50,000+' },
      { label: 'Acres Restored', value: '400+' },
    ],
    tags: ['Afforestation', 'Biodiversity', 'Climate Resilience'],
    status: 'Active',
  },
  {
    id: 'dharampur',
    number: '02',
    title: 'Dharampur Valley Initiative',
    subtitle: 'Sustainable Rural Tourism',
    description: 'Developing community-led tourism models that generate livelihoods, strengthen local economies, and promote sustainable rural development.',
    metrics: [
      { label: 'Community Members', value: '30+' },
      { label: 'Livelihood Models', value: '2' },
    ],
    tags: ['Rural Tourism', 'Livelihoods', 'Community-led'],
    status: 'Active',
  },
  {
    id: 'ai-growth',
    number: '03',
    title: 'AI for Inclusive Growth',
    subtitle: 'Ethical AI for Communities',
    description: 'Empowering communities with ethical AI-enabled tools and knowledge to improve productivity, decision-making, and access to real-time insights.',
    metrics: [
      { label: 'Tech Solutions', value: '2' },
      { label: 'Expected Reach', value: '10,000+' },
    ],
    tags: ['Ethical AI', 'Digital Inclusion', 'Productivity'],
    status: 'Ongoing',
  },
  {
    id: 'sahkar',
    number: '04',
    title: 'Sahkar Vikas',
    subtitle: 'Enabling Growth Through Cooperation',
    description: 'Supporting community-based institutions to improve governance, enhance livelihoods, and drive inclusive rural development.',
    metrics: [
      { label: 'Farmers Engaged', value: '1,500+' },
      { label: 'Economic Value', value: '₹9.5M+' },
    ],
    tags: ['Cooperatives', 'Rural Development', 'Governance'],
    status: 'Active',
  },
  {
    id: 'harvest',
    number: '05',
    title: 'Sustainable Harvest Network',
    subtitle: 'Agricultural Value Chain Development',
    description: 'A systems-driven initiative focused on strengthening sustainable agricultural ecosystems by enabling value chain development, from production to market access.',
    metrics: [
      { label: 'Villages Reached', value: '7+' },
      { label: 'Harvest Cycles', value: '15+' },
    ],
    tags: ['Agriculture', 'Value Chain', 'Market Access'],
    status: 'Active',
  },
];

export default function FlagshipProjectsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Flagship Initiatives
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Our Flagship Projects
            </h2>
          </div>
          <Link href="/impact" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-display font-700 hover:bg-secondary transition-colors whitespace-nowrap flex-shrink-0">
            View Impact Data
            <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
          </Link>
        </div>

        <div className="space-y-0">
          {projects?.map((project, i) => (
            <div
              key={project?.id}
              className={`grid md:grid-cols-12 gap-6 py-8 border-b border-border cursor-pointer transition-all duration-300 group ${hovered === project?.id ? 'bg-muted/50 -mx-4 px-4 rounded-2xl' : ''}`}
              onMouseEnter={() => setHovered(project?.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-display font-700 text-2xl text-primary/20 group-hover:text-primary/40 transition-colors">
                  {project?.number}
                </span>
              </div>

              {/* Title + Status */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-display font-600 text-accent uppercase tracking-widest">{project?.status}</span>
                </div>
                <h3 className="font-display font-700 text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project?.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{project?.subtitle}</p>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{project?.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project?.tags?.map((tag) => (
                    <span key={tag} className="bg-muted text-muted-foreground text-[10px] font-600 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="md:col-span-3 flex gap-6 items-start">
                {project?.metrics?.map((m) => (
                  <div key={m?.label}>
                    <div className="font-display font-700 text-2xl text-primary">{m?.value}</div>
                    <div className="text-xs text-muted-foreground font-sans mt-0.5">{m?.label}</div>
                  </div>
                ))}
                <div className="ml-auto">
                  <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${hovered === project?.id ? 'bg-primary border-primary' : ''}`}>
                    <Icon name="ArrowUpRightIcon" size={14} variant="outline" className={hovered === project?.id ? 'text-white' : 'text-muted-foreground'} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
