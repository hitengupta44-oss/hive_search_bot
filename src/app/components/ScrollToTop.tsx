"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration to ensure it doesn't fight with manual scrolling
    if (typeof window !== 'undefined' && window.history.scrollRestoration !== 'manual') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Force scroll to top on pathname change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant is better for navigation to prevent "flicker" of scrolling
    });
  }, [pathname]);

  return null;
}
