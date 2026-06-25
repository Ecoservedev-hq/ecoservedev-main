'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: string;
  note?: string;
}

const stats: Stat[] = [
  { id: 'trees', value: 150000, suffix: '+', label: 'Trees Planted', sublabel: 'Project VRIKSHA & ecosystem restoration', icon: 'GlobeAltIcon' },
  { id: 'irrigation', value: 150, suffix: '+', label: 'Acres Under Micro Irrigation', sublabel: 'Water-smart agriculture', icon: 'CloudIcon' },
  { id: 'acres', value: 500, suffix: '+', label: 'Acres Restored', sublabel: 'Degraded ecosystem recovery', icon: 'MapIcon' },
  { id: 'lives', value: 1500, suffix: '+', label: 'Lives Impacted', sublabel: 'Across communities in India', icon: 'UserGroupIcon' },
  { id: 'economic', value: 7, suffix: 'M+', prefix: '₹', label: 'Economic Value Generated', sublabel: 'Across farming communities', icon: 'CurrencyRupeeIcon' },
  { id: 'partnerships', value: 15, suffix: '+', label: 'Strategic Partnerships', sublabel: 'Global & institutional', icon: 'HandshakeIcon' },
  { id: 'tech', value: 3, suffix: '+', label: 'Technology Solutions Deployed', sublabel: 'Blockchain, AI, GIS', icon: 'CpuChipIcon' },
];

function formatNumber(n: number): string {
  if (n >= 100000) return (n / 1000).toFixed(0) + ',000';
  if (n >= 1000) return n.toLocaleString('en-IN');
  return n.toString();
}

function AnimatedCounter({ stat, active }: { stat: Stat; active: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
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

  const display = stat.value >= 1000 ? formatNumber(count) : count.toString();

  return (
    <div className="font-display font-700 text-4xl md:text-5xl text-primary">
      {stat.prefix}{display}{stat.suffix}
    </div>
  );
}

export default function ImpactCountersSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="counters" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Verified Data
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
              Impact at a Glance
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            All impact metrics are supported by structured monitoring systems and verifiable data frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.slice(0, 4).map((stat) => (
            <div key={stat.id} className="stat-card group">
              <div className="flex justify-between items-start mb-6">
                <Icon name={stat.icon as never} size={20} variant="outline" className="text-accent" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              </div>
              <AnimatedCounter stat={stat} active={active} />
              <div className="mt-3">
                <div className="font-display font-600 text-sm text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground font-sans">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {stats.slice(4).map((stat, i) => (
            <div
              key={stat.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? 'bg-primary text-white' : i === 1 ? 'bg-accent text-white' : 'stat-card'
              }`}
              style={{ minHeight: '160px' }}
            >
              <div className="flex justify-between items-start mb-4">
                <Icon
                  name={stat.icon as never}
                  size={20}
                  variant="outline"
                  className={i < 2 ? 'text-white/60' : 'text-accent'}
                />
              </div>
              <div>
                <div className={`font-display font-700 text-4xl mb-1 ${i < 2 ? 'text-white' : 'text-primary'}`}>
                  {stat.prefix}{active ? stat.value.toLocaleString('en-IN') : 0}{stat.suffix}
                </div>
                <div className={`font-display font-600 text-sm mb-1 ${i < 2 ? 'text-white/80' : 'text-foreground'}`}>
                  {stat.label}
                </div>
                <div className={`text-xs font-sans ${i < 2 ? 'text-white/50' : 'text-muted-foreground'}`}>
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="ShieldCheckIcon" size={14} variant="outline" className="text-accent" />
          All metrics supported by structured monitoring systems and verifiable data frameworks
        </div>
      </div>
    </section>
  );
}
