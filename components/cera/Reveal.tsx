'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: 'div' | 'section';
}

export function Reveal({ children, className, stagger = false, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={cn(stagger ? 'reveal-stagger' : 'reveal', inView && 'in-view', className)}
    >
      {children}
    </Tag>
  );
}
