import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Request a Quote | HiveRift",
  description: "Get in touch with HiveRift for a free consultation. We offer results-driven digital solutions for web, mobile, and AI/ML projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}
