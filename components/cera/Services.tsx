import { Store, ShoppingCart, QrCode, RefreshCw, Wrench, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { MouseGlowCard } from './MouseGlowCard';

const SERVICES = [
  {
    icon: Store,
    title: 'Sites vitrines',
    hook: 'Vos clients vous cherchent sur Google avant de vous appeler — s\u2019ils ne vous trouvent pas, ils appellent votre concurrent.',
    text: 'Un site vitrine professionnel qui vous rend visible, crédible et facile à contacter. Conçu pour cliniques, restaurants, artisans et professions libérales.',

    details: [
      'Design sur mesure',
      'Pages essentielles : accueil, services, contact',
      'Formulaire de contact',
      'Site responsive (mobile / tablette)',
      'QR code personnalisé sur demande',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Boutiques e-commerce',
    hook: 'Combien de ventes perdez-vous parce que votre catalogue n\u2019existe que sur Instagram ?',
    text: 'Une vraie boutique en ligne où vos clients commandent en quelques clics, paiement à la livraison inclus — sans dépendre des algorithmes des réseaux sociaux.',

    details: [
      'Catalogue produits avec photos et prix',
      'Panier et système de commande',
      'Paiement à la livraison',
      'Formulaire de contact + site responsive',
      'Sur devis : paiement en ligne CIB/Edahabia, notifications, dashboard admin, avis clients, filtres avancés',
    ],
  },
  {
    icon: QrCode,
    title: 'QR codes',
    hook: 'Un menu qui traîne, une carte qui se perd — vos clients veulent l\u2019info tout de suite, sur leur téléphone.',
    text: 'Des QR codes personnalisés pour votre menu, votre carte de visite ou votre site, accessibles en un scan.',
    details: [
      'Menus de restaurants',
      'Cartes de visite digitales',
      'Accès rapide vers votre site ou réseaux',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Renouvellement de sites',
    hook: 'Un site lent ou dépassé fait plus de mal qu\u2019un site absent — il donne une mauvaise première impression.',
    text: 'On modernise votre site existant : design actuel, chargement rapide, contenu à jour.',
    details: [
      'Nouveau design moderne',
      'Meilleure vitesse de chargement',
      'Version mobile optimisée',
      'Mise à jour du contenu',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & audit',
    hook: 'Un site qu\u2019on abandonne après la livraison finit par tomber en panne, se faire pirater, ou juste devenir invisible sur Google.',
    text: 'Un suivi régulier pour garder votre site rapide, sécurisé et à jour — plusieurs formules selon vos besoins.',

    details: [
      'Mises à jour de sécurité',
      'Surveillance des performances',
      'Sauvegarde régulière',
      'Support technique réactif',
    ],
  },
  {
    icon: Wrench,
    title: 'Solutions sur mesure',
    hook: 'Trop de temps perdu au téléphone pour gérer les rendez-vous ou les commandes ?',
    text: 'Des outils sur mesure — gestion de commandes, prise de rendez-vous en ligne — pensés pour votre activité, pas un logiciel générique.',
    details: [
      'Système de gestion pour restaurant (commandes + suivi de stock)',
      'Plateforme de prise de rendez-vous (clinique, salon)',
      'Process : rendez-vous → proposition adaptée → développement sur mesure',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cera-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald">
              Nos services
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cera-ink sm:text-4xl">
              Ce que je peux créer pour vous
            </h2>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <MouseGlowCard
                key={service.title}
                className="flex flex-col rounded-2xl border border-cera-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-25px_rgba(10,10,11,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cera-ink transition-transform duration-300 hover:scale-105">
                  <service.icon size={22} className="text-cera-emerald-light" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-cera-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] font-medium italic leading-relaxed text-cera-ink/60">
                  {service.hook}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cera-muted">{service.text}</p>
                {service.price && (
                  <p className="mt-3 text-sm font-bold text-cera-emerald">{service.price}</p>
                )}
                <ul className="mt-5 flex flex-col gap-2 border-t border-cera-border pt-5">
                  {service.details.map((d) => (
                    <li key={d} className="flex gap-2 text-[13px] leading-relaxed text-cera-ink/80">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cera-emerald" />
                      {d}
                    </li>
                  ))}
                </ul>
              </MouseGlowCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
