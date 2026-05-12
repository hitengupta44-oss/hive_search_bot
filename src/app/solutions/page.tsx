import { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Industry Solutions | Digital Transformation Expertise | HiveRift",
  description: "Explore our industry-specific digital solutions. We provide tailored technology strategies for finance, healthcare, retail, manufacturing, and more.",
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}