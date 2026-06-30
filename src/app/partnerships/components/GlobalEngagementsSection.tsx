'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const globalPartners = [
  { name: 'Ocean Centres India', type: 'Global Initiative', icon: 'GlobeAltIcon', image: '/partners-logo/OIP.jpg' },
  { name: 'UN Decade on Ecosystem Restoration', type: 'United Nations', icon: 'GlobeAsiaAustraliaIcon', image: '/partners-logo/und.jpg' },
  { name: 'World Wetland Network', type: 'Global Network', icon: 'CloudIcon', image: '/partners-logo/wwn.webp' },
  { name: 'UN Convention to Combat Desertification', type: 'United Nations', icon: 'SunIcon', image: '/partners-logo/unccd.jpg' },
  { name: 'UN Biodiversity Credit Alliance', type: 'United Nations', icon: 'SparklesIcon', image: '/bcdd.jpg' },
  { name: 'Planetary Health Alliance', type: 'Global Platform', icon: 'HeartIcon', image: '/partners-logo/pha.jpg' },
];

const communityInstitutions = [
  { name: 'Ghaghra Srishti FPC', type: 'Farmer Producer Company', icon: 'HomeIcon', image: '/partners-logo/gspl.jpeg' },
  { name: 'Ground Water & Reforestation Adaptive Management Association', type: 'Community Institution', icon: 'BuildingOfficeIcon', image: '/partners-logo/gram.jpg' },
  { name: 'Startup Jharkhand', type: 'Community Institution', icon: 'LightBulbIcon', image: '/partners-logo/startupjharkhand.jpeg' },
];

const corporatePartners = [
  { name: 'AdiRa Biocycles', type: 'Corporate Partner', icon: 'TruckIcon', image: '/partners-logo/adira_biocycle_logo.jpg' },
  { name: 'Flocard', type: 'Corporate Partner', icon: 'CreditCardIcon', image: '/partners-logo/flocard.jpg' },
  { name: 'GRAM IQ', type: 'Corporate Partner', icon: 'ChartPieIcon', image: '/partners-logo/gramiq.jpg' },
  { name: 'Organic Affairs', type: 'Corporate Partner', icon: 'LeafIcon', image: '/partners-logo/organic bio.png' },
  { name: 'Talentella', type: 'Corporate Partner', icon: 'UserGroupIcon', url: 'https://talentella.in', image: '/partners-logo/logo.jpg' },
  { name: 'Terranova', type: 'Corporate Partner', icon: 'BriefcaseIcon', image: '/partners-logo/terranova.jpg' },
];

function PartnerCard({ name, type, icon, url, image }: { name: string; type: string; icon: string; url?: string; image?: string }) {
  const CardContent = (
    <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 group h-full">
      <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-primary/5 transition-colors overflow-hidden border border-border/50">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-contain p-1.5 mix-blend-multiply" />
        ) : (
          <Icon name={icon as never} size={24} variant="outline" className="text-primary" />
        )}
      </div>
      <div>
        <p className="font-display font-600 text-base text-foreground leading-tight">{name}</p>
      </div>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
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
            Our Global & Institutional Engagements
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