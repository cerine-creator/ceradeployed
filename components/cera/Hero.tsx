import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { HeroTiltWrap } from './HeroTiltWrap';
import { MagneticButton } from './MagneticButton';
import { FloatingParticles } from './FloatingParticles';
import { ScrollParallax } from './ScrollParallax';
import { HeroVideoBackground } from './HeroVideoBackground';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cera-ink pt-16 pb-20 text-white sm:pt-24 sm:pb-28">
      <HeroVideoBackground />
      <ScrollParallax strength={0.12} className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 50% 0%, rgba(16,163,122,0.22), transparent 65%), radial-gradient(45% 40% at 85% 80%, rgba(16,163,122,0.10), transparent 60%)',
          }}
        />
      </ScrollParallax>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <FloatingParticles />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70">
            Alger, Algérie — services partout en Algérie
          </span>
        </Reveal>

        <HeroTiltWrap>
          <Reveal>
            <h1 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
              Votre idée, mon code,{' '}
              <span className="text-cera-emerald-light">votre succès</span> en ligne.
            </h1>
          </Reveal>
        </HeroTiltWrap>

        <Reveal>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Sites vitrines, boutiques en ligne et solutions numériques sur mesure,
            conçus pas à pas avec vous, à Alger et partout en Algérie.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cera-emerald px-7 py-3.5 text-sm font-semibold text-white hover:bg-cera-emerald-dark hover:shadow-[0_16px_32px_-10px_rgba(16,163,122,0.55)]"
            >
              Réservez votre consultation gratuite
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/5"
            >
              Voir nos réalisations
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
