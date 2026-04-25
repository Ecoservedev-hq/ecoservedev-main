'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const globalPartners = [
  { name: 'Ocean Centres India', type: 'Global Network', icon: 'GlobeAltIcon' },
  { name: 'UN Decade on Ecosystem Restoration', type: 'United Nations', icon: 'GlobeAmericasIcon' },
  { name: 'World Wetland Network', type: 'Global Network', icon: 'CloudIcon' },
  { name: 'UN Convention to Combat Desertification', type: 'United Nations', icon: 'SunIcon' },
  { name: 'UN Biodiversity Credit Alliance', type: 'United Nations', icon: 'SparklesIcon' },
  { name: 'Planetary Health Alliance', type: 'Global Platform', icon: 'HeartIcon' },
];

const communityInstitutions = [
  { name: 'Ghaghra Srishti FPC', type: 'Farmer Producer Company', icon: 'HomeIcon' },
  { name: 'Ground Water & Reforestation Adaptive Management Association', type: 'Community Institution', icon: 'BuildingOfficeIcon' },
];

const corporatePartners = [
  { name: 'AdiRa Bicycles', type: 'Corporate Partner', icon: 'TruckIcon' },
  { name: 'Flocard', type: 'Corporate Partner', icon: 'CreditCardIcon' },
  { name: 'GRAM IQ', type: 'Corporate Partner', icon: 'ChartPieIcon' },
  { name: 'Organic Affairs', type: 'Corporate Partner', icon: 'LeafIcon' },
];

function PartnerCard({ name, type, icon }: { name: string; type: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all duration-200 group">
      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
        <Icon name={icon as never} size={18} variant="outline" className="text-primary" />
      </div>
      <div>
        <p className="font-display font-600 text-sm text-foreground leading-tight">{name}</p>
        <p className="text-xs text-muted-foreground font-sans mt-0.5">{type}</p>
      </div>
    </div>
  );
}

export default function GlobalEngagementsSection() {
  return (
    <section className="py-20 bg-card section-rounded-top">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 border-b border-border pb-8">
          <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
            Global Network
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
            Our Global & Institutional Partnerships
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl leading-relaxed">
            EcoServeDev collaborates with leading global organisations, United Nations initiatives,
            and international networks to advance sustainability, ecosystem restoration, and climate
            resilience.
          </p>
        </div>

        {/* Global Engagements */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="GlobeAltIcon" size={16} variant="outline" className="text-primary" />
            </div>
            <h3 className="font-display font-700 text-xl text-foreground">Global Engagements</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {globalPartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Community Institutions */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Icon name="UserGroupIcon" size={16} variant="outline" className="text-accent" />
            </div>
            <h3 className="font-display font-700 text-xl text-foreground">Community Institutions</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {communityInstitutions.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Corporate Partners */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="BuildingOffice2Icon" size={16} variant="outline" className="text-primary" />
            </div>
            <h3 className="font-display font-700 text-xl text-foreground">Corporate Partners</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {corporatePartners.map((p) => (
              <PartnerCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}