import { Reveal } from './Reveal';

const PROCESS = [
  'Contact et prise de besoin avec le client',
  'Analyse du besoin et proposition d\u2019inspirations',
  'Récupération des informations et contenus nécessaires',
  'Création du site',
  'Validation avec le client',
  'Ajustements jusqu\u2019à satisfaction complète — même après la livraison',
];

export function About() {
  return (
    <section id="a-propos" className="bg-cera-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald-light">
              À propos
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Une formation solide, une passion concrète
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl space-y-5 text-center text-[15px] leading-relaxed text-white/70">
            <p>
              Parcours issu d&apos;une formation universitaire complétée par un
              apprentissage autodidacte en développement web.
            </p>
            <p>
              Ce qui me passionne : coder et trouver des solutions concrètes aux
              problèmes réels de mes clients — pas juste livrer un site, mais un outil
              qui fait avancer leur activité.
            </p>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {PROCESS.map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/20 font-display text-sm font-bold text-cera-emerald-light">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-white/75">{step}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
