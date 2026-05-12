import { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing | Transparent Packages for Digital Solutions | HiveRift",
  description: "Explore our honest and transparent pricing packages for website development, digital marketing, and custom software solutions. No hidden costs.",
};

export default function PricingPage() {
  return <PricingContent />;
}
