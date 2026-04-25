'use client';

import React from 'react';


export default function TransparencySection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-4 block">
              Accountability
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-white tracking-tight mb-6 leading-tight">
              Ensuring Transparency,<br />Traceability & Accountability
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Accountability is central to how EcoServeDev operates. We integrate advanced
              technologies — including blockchain-based systems, digital ledgers, and GIS-enabled
              traceability tools — to monitor activities, track outcomes, and maintain secure,
              auditable records across all programs.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              This enables stakeholders to access clear, real-time insights into resource
              utilisation, progress, and impact outcomes — strengthening trust and institutional
              credibility.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Blockchain Ledgers', 'GIS Traceability', 'Real-time Dashboards', 'Auditable Records']?.map((tech) => (
                <span key={tech} className="bg-white/10 border border-white/20 text-white text-xs font-display font-600 px-4 py-2 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            {/* SVG Traceability diagram */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />

                {/* Central hub */}
                <circle cx="200" cy="150" r="35" fill="var(--accent)" opacity="0.9" />
                <text x="200" y="146" textAnchor="middle" fontSize="9" fill="white" fontFamily="var(--font-display)" fontWeight="700">IMPACT</text>
                <text x="200" y="158" textAnchor="middle" fontSize="9" fill="white" fontFamily="var(--font-display)" fontWeight="700">LEDGER</text>

                {/* Orbit rings */}
                <circle cx="200" cy="150" r="70" fill="none" stroke="rgba(46,134,193,0.3)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="150" r="110" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 6" />

                {/* Nodes */}
                {[
                  { cx: 130, cy: 80, label: 'Blockchain', sub: 'Ledger' },
                  { cx: 270, cy: 80, label: 'GIS', sub: 'Mapping' },
                  { cx: 310, cy: 180, label: 'Real-time', sub: 'Dashboard' },
                  { cx: 90, cy: 180, label: 'Field', sub: 'Validation' },
                  { cx: 200, cy: 260, label: 'Stakeholder', sub: 'Reports' },
                ]?.map((node, i) => (
                  <g key={i}>
                    <line x1="200" y1="150" x2={node?.cx} y2={node?.cy} stroke="rgba(46,134,193,0.4)" strokeWidth="1" />
                    <circle cx={node?.cx} cy={node?.cy} r="22" fill="rgba(10,36,99,0.8)" stroke="rgba(46,134,193,0.5)" strokeWidth="1.5" />
                    <text x={node?.cx} y={node?.cy - 3} textAnchor="middle" fontSize="7" fill="white" fontFamily="var(--font-display)" fontWeight="600">{node?.label}</text>
                    <text x={node?.cx} y={node?.cy + 8} textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.6)" fontFamily="var(--font-display)">{node?.sub}</text>
                  </g>
                ))}

                {/* Animated pulse dots on lines */}
                <circle cx="165" cy="115" r="3" fill="var(--accent)" opacity="0.8" />
                <circle cx="235" cy="115" r="3" fill="var(--accent)" opacity="0.8" />
                <circle cx="255" cy="165" r="3" fill="var(--accent)" opacity="0.8" />
              </svg>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Data Points', value: '10K+' },
                  { label: 'Verified Records', value: '500+' },
                  { label: 'Uptime', value: '99.9%' },
                ]?.map((stat) => (
                  <div key={stat?.label} className="text-center">
                    <div className="font-display font-700 text-xl text-white">{stat?.value}</div>
                    <div className="text-white/40 text-[10px] font-sans uppercase tracking-wider">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative orb */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
