'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

// BENTO GRID AUDIT
// Array has 7 cards: [TreesPlanted, MicroIrrigation, AcresRestored, LivesImpacted, EconomicValue, Partnerships, TechSolutions]
// Grid: 3 cols
// Row 1: [col-1 cs-1 rs-2: TreesPlanted] [col-2 cs-1: MicroIrrigation] [col-3 cs-1: EconomicValue]
// Row 2: [col-1 FILLED by TreesPlanted] [col-2 cs-1: AcresRestored] [col-3 cs-1: Partnerships]
// Row 3: [col-1 cs-2: LivesImpacted] [col-3 cs-1: TechSolutions]
// Placed 7/7 cards ✓

const stats = [
  {
    id: 'trees',
    value: '1,50,000+',
    label: 'Trees Planted',
    sublabel: 'Project VRIKSHA & ecosystem restoration',
    variant: 'dark',
    colSpan: 1,
    rowSpan: 2,
    icon: 'GlobeAltIcon',
  },
  {
    id: 'irrigation',
    value: '150+',
    label: 'Acres Under Micro Irrigation',
    sublabel: 'Water-smart agriculture',
    variant: 'light',
    colSpan: 1,
    rowSpan: 1,
    icon: 'CloudIcon',
  },
  {
    id: 'economic',
    value: '₹7M+',
    label: 'Economic Value Generated',
    sublabel: 'Across farming communities',
    variant: 'accent',
    colSpan: 1,
    rowSpan: 1,
    icon: 'CurrencyRupeeIcon',
  },
  {
    id: 'acres',
    value: '500+',
    label: 'Acres Restored',
    sublabel: 'Degraded ecosystem recovery',
    variant: 'light',
    colSpan: 1,
    rowSpan: 1,
    icon: 'MapIcon',
  },
  {
    id: 'partnerships',
    value: '15+',
    label: 'Strategic Partnerships',
    sublabel: 'Global & institutional',
    variant: 'light',
    colSpan: 1,
    rowSpan: 1,
    icon: 'HandshakeIcon',
  },
  {
    id: 'lives',
    value: '1,500+',
    label: 'Lives Impacted',
    sublabel: 'Across communities in India',
    variant: 'primary-light',
    colSpan: 2,
    rowSpan: 1,
    icon: 'UserGroupIcon',
  },
  {
    id: 'tech',
    value: '3+',
    label: 'Technology Solutions Deployed',
    sublabel: 'Blockchain, AI, GIS',
    variant: 'dark',
    colSpan: 1,
    rowSpan: 1,
    icon: 'CpuChipIcon',
  },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const baseClasses = 'rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1';

  const variantClasses: Record<string, string> = {
    dark: `${baseClasses} bg-primary text-white`,
    light: `${baseClasses} bg-card border border-border text-foreground`,
    accent: `${baseClasses} bg-accent text-white`,
    'primary-light': `${baseClasses} bg-primary/8 border border-primary/20 text-foreground`,
  };

  const classes = variantClasses[stat.variant] || variantClasses.light;

  const iconColor =
    stat.variant === 'dark' || stat.variant === 'accent'
      ? 'text-white/60' :'text-accent';

  const valueColor =
    stat.variant === 'dark' || stat.variant === 'accent'
      ? 'text-white' :'text-primary';

  const labelColor =
    stat.variant === 'dark' || stat.variant === 'accent'
      ? 'text-white/80' :'text-foreground';

  const subColor =
    stat.variant === 'dark' || stat.variant === 'accent'
      ? 'text-white/50' :'text-muted-foreground';

  return (
    <div className={classes} style={{ minHeight: stat.rowSpan === 2 ? '280px' : '130px' }}>
      <div className="flex justify-between items-start mb-4">
        <Icon name={stat.icon as never} size={20} variant="outline" className={iconColor} />
        {stat.rowSpan === 2 && (
          <span className={`text-[10px] font-display font-600 uppercase tracking-widest ${subColor}`}>
            Flagship
          </span>
        )}
      </div>
      <div>
        <div className={`font-display font-700 mb-1 ${valueColor} ${
          stat.colSpan === 2 ? 'text-5xl md:text-6xl' : stat.rowSpan === 2 ? 'text-5xl' : 'text-3xl md:text-4xl'
        }`}>
          {stat.value}
        </div>
        <div className={`font-display font-600 text-sm mb-1 ${labelColor}`}>
          {stat.label}
        </div>
        <div className={`text-xs font-sans ${subColor}`}>
          {stat.sublabel}
        </div>
      </div>
    </div>
  );
}

export default function ImpactBentoSection() {
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Verified Data
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Impact in Action
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-muted-foreground text-sm max-w-xs">
              All metrics supported by structured monitoring systems and verifiable data frameworks.
            </p>
            <Link
              href="/homepage#impact"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-display font-700 hover:bg-secondary transition-colors whitespace-nowrap flex-shrink-0"
            >
              Explore Impact
              <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-3 gap-4 auto-rows-auto">
          {/* Row 1 + spanning: TreesPlanted (col-1, rs-2) */}
          {/* STEP 4 JSX comments: */}
          {/* [col-1: TreesPlanted cs-1 rs-2] */}
          <div className="col-span-1 row-span-2">
            <StatCard stat={stats[0]} />
          </div>

          {/* [col-2: MicroIrrigation cs-1 rs-1] */}
          <div className="col-span-1 row-span-1">
            <StatCard stat={stats[1]} />
          </div>

          {/* [col-3: EconomicValue cs-1 rs-1] */}
          <div className="col-span-1 row-span-1">
            <StatCard stat={stats[2]} />
          </div>

          {/* Row 2 — col-1 filled by TreesPlanted */}
          {/* [col-2: AcresRestored cs-1 rs-1] */}
          <div className="col-span-1 row-span-1">
            <StatCard stat={stats[3]} />
          </div>

          {/* [col-3: Partnerships cs-1 rs-1] */}
          <div className="col-span-1 row-span-1">
            <StatCard stat={stats[4]} />
          </div>

          {/* Row 3 */}
          {/* [col-1: LivesImpacted cs-2 rs-1] */}
          <div className="col-span-2 row-span-1">
            <StatCard stat={stats[5]} />
          </div>

          {/* [col-3: TechSolutions cs-1 rs-1] */}
          <div className="col-span-1 row-span-1">
            <StatCard stat={stats[6]} />
          </div>
        </div>

        {/* Mobile: single column fallback */}
        <style>{`
          @media (max-width: 640px) {
            #impact .grid { grid-template-columns: 1fr 1fr !important; }
            #impact .col-span-2 { grid-column: span 2 !important; }
            #impact .col-span-1 { grid-column: span 1 !important; }
            #impact .row-span-2 { row-span: 1 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}