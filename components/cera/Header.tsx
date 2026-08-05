'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#portfolio', label: 'Réalisations' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-cera-ink text-white transition-[padding,box-shadow] duration-300',
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]' : ''
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <a href="#top" className="text-white">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cera-emerald-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-cera-emerald px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cera-emerald-dark hover:shadow-[0_10px_24px_-8px_rgba(16,163,122,0.55)] md:inline-flex"
        >
          Consultation gratuite
        </a>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="p-1.5 text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden bg-cera-ink transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-t border-white/10 py-3.5 text-sm text-white/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="my-4 rounded-full bg-cera-emerald px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Consultation gratuite
          </a>
        </nav>
      </div>
    </header>
  );
}
