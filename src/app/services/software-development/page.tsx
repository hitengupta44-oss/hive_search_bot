import { Metadata } from "next";
import SoftwareDevContent from "./SoftwareDevContent";

export const metadata: Metadata = {
  title: "Custom Software Development | Enterprise Solutions | HiveRift",
  description: "Bespoke software engineering for business transformation. We build custom ERPs, CRMs, and cloud-based applications tailored to your workflows.",
};

export default function SoftwareDevelopmentPage() {
  return <SoftwareDevContent />;
}