import { Metadata } from "next";
import DataContent from "./DataContent";

export const metadata: Metadata = {
  title: "Precision Data Annotation Services | HiveRift",
  description: "High-accuracy data labeling for AI and Machine Learning. We provide bounding boxes, semantic segmentation, text tagging, and audio transcription.",
};

export default function DataAnnotationPage() {
  return <DataContent />;
}