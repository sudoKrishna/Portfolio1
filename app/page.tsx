import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WorkGrid from '@/components/WorkGrid';
import BentoGrid from '@/components/BentoGrid';
import Footer from '@/components/Footer';
import Decoration from '@/components/Decoration';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero imageSrc="/assets/hero.png" />

      <div className="relative">
        <Decoration />
        <WorkGrid />
        <BentoGrid />
      </div>

      <Footer />
    </main>
  );
}

