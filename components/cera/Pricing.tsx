import { Globe, Stethoscope, ShoppingBag, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';
import { MouseGlowCard } from './MouseGlowCard';
import { MagneticButton } from './MagneticButton';

const TIERS = [
  {
    icon: Globe,
    name: 'Site vitrine essentiel',
    price: '20 000 DA',
    target: 'Pour artisans, professions libérales, petites structures',
  },
  {
    icon: Stethoscope,
    name: 'Site vitrine pro',
    price: '29 000 DA',
    target: 'Pour cliniques, restaurants, commerces',
    highlight: true,
  },
  {
    icon: ShoppingBag,
    name: 'E-commerce',
    price: '40 000 DA',
    target: 'Catalogue, panier, paiement à la livraison',
  },
  {
    icon: Wrench,
    name: 'Maintenance / Audit',
    price: '5 000 DA',
    target: 'Selon le forfait choisi',
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="bg-cera-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald">
            Tarifs
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cera-ink sm:text-4xl">
            Des prix clairs, adaptés à votre projet
          </h2>
        </Reveal>

        <Reveal stagger>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <MouseGlowCard
                key={tier.name}
                className={`flex flex-col items-center gap-4 rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(10,10,11,0.35)] ${
                  tier.highlight
                    ? 'border-cera-emerald/40 bg-cera-ink text-white'
                    : 'border-cera-border bg-white'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 ${
                    tier.highlight ? 'bg-cera-emerald' : 'bg-cera-ink'
                  }`}
                >
                  <tier.icon
                    size={20}
                    className={tier.highlight ? 'text-white' : 'text-cera-emerald-light'}
                  />
                </div>
                <h3
                  className={`font-display text-base font-bold ${
                    tier.highlight ? 'text-white' : 'text-cera-ink'
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-cera-emerald">
                  <span className="text-sm font-normal opacity-70">À partir de </span>
                  {tier.price}
                </p>
                <p
                  className={`text-[13px] leading-relaxed ${
                    tier.highlight ? 'text-white/70' : 'text-cera-muted'
                  }`}
                >
                  {tier.target}
                </p>
              </MouseGlowCard>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-8 max-w-xl text-[13px] leading-relaxed text-cera-muted">
            Ces montants donnent une idée de départ. Le prix final dépend toujours du travail
            demandé — on en discute ensemble lors d&apos;un échange gratuit.
          </p>
        </Reveal>

        <Reveal>
          <MagneticButton
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cera-emerald px-7 py-3.5 text-sm font-semibold text-white hover:bg-cera-emerald-dark hover:shadow-[0_16px_32px_-10px_rgba(16,163,122,0.55)]"
          >
            Demander mon devis gratuit
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
