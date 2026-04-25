'use client';

import React from 'react';


const leaders = [
  {
    name: 'Samrat Kumar Pethe Patil',
    role: 'Founder',
    domain: 'Public Policy & Social Entrepreneurship',
    description:
      'A social entrepreneur with expertise in Public Administration and Business Management, trained by international agencies and premier government institutions. Innovation Ambassador with the Government of India.',
    tags: ['Innovation Ambassador', 'GoI', 'Public Policy'],
    initials: 'SP',
    featured: true,
  },
  {
    name: 'Arkraj Biswas',
    role: 'Environment, Sustainability & Research',
    domain: 'Environmental Sciences & Agriculture',
    description:
      'Leads environmental planning, research, and impact assessment with a focus on data-driven and systems-based approaches. Academic qualifications in Agriculture and Environmental Sciences.',
    tags: ['Environmental Planning', 'Research', 'Impact Assessment'],
    initials: 'AB',
    featured: false,
  },
  {
    name: 'Kumar Shivam',
    role: 'Technology for Good',
    domain: 'Blockchain & Digital Systems',
    description:
      'Leads technology innovation leveraging blockchain and digital systems to design scalable, high-impact solutions focused on transparency, operational efficiency, and systemic transformation.',
    tags: ['Blockchain', 'Digital Innovation', 'Transparency'],
    initials: 'KS',
    featured: false,
  },
  {
    name: 'Chanchal Kumari',
    role: 'Technology for Good',
    domain: 'Digital Platforms & Dashboards',
    description:
      'Supports technology implementation by developing digital platforms, tools, and dashboards that improve transparency, traceability, and real-time impact tracking.',
    tags: ['Digital Platforms', 'Dashboards', 'Traceability'],
    initials: 'CK',
    featured: false,
  },
  {
    name: 'Adv. Roshan',
    role: 'Legal Affairs',
    domain: 'Supreme Court & High Courts',
    description:
      'Practices across the Supreme Court of India, various High Courts, and tribunals, providing legal advisory and compliance support to the Foundation.',
    tags: ['Supreme Court', 'Legal Advisory', 'Compliance'],
    initials: 'AR',
    featured: false,
  },
  {
    name: 'Gulam Gauhar Warsi',
    role: 'Finance & Compliance',
    domain: 'Chartered Accountant',
    description:
      'A Chartered Accountant with extensive experience in financial management and compliance for social enterprises and development organisations.',
    tags: ['Chartered Accountant', 'Finance', 'Compliance'],
    initials: 'GW',
    featured: false,
  },
  {
    name: 'Tripti',
    role: 'Human Resources',
    domain: 'Organisational Development',
    description:
      'Holds a Master\'s degree in Psychology and leads human resource functions, focusing on organisational development and building a mission-driven workforce.',
    tags: ['Psychology', 'HR', 'Organisational Development'],
    initials: 'TR',
    featured: false,
  },
];

const advisors = [
  { name: 'Khushboo Singh', domain: 'CSR Design & Implementation', initials: 'KhS' },
  { name: 'Prof. Hina Bijili', domain: 'Community Development', initials: 'HB' },
  { name: 'Shashank Singh', domain: 'Policy & Governance', initials: 'ShS' },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 border-b border-border pb-8">
          <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
            The Team
          </span>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight">
            Our Leadership
          </h2>
          <p className="text-muted-foreground text-base mt-4 max-w-xl leading-relaxed">
            A multidisciplinary team with expertise spanning public policy, sustainability,
            technology, law, finance, and organisational development.
          </p>
        </div>

        {/* Featured founder card */}
        <div className="mb-8">
          <div className="bg-primary rounded-3xl p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
            {/* Avatar */}
            <div className="flex items-center gap-6 md:col-span-1">
              <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-700 text-2xl text-accent">
                  {leaders?.[0]?.initials}
                </span>
              </div>
              <div>
                <h3 className="font-display font-700 text-xl text-white leading-tight">
                  {leaders?.[0]?.name}
                </h3>
                <p className="text-accent text-sm font-display font-600 mt-1">
                  {leaders?.[0]?.role}
                </p>
                <p className="text-white/50 text-xs mt-1 font-sans">
                  {leaders?.[0]?.domain}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <p className="text-white/75 text-base leading-relaxed mb-4">
                {leaders?.[0]?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {leaders?.[0]?.tags?.map((tag) => (
                  <span key={tag} className="bg-white/10 text-white/80 text-xs font-display font-600 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team grid — 3 cols */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {leaders?.slice(1)?.map((member) => (
            <div
              key={member?.name}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <span className="font-display font-700 text-base text-primary">
                    {member?.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-700 text-base text-foreground leading-tight">
                    {member?.name}
                  </h3>
                  <p className="text-accent text-xs font-display font-600 mt-0.5">
                    {member?.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {member?.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {member?.tags?.slice(0, 2)?.map((tag) => (
                  <span key={tag} className="bg-muted text-muted-foreground text-[10px] font-display font-600 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="border-t border-border pt-14">
          <div className="mb-8">
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Advisory Board
            </span>
            <h2 className="font-display font-700 text-3xl text-foreground">
              Advisors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {advisors?.map((advisor) => (
              <div
                key={advisor?.name}
                className="flex items-center gap-4 bg-muted rounded-2xl p-5 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-700 text-sm text-white">
                    {advisor?.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-700 text-base text-foreground">
                    {advisor?.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-0.5 font-sans">
                    {advisor?.domain}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}