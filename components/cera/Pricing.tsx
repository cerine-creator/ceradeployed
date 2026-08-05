import { Globe, LifeBuoy, MessageCircleQuestion } from 'lucide-react';
import { Reveal } from './Reveal';
import { MouseGlowCard } from './MouseGlowCard';
import { MagneticButton } from './MagneticButton';

const INCLUDED = [
  { icon: Globe, text: 'Nom de domaine offert' },
  { icon: LifeBuoy, text: 'Maintenance gratuite' },
  { icon: MessageCircleQuestion, text: 'Premier échange sans engagement' },
];

export function Pricing() {
  return (
    <section id="tarifs" className="bg-cera-surface py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald">
            Tarifs
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cera-ink sm:text-4xl">
            Sur devis, consultation gratuite
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cera-muted">
            Chaque projet est différent : le tarif est établi après notre premier
            échange, gratuit et sans engagement, pour vous proposer un prix juste et
            adapté à votre budget.
          </p>
        </Reveal>

        <Reveal stagger>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {INCLUDED.map((item) => (
              <MouseGlowCard
                key={item.text}
                className="flex flex-col items-center gap-3 rounded-2xl border border-cera-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(10,10,11,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cera-ink transition-transform duration-300 hover:scale-105">
                  <item.icon size={20} className="text-cera-emerald-light" />
                </div>
                <p className="text-sm font-semibold text-cera-ink">{item.text}</p>
              </MouseGlowCard>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <MagneticButton
            href="#contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-cera-emerald px-7 py-3.5 text-sm font-semibold text-white hover:bg-cera-emerald-dark hover:shadow-[0_16px_32px_-10px_rgba(16,163,122,0.55)]"
          >
            Demander mon devis gratuit
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
