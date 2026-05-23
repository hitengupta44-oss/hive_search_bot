import { quickAnswers } from "@/app/data/quickAnswers";
import QuickAnswerContent from "./QuickAnswerContent";
import { Metadata } from "next";

export function generateStaticParams() {
  return quickAnswers.map((answer) => ({
    slug: answer.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const answer = quickAnswers.find((a) => a.slug === slug);
  
  if (!answer) {
    return {
      title: "Quick Answer Not Found | HiveRift",
    };
  }

  return {
    title: `${answer.question} | Quick Insights | HiveRift`,
    description: answer.shortAnswer,
  };
}

export default async function QuickAnswerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const answer = quickAnswers.find((a) => a.slug === slug);

  if (!answer) {
    return null;
  }

  return <QuickAnswerContent slug={slug} answer={answer} />;
}

