import { Metadata } from "next";
import WebDevContent from "./WebDevContent";

export const metadata: Metadata = {
  title: "Professional Web Development Services | HiveRift",
  description: "Custom web development solutions using React, Next.js, and modern tech stacks. We build high-performance, SEO-optimized websites and web applications.",
};

export default function WebDevelopmentPage() {
  return <WebDevContent />;
}
