import { CountUp } from './CountUp';
import { Reveal } from './Reveal';

const STATS = [
  { to: 100, suffix: '%', label: 'Sites responsives mobile' },
  { to: 48, suffix: 'h', label: 'Délai de première réponse' },
  { to: 6, suffix: '', label: 'Étapes de collaboration suivies' },
  { to: 0, suffix: ' DZD', label: 'Nom de domaine, offert' },
];

export function Stats() {
  return (
    <section className="bg-white py-14">
      <Reveal stagger>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-cera-ink sm:text-4xl">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-xs leading-snug text-cera-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
