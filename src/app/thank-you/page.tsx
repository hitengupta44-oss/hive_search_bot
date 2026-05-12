import { Metadata } from "next";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Submission Received | HiveRift",
  description: "Thank you for reaching out to HiveRift. We have received your inquiry and our team will get back to you shortly.",
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
