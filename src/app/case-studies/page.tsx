import { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Case Studies | Proven Digital Impact | HiveRift",
  description: "Explore our success stories and see how we've helped businesses achieve measurable growth through custom software, e-commerce, and strategic marketing.",
};

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CaseStudiesContent />
    </Suspense>
  );
}
