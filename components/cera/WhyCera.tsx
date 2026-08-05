import { CheckCircle2, Wallet, MessageCircleHeart, Gift } from 'lucide-react';
import { Reveal } from './Reveal';
import { MouseGlowCard } from './MouseGlowCard';

const POINTS = [
  {
    icon: MessageCircleHeart,
    title: 'Accompagnement pas à pas',
    text: 'Disponible à chaque étape, du premier échange jusqu\u2019à la livraison.',
  },
  {
    icon: Wallet,
    title: 'Tarifs adaptés à votre budget',
    text: 'Une solution accessible sans compromis sur la qualité.',
  },
  {
    icon: CheckCircle2,
    title: 'Consultation gratuite',
    text: 'Premier échange offert pour comprendre votre besoin, sans engagement.',
  },
  {
    icon: Gift,
    title: 'Domaine & maintenance offerts',
    text: 'Un vrai accompagnement après la livraison.',
  },
];

export function WhyCera() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald">
              Pourquoi Cera
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cera-ink sm:text-4xl">
              Un partenaire, pas juste un prestataire
            </h2>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {POINTS.map((point) => (
              <MouseGlowCard
                key={point.title}
                className="group rounded-2xl border border-cera-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(10,10,11,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cera-surface transition-all duration-300 group-hover:scale-105 group-hover:bg-cera-emerald">
                  <point.icon
                    size={22}
                    className="text-cera-ink transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-cera-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cera-muted">{point.text}</p>
              </MouseGlowCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
