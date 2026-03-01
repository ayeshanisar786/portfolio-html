'use client';

import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Logofolio from '@/components/Logofolio';
import Branding from '@/components/Branding';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <SmoothScroll>
        <Navigation />
        <main className="relative">
          <Hero />
          <About />
          <Logofolio />
          <Branding />
          <Work />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
