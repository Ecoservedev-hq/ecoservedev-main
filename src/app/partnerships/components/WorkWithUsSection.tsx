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
                {
                  icon: 'HandshakeIcon',
                  title: 'CSR & Institutional Partnerships',
                  description:
                    'Design and implement high-impact programs aligned with your ESG goals, SDG targets, and national priorities.',
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

            {/* Contact info */}
            <div className="bg-muted rounded-2xl p-6 border border-border">
              <h3 className="font-display font-700 text-base text-foreground mb-4">
                Direct Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name="EnvelopeIcon" size={16} variant="outline" className="text-accent flex-shrink-0" />
                  <a href="mailto:ecoservedev@gmail.com" className="hover:text-primary transition-colors">
                    ecoservedev@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name="MapPinIcon" size={16} variant="outline" className="text-accent flex-shrink-0" />
                  HQ — Ranchi, Jharkhand, India
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name="GlobeAltIcon" size={16} variant="outline" className="text-accent flex-shrink-0" />
                  Pan India Operations
                </div>
              </div>
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

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name="CheckCircleIcon" size={32} variant="outline" className="text-accent" />
                  </div>
                  <h4 className="font-display font-700 text-xl text-foreground mb-2">
                    Message Received!
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Our team will reach out within 2-3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-display font-600 text-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Priya Sharma"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-display font-600 text-foreground mb-1.5">
                        Organisation *
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        required
                        placeholder="Company / Institution"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-600 text-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="priya@company.com"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display font-600 text-foreground mb-1.5">
                      Partnership Type *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    >
                      <option value="">Select type...</option>
                      <option value="csr">Corporate CSR Partnership</option>
                      <option value="government">Government Collaboration</option>
                      <option value="institution">Academic / Research Institution</option>
                      <option value="community">Community Organisation</option>
                      <option value="volunteer">Volunteering / Fellowship</option>
                      <option value="careers">Career Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-600 text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your goals and how you'd like to collaborate..."
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-center"
                  >
                    Send Message
                    <Icon name="ArrowUpRightIcon" size={16} variant="outline" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}