'use client';

import { useEffect, useRef, useState } from 'react';

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to lazy-load the video only when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked; silently ignore
      });
    }
  }, [shouldLoad]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Instant gradient fallback while video loads */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0a0a0b 0%, #0c2e22 40%, #0a0a0b 100%)',
        }}
      />
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-40"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        {shouldLoad && <source src="/video/hero-bg.mp4" type="video/mp4" />}
      </video>
      <div className="absolute inset-0 bg-cera-ink/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(16,163,122,0.28), transparent 65%)',
        }}
      />
    </div>
  );
}

