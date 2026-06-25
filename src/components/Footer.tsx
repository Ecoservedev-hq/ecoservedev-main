'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'About', href: '/about' },
  { label: 'Impact', href: '/homepage#impact' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const socialLinks = [
  { label: 'Twitter', icon: 'GlobeAltIcon', href: '#' },
  { label: 'LinkedIn', icon: 'BuildingOffice2Icon', href: '#' },
  { label: 'Instagram', icon: 'CameraIcon', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Arc Browser Split Pattern */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/homepage" className="flex items-center gap-2.5 group w-fit">
              <AppLogo size={32} onClick={() => {}} />
              <span className="font-display font-700 text-base text-primary tracking-tight">
                EcoServeDev
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Youth-led. Innovation-driven. Measurable impact across India and beyond.
            </p>
            <p className="text-xs text-muted-foreground">
              HQ — Ranchi, Jharkhand, India
            </p>
            <p className="text-xs font-500 text-muted-foreground">
              ECOSERVEDEV@GMAIL.COM
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 items-start content-start">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-500 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 EcoServe Development Foundation. Section 8 Non-Profit.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:ECOSERVEDEV@GMAIL.COM"
              className="text-sm font-500 text-accent hover:text-primary transition-colors min-h-[44px] flex items-center uppercase"
            >
              ECOSERVEDEV@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}