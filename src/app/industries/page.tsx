import { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
  title: "Industries We Serve | Sector-Specific Digital Expertise | HiveRift",
  description: "HiveRift provides tailored digital solutions for diverse industries including finance, healthcare, retail, education, manufacturing, and more.",
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}