'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  variant: string;
  colSpan: number;
  rowSpan: number;
  icon: string;
}

const stats: Stat[] = [
  { id: 'trees', value: 150000, suffix: '+', label: 'Trees Planted', sublabel: 'Project VRIKSHA & ecosystem restoration', variant: 'dark', colSpan: 1, rowSpan: 2, icon: 'GlobeAltIcon' },
  { id: 'irrigation', value: 150, suffix: '+', label: 'Acres Under Micro Irrigation', sublabel: 'Water-smart agriculture', variant: 'light', colSpan: 1, rowSpan: 1, icon: 'CloudIcon' },
  { id: 'economic', value: 7, suffix: 'M+', prefix: '₹', label: 'Economic Value Generated', sublabel: 'Across farming communities', variant: 'accent', colSpan: 1, rowSpan: 1, icon: 'CurrencyRupeeIcon' },
  { id: 'acres', value: 500, suffix: '+', label: 'Acres Restored', sublabel: 'Degraded ecosystem recovery', variant: 'light', colSpan: 1, rowSpan: 1, icon: 'MapIcon' },
  { id: 'partnerships', value: 15, suffix: '+', label: 'Strategic Partnerships', sublabel: 'Global & institutional', variant: 'light', colSpan: 1, rowSpan: 1, icon: 'HandshakeIcon' },
  { id: 'lives', value: 1500, suffix: '+', label: 'Lives Impacted', sublabel: 'Across communities in India', variant: 'primary-light', colSpan: 2, rowSpan: 1, icon: 'UserGroupIcon' },
  { id: 'tech', value: 3, suffix: '+', label: 'Technology Solutions Deployed', sublabel: 'Blockchain, AI, GIS', variant: 'dark', colSpan: 1, rowSpan: 1, icon: 'CpuChipIcon' },
];

function formatDisplay(value: number, stat: Stat): string {
  if (stat.id === 'trees') {
    const k = Math.floor(value / 1000);
    return k >= 100 ? `${k.toLocaleString('en-IN')}` : value.toLocaleString('en-IN');
  }
  return value.toLocaleString('en-IN');
}

function AnimatedValue({ stat, active }: { stat: Stat; active: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(stat.value);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, stat.value]);

  const display = stat.id === 'trees'
    ? `${Math.floor(count / 1000).toLocaleString('en-IN')},000`
    : count.toLocaleString('en-IN');

  return (
    <span>
      {stat.prefix}{stat.id === 'trees' ? display : count.toLocaleString('en-IN')}{stat.suffix}
    </span>
  );
}

function StatCard({ stat, active }: { stat: Stat; active: boolean }) {
  const baseClasses = 'rounded-3xl p-5 md:p-6 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1';
  const variantClasses: Record<string, string> = {
    dark: `${baseClasses} bg-primary text-white`,
    light: `${baseClasses} bg-card border border-border text-foreground`,
    accent: `${baseClasses} bg-accent text-white`,
    'primary-light': `${baseClasses} bg-primary/8 border border-primary/20 text-foreground`,
  };
  const classes = variantClasses[stat.variant] || variantClasses.light;
  const iconColor = stat.variant === 'dark' || stat.variant === 'accent' ? 'text-white/60' : 'text-accent';
  const valueColor = stat.variant === 'dark' || stat.variant === 'accent' ? 'text-white' : 'text-primary';
  const labelColor = stat.variant === 'dark' || stat.variant === 'accent' ? 'text-white/80' : 'text-foreground';
  const subColor = stat.variant === 'dark' || stat.variant === 'accent' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <div className={classes} style={{ minHeight: stat.rowSpan === 2 ? '220px' : '110px' }}>
      <div className="flex justify-between items-start mb-3">
        <Icon name={stat.icon as never} size={18} variant="outline" className={iconColor} />
        {stat.rowSpan === 2 && (
          <span className={`text-[10px] font-display font-600 uppercase tracking-widest ${subColor}`}>Flagship</span>
        )}
      </div>
      <div>
        <div className={`font-display font-700 mb-1 leading-tight ${valueColor} ${
          stat.colSpan === 2 ? 'text-4xl md:text-5xl' : stat.rowSpan === 2 ? 'text-4xl' : 'text-2xl md:text-3xl'
        }`}>
          <AnimatedValue stat={stat} active={active} />
        </div>
        <div className={`font-display font-600 text-xs md:text-sm mb-0.5 ${labelColor}`}>{stat.label}</div>
        <div className={`text-[11px] md:text-xs font-sans leading-tight ${subColor}`}>{stat.sublabel}</div>
      </div>
    </div>
  );
}

export default function ImpactBentoSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">Verified Data</span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">Impact in Action</h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-muted-foreground text-sm max-w-xs">
              All metrics supported by structured monitoring systems and verifiable data frameworks.
            </p>
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-display font-700 hover:bg-secondary transition-colors whitespace-nowrap flex-shrink-0"
            >
              Explore Impact
              <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 auto-rows-auto">
          <div className="col-span-1 row-span-2"><StatCard stat={stats[0]} active={active} /></div>
          <div className="col-span-1 row-span-1"><StatCard stat={stats[1]} active={active} /></div>
          <div className="col-span-1 row-span-1"><StatCard stat={stats[2]} active={active} /></div>
          <div className="col-span-1 row-span-1"><StatCard stat={stats[3]} active={active} /></div>
          <div className="col-span-1 row-span-1"><StatCard stat={stats[4]} active={active} /></div>
          <div className="col-span-2 row-span-1"><StatCard stat={stats[5]} active={active} /></div>
          <div className="col-span-1 row-span-1"><StatCard stat={stats[6]} active={active} /></div>
        </div>

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