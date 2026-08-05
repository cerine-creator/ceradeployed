import { ContactForm } from './ContactForm';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="bg-cera-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cera-emerald-light">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Lancez votre projet
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Remplissez le formulaire ci-dessous et nous revenons vers vous rapidement.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
