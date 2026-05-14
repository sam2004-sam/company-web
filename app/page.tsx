import { Navbar } from '@/components/navbar';
import { BackToTop } from '@/components/back-to-top';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ValuesSection } from '@/components/sections/values';
import { IndustriesSection } from '@/components/sections/industries';
import { WhyUsSection } from '@/components/sections/why-us';
import { ResearchSection } from '@/components/sections/research';
import { FounderSection } from '@/components/sections/founder';
import { ComingSoonSection } from '@/components/sections/coming-soon';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <IndustriesSection />
      <WhyUsSection />
      <ResearchSection />
      <FounderSection />
      <ComingSoonSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
