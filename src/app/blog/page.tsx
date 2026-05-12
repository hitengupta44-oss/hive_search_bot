import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Insights, Ideas & Real Talk | HiveRift",
  description: "Practical advice and insights for businesses navigating websites, digital marketing, mobile apps, and technology, written by the HiveRift team.",
};

export default function BlogPage() {
  return <BlogContent />;
}
