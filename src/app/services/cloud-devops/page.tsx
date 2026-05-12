import { Metadata } from "next";
import CloudContent from "./CloudContent";

export const metadata: Metadata = {
  title: "Cloud & DevOps Services | Scalable Infrastructure | HiveRift",
  description: "Modernize your infrastructure with our Cloud and DevOps services. We specialize in AWS, Azure, GCP, containerization, and CI/CD automation.",
};

export default function CloudDevOpsPage() {
  return <CloudContent />;
}