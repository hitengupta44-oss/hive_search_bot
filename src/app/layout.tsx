import type { Metadata } from "next";
import { WhatsAppButton } from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiveRift - Global Software Engineering Agency",
  description: "HiveRift - Global Software Engineering Agency. Delivering innovative digital solutions worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollToTop />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
