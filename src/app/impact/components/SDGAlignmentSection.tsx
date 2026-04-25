'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const sdgs = [
  { number: 1, title: 'No Poverty', color: '#E5243B', icon: 'HomeIcon' },
  { number: 2, title: 'Zero Hunger', color: '#DDA63A', icon: 'GlobeAltIcon' },
  { number: 5, title: 'Gender Equality', color: '#FF3A21', icon: 'UserGroupIcon' },
  { number: 6, title: 'Clean Water & Sanitation', color: '#26BDE2', icon: 'CloudIcon' },
  { number: 8, title: 'Decent Work & Economic Growth', color: '#A21942', icon: 'BriefcaseIcon' },
  { number: 13, title: 'Climate Action', color: '#3F7E44', icon: 'SunIcon' },
  { number: 15, title: 'Life on Land', color: '#56C02B', icon: 'MapIcon' },
  { number: 17, title: 'Partnerships for the Goals', color: '#19486A', icon: 'HandshakeIcon' },
];

export default function SDGAlignmentSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/15 pb-8">
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Global Alignment
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-white tracking-tight">
              Aligned with the United Nations<br />Sustainable Development Goals
            </h2>
          </div>
          <p className="text-white/60 text-base max-w-md leading-relaxed">
            EcoServeDev aligns its programs with global development priorities, contributing to
            8 of the 17 United Nations SDGs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="group relative overflow-hidden rounded-2xl p-5 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: `${sdg.color}15` }}
            >
              {/* SDG Number badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-display font-700 text-white text-sm"
                style={{ backgroundColor: sdg.color }}
              >
                {sdg.number}
              </div>

              <h3 className="font-display font-600 text-sm text-white leading-tight mb-2">
                {sdg.title}
              </h3>

              <div className="flex items-center gap-1.5 mt-3">
                <Icon name={sdg.icon as never} size={12} variant="outline" className="text-white/40" />
                <span className="text-[10px] text-white/40 font-sans">SDG {sdg.number}</span>
              </div>

              {/* Hover accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: sdg.color }}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <Icon name="InformationCircleIcon" size={20} variant="outline" className="text-accent flex-shrink-0" />
          <p className="text-white/60 text-sm leading-relaxed">
            Our programs are designed to contribute to multiple SDGs simultaneously, recognising
            the interconnected nature of sustainable development challenges. All SDG contributions
            are tracked through our impact measurement framework.
          </p>
        </div>
      </div>
    </section>
  );
}
