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
        <Portfolio />
        <About />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
