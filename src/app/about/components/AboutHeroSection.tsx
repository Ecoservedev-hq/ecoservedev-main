'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function AboutHeroSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#060E1F]">
      {/* Animated geometric grid background */}
      <div
        ref={gridRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ willChange: 'transform' }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
        {/* Diagonal data lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#2E86C1" strokeWidth="1" />
          <line x1="0" y1="60%" x2="100%" y2="20%" stroke="#2E86C1" strokeWidth="0.5" />
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#2E86C1" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0A2463]/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2E86C1]/15 blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center min-h-screen pt-32 pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-display font-600 uppercase tracking-[0.2em]">
              Section 8 Non-Profit · Est. January 2025
            </span>
          </div>

          {/* Main headline — editorial style */}
          <h1 className="font-display font-700 text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-8">
            Driving{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Sustainable</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 -z-0" />
            </span>
            <br />
            <span className="text-white/40">Development</span>
            <br />
            <span className="text-accent">Through Innovation</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-sans">
            EcoServe Development Foundation is a youth-led, innovation-driven non-profit delivering
            scalable climate action, inclusive development, and technology-enabled solutions across
            India and beyond.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/partnerships" className="btn-white">
              Partner With Us
              <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
            </Link>
            <Link
              href="#leadership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-700 font-display text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300"
            >
              Meet the Team
              <Icon name="ArrowDownIcon" size={16} variant="outline" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: 'Jan 2025', label: 'Founded' },
              { value: 'Section 8', label: 'Non-Profit Status' },
              { value: 'Pan India', label: 'Operations' },
              { value: 'UN Affiliated', label: 'Global Platforms' },
            ].map((item) => (
              <div key={item.label} className="px-6 py-5 text-center">
                <div className="font-display font-700 text-white text-lg">{item.value}</div>
                <div className="text-white/40 text-xs font-sans mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/30" />
        <span className="text-white/30 text-[10px] font-display tracking-[0.2em] rotate-90 origin-center translate-y-6">
          SCROLL
        </span>
      </div>
    </section>
  );
}
