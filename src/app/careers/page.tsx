import { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers | Join the Team at HiveRift",
  description: "Explore career opportunities at HiveRift. We are looking for passionate developers, designers, and marketers to build the future of technology.",
};

export default function CareersPage() {
  return <CareersContent />;
}
