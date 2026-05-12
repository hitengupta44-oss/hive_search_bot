import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection | HiveRift",
  description: "Learn how HiveRift collects, uses, and protects your personal data. We are committed to transparency and compliance with data protection laws.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
