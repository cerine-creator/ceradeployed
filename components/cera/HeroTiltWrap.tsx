'use client';

import { useRef } from 'react';

export function HeroTiltWrap({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * 4;
    const rotateY = (x - 0.5) * 4;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    glow.style.background = `radial-gradient(38% 50% at ${x * 100}% ${y * 100}%, rgba(16,163,122,0.28), transparent 65%)`;
  }

  function handleLeave() {
    const el = ref.current;
    const glow = glowRef.current;
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    if (glow) glow.style.background = '';
  }

  return (
    <div onMouseMove={handleMove} onMouseLeave={handleLeave} className="relative">
      <div
        ref={glowRef}
        className="pointer-events-none absolute -inset-x-10 -inset-y-16 -z-10 transition-[background] duration-200"
      />
      <div ref={ref} className="transition-transform duration-300 ease-out will-change-transform">
        {children}
      </div>
    </div>
  );
}
