'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Leader {
  name: string;
  role: string;
  domain: string;
  description: string;
  tags: string[];
  initials: string;
  featured?: boolean;
  image?: string;
  imageClassName?: string;
}

const leaders: Leader[] = [
  {
    name: 'Samrat Kumar Pethe Patil',
    role: 'Founder',
    domain: 'Public Policy & Social Entrepreneurship',
    description:
      'A sustainability and inclusive development leader. He works at the intersection of social innovation, technology, and sustainable development, advancing impactful solutions for vulnerable communities. An Innovation Ambassador, Govt of India and Member of the Academic Innovation Council, he has contributed to flagship Government of India initiatives and represents at distinguished international and United Nations platforms.',
    tags: ['Innovation Ambassador', 'GoI', 'Public Policy'],
    initials: 'SP',
    featured: true,
    image: '/assets/images/Samrat Kumar Pethe Patil.jpeg',
  },
  {
    name: 'Arkraj Biswas',
    role: 'Environment, Sustainability & Research',
    domain: 'Environmental Sciences & Agriculture',
    description:
      'Leads environmental planning, research, and impact assessment with a focus on data-driven and systems-based approaches.',
    tags: ['Environmental Planning', 'Research', 'Impact Assessment'],
    initials: 'AB',
    image: '/assets/images/Arkraj Biswas.jpeg',
  },
  {
    name: 'Kumar Shivam',
    role: 'Technology for Good',
    domain: 'Blockchain & Digital Systems',
    description:
      'Leads technology innovation leveraging blockchain and digital systems to design scalable, high-impact solutions focused on transparency and systemic transformation.',
    tags: ['Blockchain', 'Digital Innovation', 'Transparency'],
    initials: 'KS',
    image: '/assets/images/Kumar Shivam.PNG',
  },
  {
    name: 'Adv. Roshan',
    role: 'Legal Affairs',
    domain: 'Justice & Human Rights',
    description:
      'Practices across the Supreme Court of India, various High Courts, and tribunals, providing legal advisory and compliance support.',
    tags: ['Supreme Court', 'Legal Advisory', 'Compliance'],
    initials: 'AR',
    image: '/assets/images/Roshan Kumar.jpeg',
  },
  {
    name: 'Gulam Gauhar Warsi',
    role: 'Finance & Compliance',
    domain: 'Chartered Accountant',
    description:
      'A Chartered Accountant with extensive experience in financial management and compliance for social enterprises and development organisations.',
    tags: ['Chartered Accountant', 'Finance', 'Compliance'],
    initials: 'GW',
    image: '/assets/images/Gulam Gauhar Warsi.jpeg',
  },
  {
    name: 'Tripti',
    role: 'Human Resources',
    domain: 'Organisational Development',
    description:
      'Holds a Master\'s degree in Psychology and leads human resource functions, focusing on organisational development and building a mission-driven workforce.',
    tags: ['Psychology', 'HR', 'Organisational Development'],
    initials: 'TR',
    image: '/assets/images/Tripti.jpeg',
    imageClassName: 'scale-[1.6] origin-[35%_70%]',
  },
  {
    name: 'Mogli',
    role: 'Chief Happiness Officer',
    domain: 'Happiness & Well-being',
    description:
      'She was rescued by our founder in the neighbourhood of our office. Now she shares space and snacks with us and keeps the entire team’s happiness index high.',
    tags: ['Happiness', 'Office Mascot', 'Well-being'],
    initials: 'MO',
    image: '/assets/images/cat.jpeg',
  },
];

const advisors = [
  { name: 'Prof. Hina Bijili', domain: 'Community Development', initials: 'HB', image: '/assets/images/Prof. Hina Bijli.png' },
  { name: 'Col. Nirbhay Kumar (retd.)', domain: 'Strategic Advisory', initials: 'NK', image: '/Col. Nirbhay Kumar (retd.) (1).jpg' },
  { name: 'Khushboo Singh', domain: 'CSR Design & Implementation', initials: 'KhS', image: '/assets/images/Khushboo Singh (1) (1).jpeg' },
  { name: 'Shashank Singh', domain: 'Policy & Governance', initials: 'ShS', image: '/assets/images/shahsank.jpeg' },
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
            <div className="lg:col-span-2 bg-primary relative overflow-hidden min-h-[300px] lg:min-h-auto">
              {leaders?.[0]?.image ? (
                <>
                  <img src={leaders[0].image} alt={leaders[0].name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent" />
                </>
              ) : (
                <>
                  {/* Geometric background */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="150" r="120" fill="none" stroke="#2E86C1" strokeWidth="1" />
                      <circle cx="100" cy="150" r="80" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                      <circle cx="100" cy="150" r="40" fill="none" stroke="#2E86C1" strokeWidth="0.5" />
                    </svg>
                  </div>
                </>
              )}

              <div className="relative z-10 p-8 flex flex-col justify-between h-full min-h-[300px] lg:min-h-[350px]">
                <div />
                <div className="mt-auto pt-8">
                  <div className="text-white/90 text-xs font-sans font-medium drop-shadow-sm">{leaders?.[0]?.domain}</div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-10 p-8 md:p-10 bg-card">
              <div className="text-accent text-xs font-display font-600 uppercase tracking-[0.15em] mb-2">
                {leaders?.[0]?.role}
              </div>
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
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {leaders?.slice(1)?.map((member, i) => (
            <div
              key={member?.name}
              className={`group border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card cursor-default flex flex-col sm:flex-row ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80 + 300}ms` }}
            >
              {member?.image ? (
                <div className="relative w-full sm:w-36 h-48 sm:h-auto flex-shrink-0 overflow-hidden min-h-[160px]">
                  <img src={member.image} alt={member.name} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${member.imageClassName ? member.imageClassName : 'group-hover:scale-105'}`} />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-neutral-950/20 to-transparent" />
                </div>
              ) : (
                <div className="w-full sm:w-36 h-48 sm:h-auto flex-shrink-0 bg-muted flex items-center justify-center min-h-[160px]">
                  <span className="font-display font-700 text-3xl text-primary">
                    {member?.initials}
                  </span>
                </div>
              )}

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-700 text-base text-foreground leading-tight">
                        {member?.name}
                      </h3>
                      <p className="text-accent text-xs font-display font-600 mt-1">{member?.role}</p>
                    </div>
                    {/* Hover arrow */}
                    <div className="w-7 h-7 rounded-full border border-border group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300 flex-shrink-0">
                      <svg className="w-3 h-3 text-muted-foreground group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-muted-foreground/60 text-xs font-sans mb-3">{member?.domain}</p>

                  <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-4">
                    {member?.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
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

          <div className="grid md:grid-cols-2 gap-6">
            {advisors?.map((advisor, i) => (
              <div
                key={advisor?.name}
                className={`flex items-center gap-4 border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-card ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80 + 600}ms` }}
              >
                {advisor?.image ? (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-700 text-xl text-white">{advisor?.initials}</span>
                  </div>
                )}
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