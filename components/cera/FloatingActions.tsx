'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { cn } from '@/utils/cn';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="#contact"
        aria-label="Contacter sur WhatsApp"
        className="cera-pulse fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_26px_-8px_rgba(37,211,102,0.6)]"
      >
        <MessageCircle size={26} className="relative z-10" />
      </a>

      <button
        type="button"
        aria-label="Retour en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          'fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-cera-ink text-white shadow-md transition-all duration-300',
          showTop ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        )}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
