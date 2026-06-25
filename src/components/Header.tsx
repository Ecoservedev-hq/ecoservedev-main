'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

interface MegaItem {
  label: string;
  href: string;
  description: string;
  icon: string;
}

interface NavLink {
  label: string;
  href: string;
  mega?: MegaItem[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/homepage' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Work',
    href: '/work',
    mega: [
      { label: 'Work & Innovation', href: '/work', description: 'Scalable solutions for complex global challenges', icon: 'LightBulbIcon' },
      { label: 'Climate & Environment', href: '/work#focus-areas', description: 'Ecosystem restoration and climate resilience', icon: 'GlobeAltIcon' },
      { label: 'Inclusive Development', href: '/work#focus-areas', description: 'Livelihoods, equity, and community resilience', icon: 'UserGroupIcon' },
      { label: 'Technology for Good', href: '/work#focus-areas', description: 'AI, blockchain, and digital innovation', icon: 'CpuChipIcon' },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    mega: [
      { label: 'Impact & SDGs', href: '/impact', description: 'Measurable outcomes across communities', icon: 'ChartBarIcon' },
      { label: 'Impact Data', href: '/impact#counters', description: 'Verified metrics and data frameworks', icon: 'DocumentChartBarIcon' },
      { label: 'SDG Alignment', href: '/impact#sdgs', description: 'Contributing to 8 UN Sustainable Development Goals', icon: 'GlobeAmericasIcon' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    mega: [
      { label: 'All Insights', href: '/insights', description: 'Research, blogs, and knowledge resources', icon: 'DocumentTextIcon' },
      { label: 'Research', href: '/insights', description: 'Data-driven research and analysis', icon: 'BeakerIcon' },
      { label: 'CSR Guides', href: '/insights', description: 'Practical guides for corporate sustainability', icon: 'BriefcaseIcon' },
    ],
  },
  { label: 'Partnerships', href: '/partnerships' },
];

export default function Header({ theme = 'transparent' }: { theme?: 'transparent' | 'solid' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const handleMegaEnter = (label: string) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setActiveMega(label);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 120);
  };

  const isSolid = theme === 'solid' || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isSolid
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2.5 group flex-shrink-0">
            <AppLogo
              size={36}
              className="transition-transform duration-200 group-hover:scale-105"
            />
            <span
              className={`font-display font-700 text-base tracking-tight hidden sm:block transition-colors duration-300 ${
                isSolid ? 'text-primary' : 'text-white'
              }`}
            >
              EcoServeDev
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.mega ? handleMegaEnter(link.label) : undefined}
                onMouseLeave={link.mega ? handleMegaLeave : undefined}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium font-display transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-accent'
                      : isSolid
                      ? 'text-foreground hover:text-accent hover:bg-muted'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {link.mega && (
                    <Icon
                      name="ChevronDownIcon"
                      size={12}
                      variant="outline"
                      className={`transition-transform duration-200 ${activeMega === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {link.mega && activeMega === link.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white border border-border rounded-2xl shadow-xl overflow-hidden z-50"
                    onMouseEnter={() => handleMegaEnter(link.label)}
                    onMouseLeave={handleMegaLeave}
                  >
                    <div className="p-2">
                      {link.mega.map((item) => (
                        <Link
                          key={item.href + item.label}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                          onClick={() => setActiveMega(null)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors mt-0.5">
                            <Icon name={item.icon as never} size={15} variant="outline" className="text-primary" />
                          </div>
                          <div>
                            <div className="font-display font-700 text-sm text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/partnerships"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-700 font-display transition-all duration-200 ${
                isSolid
                  ? 'bg-primary text-white hover:bg-secondary' : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Partner With Us
              <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isSolid ? 'text-primary hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} variant="outline" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0A2463]/95 backdrop-blur-md flex flex-col pt-20 px-6 pb-8 md:hidden overflow-y-auto"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-4 text-lg font-display font-600 border-b border-white/10 transition-colors ${
                    isActive(link.href) ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  {link.label}
                  {link.mega && <Icon name="ChevronRightIcon" size={16} variant="outline" className="text-white/40" />}
                </Link>
                {link.mega && (
                  <div className="pl-4 pb-2">
                    {link.mega.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 py-2.5 text-sm text-white/60 hover:text-white/90 transition-colors font-sans"
                      >
                        <Icon name={item.icon as never} size={14} variant="outline" className="text-accent/60" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
              <Link
                href="/partnerships"
                onClick={() => setMenuOpen(false)}
                className="btn-white w-full justify-center text-center"
              >
                Partner With Us
                <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}