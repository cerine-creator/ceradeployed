import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Reveal } from './Reveal';

const FAQS = [
  {
    q: 'Combien de temps pour livrer un site ?',
    a: 'Un site vitrine simple prend en général 1 à 2 semaines, un site e-commerce 3 à 4 semaines. Un délai précis est donné après le premier échange.',
  },
  {
    q: 'Est-ce que je peux modifier mon site après livraison ?',
    a: 'Oui, une maintenance gratuite est incluse, et Cera reste disponible pour tout ajustement.',
  },
  {
    q: "Proposez-vous le nom de domaine et l'hébergement ?",
    a: "Le nom de domaine est offert. L'hébergement est discuté selon le besoin du client.",
  },
  {
    q: 'Comment se passe la collaboration ?',
    a: 'Échange sur le besoin → propositions d\u2019inspirations → création du site → validation → ajustements jusqu\u2019à satisfaction complète.',
  },
  {
    q: 'Est-ce que la première consultation est payante ?',
    a: 'Non, le premier échange est offert, sans engagement.',
  },
  {
    q: 'Que se passe-t-il si je ne suis pas satisfait du résultat ?',
    a: 'Le site est retravaillé jusqu\u2019à correspondre exactement à l\u2019attente du client.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cera-ink sm:text-4xl">
              Questions fréquentes
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="mt-12">
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-cera-border">
                <AccordionTrigger className="font-display text-[15px] font-semibold text-cera-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-cera-muted">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
