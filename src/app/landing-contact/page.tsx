import { Metadata } from "next";
import LandingContactContent from "./LandingContactContent";

export const metadata: Metadata = {
  title: "Get a Quote | HiveRift",
  description: "Request a custom quote for your project. Our experts in web, mobile, and AI solutions are ready to help your business grow.",
};

export default function LandingContactPage() {
  return <LandingContactContent />;
}
