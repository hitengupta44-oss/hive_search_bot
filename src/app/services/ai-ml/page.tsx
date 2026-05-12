import { Metadata } from "next";
import AIMLContent from "./AIMLContent";

export const metadata: Metadata = {
  title: "AI & Machine Learning Solutions | Enterprise Intelligence | HiveRift",
  description: "Transform your business with our AI and Machine Learning services. We build predictive models, computer vision, and NLP solutions for real ROI.",
};

export default function AIMLPage() {
  return <AIMLContent />;
}