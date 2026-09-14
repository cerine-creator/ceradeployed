import { Instagram, Facebook } from 'lucide-react';
import { Logo } from './Logo';

const ALL_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#a-propos', label: 'À propos de nous' },
  { href: '#portfolio', label: 'Réalisations', flag: 'NEXT_PUBLIC_ENABLE_REALISATIONS' },
  { href: '#tarifs', label: 'Tarifs', flag: 'NEXT_PUBLIC_ENABLE_TARIFS' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const LINKS = ALL_LINKS.filter((link) => {
    if (!link.flag) return true;
    if (link.flag === 'NEXT_PUBLIC_ENABLE_REALISATIONS') {
      return process.env.NEXT_PUBLIC_ENABLE_REALISATIONS === 'true';
    }
    if (link.flag === 'NEXT_PUBLIC_ENABLE_TARIFS') {
      return process.env.NEXT_PUBLIC_ENABLE_TARIFS === 'true';
    }
    return true;
  });

  return (
    <footer className="bg-cera-ink pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-between gap-10 border-b border-white/10 pb-10">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Cera vous aide à prendre le virage digital avec des sites web pro
              qui reflètent votre image, à Alger et partout en Algérie.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#contact"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white hover:bg-white hover:text-cera-ink"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white hover:bg-white hover:text-cera-ink"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium uppercase tracking-wide text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="pt-6 text-center text-xs text-white/40">
          Copyright © {new Date().getFullYear()} Cera.
        </p>
      </div>
    </footer>
  );
}

