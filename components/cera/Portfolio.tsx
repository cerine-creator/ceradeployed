import { Clock } from 'lucide-react';
import { Reveal } from './Reveal';

const PLACEHOLDERS = [1, 2, 3];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald">
              Réalisations
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cera-ink sm:text-4xl">
              Nos projets
            </h2>
            <p className="mt-4 text-sm text-cera-muted">
              Portfolio en cours de mise à jour — les projets réels seront ajoutés très
              prochainement.
            </p>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDERS.map((n) => (
              <div
                key={n}
                className="group relative flex aspect-[4/3.1] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-cera-border bg-cera-surface text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-cera-emerald/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-cera-border transition-transform duration-300 group-hover:scale-105">
                  <Clock size={22} className="text-cera-muted" />
                </div>
                <p className="mt-4 font-display text-sm font-bold text-cera-ink">
                  Projet à venir
                </p>
                <p className="mt-1 text-xs text-cera-muted">Emplacement {n}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
