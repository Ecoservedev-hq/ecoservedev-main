'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center gap-3 mt-8 pb-8 border-b border-border">
      <span className="text-xs font-display font-600 text-muted-foreground uppercase tracking-wider">
        Share this article:
      </span>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-display font-600 hover:border-primary/30 hover:text-primary transition-all"
        title="Copy article link"
      >
        <Icon name={copied ? 'CheckIcon' as any : 'LinkIcon' as any} size={14} variant="outline" />
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}
