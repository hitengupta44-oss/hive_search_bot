import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | Legal Guidelines | HiveRift",
  description: "Read the terms and conditions for using HiveRift's services. Understand our payment terms, refund policy, and intellectual property guidelines.",
};

export default function TermsPage() {
  return <TermsContent />;
}
