import { Header } from '@/components/cera/Header';
import { Hero } from '@/components/cera/Hero';
import { IntroOverlay } from '@/components/cera/IntroOverlay';
import { Marquee } from '@/components/cera/Marquee';
import { Stats } from '@/components/cera/Stats';
import { WhyCera } from '@/components/cera/WhyCera';
import { Services } from '@/components/cera/Services';
import { Portfolio } from '@/components/cera/Portfolio';
import { About } from '@/components/cera/About';
import { Pricing } from '@/components/cera/Pricing';
import { Faq } from '@/components/cera/Faq';
import { Contact } from '@/components/cera/Contact';
import { Footer } from '@/components/cera/Footer';
import { FloatingActions } from '@/components/cera/FloatingActions';

export default function Home() {
  const showPortfolio = process.env.NEXT_PUBLIC_ENABLE_REALISATIONS === 'true';
  const showPricing = process.env.NEXT_PUBLIC_ENABLE_TARIFS === 'true';

  return (
    <>
      <IntroOverlay />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <WhyCera />
        <Services />
        {showPortfolio && <Portfolio />}
        <About />
        {showPricing && <Pricing />}
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}


