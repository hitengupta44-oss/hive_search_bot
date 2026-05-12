import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Web, Mobile, AI & Digital Solutions | HiveRift",
  description: "Comprehensive digital solutions including web development, mobile apps, AI/ML, digital marketing, and UI/UX design to empower your business.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
