'use client';

import React, { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-[64px] left-0 w-full h-[3px] bg-border z-40">
      <div 
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-75 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
