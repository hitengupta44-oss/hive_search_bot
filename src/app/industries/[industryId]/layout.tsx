import { industriesData } from "@/app/data/industries";

export async function generateMetadata({ params }: { params: { industryId: string } }) {
  const { industryId } = params;
  const industry = (industriesData as any)[industryId];
  
  return {
    title: `${industry?.title || "Industry"} Solutions | HiveRift`,
    description: industry?.description || "High-performance digital solutions tailored for your industry.",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
