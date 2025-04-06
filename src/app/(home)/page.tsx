import { Benefits, Contact, FeaturedNews, HeroSection, NanoBanner, NewsLetterBanner, Protocols, Studies } from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Benefits />
      <NanoBanner />
      <Protocols />
      <Studies />
      <NewsLetterBanner />
      <FeaturedNews />
      <Contact />
    </main>
  );
}
