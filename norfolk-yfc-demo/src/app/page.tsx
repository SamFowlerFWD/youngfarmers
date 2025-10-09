import { HeroSection } from "@/components/home/hero-section";
import { WelcomeSection } from "@/components/home/welcome-section";
import { StatsSection } from "@/components/home/stats-section";
import { QuickLinksSection } from "@/components/home/quick-links-section";
import { FeaturedEventsSection } from "@/components/home/featured-events-section";
import { NewsSection } from "@/components/home/news-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <StatsSection />
      <QuickLinksSection />
      <FeaturedEventsSection />
      <NewsSection />
      <NewsletterSection />
    </>
  );
}
