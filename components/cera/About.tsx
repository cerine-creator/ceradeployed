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
              Je ne vends pas des sites.{' '}
              <span className="text-cera-emerald-light">Je résous des problèmes.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl space-y-5 text-center text-[15px] leading-relaxed text-white/70">
            <p>
              Trop d&apos;entreprises algériennes perdent des clients simplement parce
              qu&apos;elles sont invisibles en ligne — ou pire, visibles mais avec un site
              lent, dépassé, qui donne une mauvaise image.
            </p>
            <p>
              Je conçois des sites qui font le travail : être trouvé, être crédible,
              convertir un visiteur en client. Pas un joli objet qu&apos;on montre une fois
              et qu&apos;on oublie.
            </p>
            <p>
              Chaque projet suit le même principe : je reste disponible du premier échange
              jusqu&apos;à la livraison — et après. Un ajustement à faire six mois plus
              tard ? Je réponds.
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
