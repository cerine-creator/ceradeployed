'use client';

import { useEffect, useRef, useState } from 'react';

export function ScrollParallax({
  children,
  strength = 0.15,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let raf = 0;
    function onScroll() {
      const el = ref.current;
      if (!el) return;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        setOffset(rect.top * strength);
      });
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  );
}
