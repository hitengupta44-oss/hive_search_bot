import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { Pillars } from "@/app/components/Pillars";
import { Footer } from "@/app/components/Footer";
import { CaseStudies } from "@/app/components/CaseStudies";
import { Testimonials } from "@/app/components/Testimonials";
import { FAQ } from "@/app/components/FAQ";
import { CTASection } from "@/app/components/CTASection";
import { Pricing } from "@/app/components/Pricing";
import { EnhancedPartners as Partners } from "@/app/components/EnhancedPartners";
import { EnhancedIndustries as IndustriesSlider } from "@/app/components/EnhancedIndustries";
import { MarketingServices } from "@/app/components/MarketingServices";
import { MarketingStats } from "@/app/components/MarketingStats";
import { WorkProcess } from "@/app/components/WorkProcess";

export const metadata = {
  title: "HiveRift - Digital Excellence | Web, Mobile, AI Solutions",
  description: "HiveRift is a leading digital solutions provider specializing in high-performance web development, mobile apps, AI/ML, and scalable enterprise software.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      {/* <MarketingServices /> */}
      <MarketingStats />
      <WorkProcess />

      <Pricing />
      <Pillars />
      <IndustriesSlider />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Partners />
      <CTASection />
      <Footer />
    </div>
  );
}