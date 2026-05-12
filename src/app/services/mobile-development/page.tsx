import { Metadata } from "next";
import MobileDevContent from "./MobileDevContent";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android | HiveRift",
  description: "Native and cross-platform mobile app development using React Native and Flutter. We build scalable, high-performance apps for global businesses.",
};

export default function MobileDevelopmentPage() {
  return <MobileDevContent />;
}