'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function WorkWithUsSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    type: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/email service
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="partner-form" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <span className="text-xs font-display font-600 text-accent uppercase tracking-widest mb-3 block">
              Engage With Us
            </span>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-foreground tracking-tight mb-6">
              Partner, Collaborate, or Work With Us
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              EcoServeDev offers multiple engagement opportunities in sustainable development, CSR
              implementation, and social impact initiatives.
            </p>

            {/* Engagement options */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: 'BuildingOfficeIcon',
                  title: 'Corporate Social Responsibility',
                  description:
                    'Design and implement high-impact programs aligned with your ESG goals, SDG targets, and national priorities.',
                },
                {
                  icon: 'BanknotesIcon',
                  title: 'Program Funding',
                  description:
                    'Support our initiatives to drive scalable impact across ecosystem restoration and digital inclusion.',
                },
                {
                  icon: 'BriefcaseIcon',
                  title: 'Careers',
                  description:
                    'Join our team to work on high-impact projects in sustainability, technology for development, and ecosystem restoration.',
                },
                {
                  icon: 'HandRaisedIcon',
                  title: 'Volunteering Opportunities',
                  description:
                    'Engage through volunteering, fellowships, and field-based initiatives to contribute directly to grassroots impact.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as never} size={18} variant="outline" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-base text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="font-display font-700 text-2xl text-foreground mb-2">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-sm mb-7">
                Tell us about your organisation and how you&apos;d like to collaborate.
              </p>

              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="EnvelopeIcon" size={32} variant="outline" className="text-accent" />
                </div>
                <h4 className="font-display font-700 text-xl text-foreground mb-3">
                  Reach Out Directly
                </h4>
                <p className="text-muted-foreground text-sm mb-8 max-w-xs mx-auto">
                  We'd love to hear from you. Click below to send us an email directly.
                </p>
                <a
                  href="mailto:ecoservedev@gmail.com"
                  className="btn-primary w-full justify-center text-center max-w-xs"
                >
                  Get in Touch
                  <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}