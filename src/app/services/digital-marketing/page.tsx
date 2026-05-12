import { Metadata } from "next";
import MarketingContent from "./MarketingContent";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Strategic Growth | HiveRift",
  description: "Boost your brand visibility with our data-driven digital marketing services. We specialize in SEO, SMM, PPC, and content marketing to drive measurable ROI.",
};

export default function DigitalMarketingPage() {
  return <MarketingContent />;
}