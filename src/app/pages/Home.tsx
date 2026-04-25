import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { StatsStrip } from "../components/StatsStrip";
import { Services } from "../components/Services";
import { Pillars } from "../components/Pillars";
import { Footer } from "../components/Footer";
import { CaseStudies } from "../components/CaseStudies";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { CTASection } from "../components/CTASection";
import { Pricing } from "../components/Pricing";
import { EnhancedPartners as Partners } from "../components/EnhancedPartners";
import { EnhancedIndustries as IndustriesSlider } from "../components/EnhancedIndustries";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>HiveRift - Digital Excellence | Web, Mobile, AI Solutions</title>
        <meta name="description" content="HiveRift is a leading digital solutions provider specializing in high-performance web development, mobile apps, AI/ML, and scalable enterprise software." />
        <meta name="keywords" content="HiveRift, digital solutions, web development company, mobile app development, artificial intelligence, software engineering" />
      </Helmet>
      <Header />
      <Hero />
      <StatsStrip />
      <Partners />
      <Services />
      <Pricing />
      <Pillars />
      <IndustriesSlider />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}