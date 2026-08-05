'use client';

export function HeroVideoBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        className="h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
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
