'use client';

import React, { useEffect, useRef, useState } from 'react';

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
      'Leads environmental planning, research, and impact assessment with a focus on data-driven and systems-based approaches.',
    tags: ['Environmental Planning', 'Research', 'Impact Assessment'],
    initials: 'AB',
  },
  {
    name: 'Kumar Shivam',
    role: 'Technology for Good',
    domain: 'Blockchain & Digital Systems',
    description:
      'Leads technology innovation leveraging blockchain and digital systems to design scalable, high-impact solutions focused on transparency and systemic transformation.',
    tags: ['Blockchain', 'Digital Innovation', 'Transparency'],
    initials: 'KS',
  },
  {
    name: 'Chanchal Kumari',
    role: 'Technology for Good',
    domain: 'Digital Platforms & Dashboards',
    description:
      'Develops digital platforms, tools, and dashboards that improve transparency, traceability, and real-time impact tracking.',
    tags: ['Digital Platforms', 'Dashboards', 'Traceability'],
    initials: 'CK',
  },
  {
    name: 'Adv. Roshan',
    role: 'Legal Affairs',
    domain: 'Supreme Court & High Courts',
    description:
      'Practices across the Supreme Court of India, various High Courts, and tribunals, providing legal advisory and compliance support.',
    tags: ['Supreme Court', 'Legal Advisory', 'Compliance'],
    initials: 'AR',
  },
  {
    name: 'Gulam Gauhar Warsi',
    role: 'Finance & Compliance',
    domain: 'Chartered Accountant',
    description:
      'A Chartered Accountant with extensive experience in financial management and compliance for social enterprises and development organisations.',
    tags: ['Chartered Accountant', 'Finance', 'Compliance'],
    initials: 'GW',
  },
  {
    name: 'Tripti',
    role: 'Human Resources',
    domain: 'Organisational Development',
    description:
      'Holds a Master\'s degree in Psychology and leads human resource functions, focusing on organisational development and building a mission-driven workforce.',
    tags: ['Psychology', 'HR', 'Organisational Development'],
    initials: 'TR',
  },
];

const advisors = [
  { name: 'Khushboo Singh', domain: 'CSR Design & Implementation', initials: 'KhS' },
  { name: 'Prof. Hina Bijili', domain: 'Community Development', initials: 'HB' },
  { name: 'Shashank Singh', domain: 'Policy & Governance', initials: 'ShS' },
];

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="leadership" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 border-b border-border pb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs font-display font-600 uppercase tracking-[0.2em]">
                The Team
              </span>
            </div>
            <h2
              className={`font-display font-700 text-4xl md:text-5xl text-foreground leading-[1.1] transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Our Leadership
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed font-sans lg:pb-2">
            A multidisciplinary team with expertise spanning public policy, sustainability,
            technology, law, finance, and organisational development.
          </p>
        </div>

        {/* Featured founder — asymmetric layout */}
        <div
          className={`mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid lg:grid-cols-12 border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Left accent panel */}
            <div className="lg:col-span-3 bg-primary p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Geometric background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="150" r="120" fill="none" stroke="#2E86C1" strokeWidth="1" />
                  <circle cx="100" cy="150" r="80" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                  <circle cx="100" cy="150" r="40" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6">
                  <span className="font-display font-700 text-xl text-accent">
                    {leaders?.[0]?.initials}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-xs font-display font-600">
                  {leaders?.[0]?.role}
                </div>
              </div>
              <div className="relative z-10 mt-auto pt-8">
                <div className="text-white/30 text-xs font-sans">{leaders?.[0]?.domain}</div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-9 p-8 md:p-10 bg-card">
              <h3 className="font-display font-700 text-2xl md:text-3xl text-foreground mb-4">
                {leaders?.[0]?.name}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed font-sans mb-6">
                {leaders?.[0]?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {leaders?.[0]?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted border border-border text-foreground text-xs font-display font-600 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {leaders?.slice(1)?.map((member, i) => (
            <div
              key={member?.name}
              className={`group border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80 + 300}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-700 text-sm text-primary">
                      {member?.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-sm text-foreground leading-tight">
                      {member?.name}
                    </h3>
                    <p className="text-accent text-xs font-display font-600 mt-0.5">{member?.role}</p>
                  </div>
                </div>
                {/* Hover arrow */}
                <div className="w-7 h-7 rounded-full border border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <svg className="w-3 h-3 text-muted-foreground group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Domain */}
              <p className="text-muted-foreground/60 text-xs font-sans mb-3">{member?.domain}</p>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-4 line-clamp-3">
                {member?.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {member?.tags?.slice(0, 2)?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground text-[10px] font-display font-600 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="border-t border-border pt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-xs font-display font-600 uppercase tracking-[0.2em]">
              Advisory Board
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {advisors?.map((advisor, i) => (
              <div
                key={advisor?.name}
                className={`flex items-center gap-4 border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-card ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80 + 600}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-700 text-xs text-white">{advisor?.initials}</span>
                </div>
                <div>
                  <h3 className="font-display font-700 text-sm text-foreground">{advisor?.name}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 font-sans">{advisor?.domain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}