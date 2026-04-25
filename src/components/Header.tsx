'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'About', href: '/about' },
  { label: 'Work & Innovation', href: '/homepage#work' },
  { label: 'Impact', href: '/homepage#impact' },
  { label: 'Partnerships', href: '/partnerships' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2.5 group">
            <AppLogo
              size={36}
              className="transition-transform duration-200 group-hover:scale-105"
            />
            <span
              className={`font-display font-700 text-base tracking-tight hidden sm:block transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              EcoServeDev
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium font-display transition-colors duration-200 ${
                  isActive(link.href)
                    ? scrolled
                      ? 'text-accent' :'text-accent'
                    : scrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/partnerships"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-700 font-display transition-all duration-200 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-secondary' :'bg-white text-primary hover:bg-white/90'
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
                scrolled ? 'text-primary hover:bg-muted' : 'text-white hover:bg-white/10'
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
          className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-md flex flex-col pt-20 px-6 pb-8 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-lg font-display font-600 border-b border-white/10 transition-colors ${
                  isActive(link.href) ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
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