import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | HiveRift - Building Digital Excellence Since 2019",
  description: "HiveRift is a leading digital solutions company helping businesses leverage technology to achieve sustainable growth and competitive advantage.",
};

export default function AboutPage() {
  return <AboutContent />;
}