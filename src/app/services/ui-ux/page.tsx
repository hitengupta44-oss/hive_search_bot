import { Metadata } from "next";
import UIUXContent from "./UIUXContent";

export const metadata: Metadata = {
  title: "UI/UX Design Services | User-Centric Experiences | HiveRift",
  description: "We craft pixel-perfect user interfaces and intuitive user experiences. Our design services include wireframing, prototyping, and building comprehensive design systems.",
};

export default function UIUXPage() {
  return <UIUXContent />;
}