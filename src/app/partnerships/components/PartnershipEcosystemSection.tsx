'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const partnerTypes = [
  {
    id: 'corporates',
    title: 'Corporates (CSR)',
    subtitle: 'ESG-aligned impact',
    description:
      'Design and implement impactful CSR projects aligned with ESG frameworks, SDGs, and regulatory priorities. We handle end-to-end program design, implementation, and verified reporting.',
    benefits: [
      'ESG-aligned project design',
      'SDG-mapped interventions',
      'Real-time impact reporting',
      'Regulatory compliance support',
    ],
    icon: 'BuildingOffice2Icon',
    color: 'bg-primary',
    textColor: 'text-white',
  },
  {
    id: 'governments',
    title: 'Governments',
    subtitle: 'Data-driven governance',
    description:
      'Partner with public institutions to strengthen program delivery and enable data-driven governance. We bring technology, community networks, and implementation capacity.',
    benefits: [
      'Program design & delivery',
      'Technology-enabled governance',
      'Community mobilisation',
      'Monitoring & evaluation',
    ],
    icon: 'BuildingLibraryIcon',
    color: 'bg-card',
    textColor: 'text-foreground',
  },
  {
    id: 'institutions',
    title: 'Institutions',
    subtitle: 'Innovation & evidence',
    description:
      'Engage with academic and research organisations to drive innovation and evidence-based solutions. We co-create knowledge products, pilot programs, and scalable frameworks.',
    benefits: [
      'Joint research programs',
      'Pilot project design',
      'Knowledge product co-creation',
      'Evidence-based frameworks',
    ],
    icon: 'AcademicCapIcon',
    color: 'bg-card',
    textColor: 'text-foreground',
  },
  {
    id: 'communities',
    title: 'Communities',
    subtitle: 'Grassroots co-creation',
    description:
      'Co-create inclusive, resilient livelihood models with grassroots organisations and FPCs. We work alongside communities to design contextually relevant, sustainable interventions.',
    benefits: [
      'FPC & SHG partnerships',
      'Co-designed programs',
      'Livelihood development',
      'Community governance',
    ],
    icon: 'UserGroupIcon',
    color: 'bg-accent',
    textColor: 'text-white',
  },
];

export default function PartnershipEcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Collaboration Models
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Our Partnership Ecosystem
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-muted-foreground text-base max-w-xs leading-relaxed">
              A diverse network of stakeholders delivering sustainable development across India.
            </p>
            <Link href="#partner-form" className="btn-primary whitespace-nowrap flex-shrink-0">
              Partner With Us
              <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {partnerTypes.map((pt) => (
            <div
              key={pt.id}
              className={`rounded-3xl p-8 border ${
                pt.color === 'bg-card' ?'bg-card border-border hover:border-primary/30'
                  : pt.color === 'bg-primary' ?'bg-primary border-primary' :'bg-accent border-accent'
              } transition-all duration-300 hover:shadow-lg group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      pt.color === 'bg-card' ? 'bg-muted' : 'bg-white/15'
                    }`}
                  >
                    <Icon
                      name={pt.icon as never}
                      size={20}
                      variant="outline"
                      className={pt.color === 'bg-card' ? 'text-primary' : 'text-white'}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-700 text-xl ${
                        pt.color === 'bg-card' ? 'text-foreground' : 'text-white'
                      }`}
                    >
                      {pt.title}
                    </h3>
                    <p
                      className={`text-xs font-display font-600 mt-0.5 ${
                        pt.color === 'bg-card' ? 'text-accent' : 'text-white/60'
                      }`}
                    >
                      {pt.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  pt.color === 'bg-card' ? 'text-muted-foreground' : 'text-white/75'
                }`}
              >
                {pt.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {pt.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        pt.color === 'bg-card' ? 'bg-accent' : 'bg-white/50'
                      }`}
                    />
                    <span
                      className={`text-sm font-sans ${
                        pt.color === 'bg-card' ? 'text-foreground' : 'text-white/80'
                      }`}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}