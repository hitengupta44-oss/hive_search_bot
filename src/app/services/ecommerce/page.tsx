import { Metadata } from "next";
import EcommerceContent from "./EcommerceContent";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Custom Online Stores | HiveRift",
  description: "Launch and scale your online store with our e-commerce solutions. We provide custom storefronts, secure checkout, and seamless API integrations.",
};

export default function EcommercePage() {
  return <EcommerceContent />;
}