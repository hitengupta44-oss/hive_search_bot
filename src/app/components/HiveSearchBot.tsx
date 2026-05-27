"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, Loader2, Bot, ChevronRight, Sparkles, ExternalLink } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// Each section: keywords to detect, the homepage anchor ID, and a direct page URL
const SECTION_MAP: {
  keywords: string[];
  sectionId: string;
  label: string;
  pageUrl?: string; // if section has its own page, link there too
}[] = [
  {
    keywords: ["service", "web development", "mobile app", "software", "ai", "machine learning", "cloud", "devops", "ecommerce", "data annotation", "digital marketing", "ui", "ux"],
    sectionId: "services",
    label: "Services",
    pageUrl: "/services",
  },
  {
    keywords: ["price", "pricing", "cost", "plan", "package", "affordable", "rate", "charge", "fee", "₹", "rupee", "budget"],
    sectionId: "pricing",
    label: "Pricing",
    pageUrl: "/pricing",
  },
  {
    keywords: ["case stud", "project", "portfolio", "client work", "success story", "edtech", "telemedicine", "retail platform", "analytics dashboard"],
    sectionId: "case-studies",
    label: "Case Studies",
    pageUrl: "/case-studies",
  },
  {
    keywords: ["testimonial", "review", "feedback", "what client", "what people say", "customer say", "trust"],
    sectionId: "testimonials",
    label: "Testimonials",
  },
  {
    keywords: ["faq", "frequently asked", "common question", "how long does", "do you work with small"],
    sectionId: "faq",
    label: "FAQ",
  },
  {
    keywords: ["partner", "technology partner", "google cloud", "aws", "microsoft", "meta", "zoho", "digitalocean", "hostinger"],
    sectionId: "partners",
    label: "Partners",
  },
  {
    keywords: ["industr", "sector", "healthcare", "finance", "banking", "retail", "education", "manufacturing", "energy", "real estate"],
    sectionId: "industries",
    label: "Industries",
    pageUrl: "/industries",
  },
  {
    keywords: ["contact", "reach out", "call us", "email us", "talk to", "consult", "get in touch", "hire", "whatsapp", "phone"],
    sectionId: "cta",
    label: "Contact Us",
    pageUrl: "/contact",
  },
  {
    keywords: ["work process", "how we work", "our process", "methodology", "research", "strategy", "execution", "monitoring", "scale"],
    sectionId: "work-process",
    label: "How We Work",
  },
  {
    keywords: ["stat", "number", "250 project", "150 client", "4.9", "5 year", "achievement", "delivered", "completed", "global client"],
    sectionId: "stats",
    label: "Our Stats",
  },
  {
    keywords: ["about", "who are", "hiverift team", "company", "founded", "khatushyam", "new delhi"],
    sectionId: "about",
    label: "About Us",
    pageUrl: "/about",
  },
  {
    keywords: ["blog", "article", "insight", "read more", "latest post"],
    sectionId: "blog",
    label: "Blog",
    pageUrl: "/blog",
  },
  {
    keywords: ["career", "job", "hiring", "vacancy", "join our team", "open position"],
    sectionId: "careers",
    label: "Careers",
    pageUrl: "/careers",
  },
  {
    keywords: ["solution", "enterprise", "startup", "smb", "scale", "growth"],
    sectionId: "solutions",
    label: "Solutions",
    pageUrl: "/solutions",
  },
];

function detectSection(answer: string): typeof SECTION_MAP[0] | null {
  const lower = answer.toLowerCase();
  for (const mapping of SECTION_MAP) {
    if (mapping.keywords.some((kw) => lower.includes(kw))) {
      return mapping;
    }
  }
  return null;
}

const SUGGESTED_QUESTIONS = [
  "What services does HiveRift offer?",
  "How much does a website cost?",
  "How long does SEO take?",
  "Can you build mobile apps?",
];

export function HiveSearchBot() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [detectedSection, setDetectedSection] = useState<typeof SECTION_MAP[0] | null>(null);
  const [scrolling, setScrolling] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#hive-search") {
      setTimeout(() => {
        document.getElementById("hive-search")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  // After navigation to "/", wait for DOM then scroll to section
  useEffect(() => {
    if (scrolling && pathname === "/") {
      const pendingSection = sessionStorage.getItem("pendingScrollSection");
      if (pendingSection) {
        setTimeout(() => {
          const el = document.getElementById(pendingSection);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            el.style.transition = "box-shadow 0.4s ease";
            el.style.boxShadow = "0 0 0 4px rgba(16, 185, 129, 0.5)";
            setTimeout(() => { el.style.boxShadow = "none"; }, 2500);
          }
          sessionStorage.removeItem("pendingScrollSection");
          setScrolling(false);
        }, 600); // wait for page to render
      }
    }
  }, [pathname, scrolling]);

  const handleNavigateToSection = (section: typeof SECTION_MAP[0]) => {
    const sectionId = section.sectionId;

    // If already on homepage, just scroll directly
    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.style.transition = "box-shadow 0.4s ease";
        el.style.boxShadow = "0 0 0 4px rgba(16, 185, 129, 0.5)";
        setTimeout(() => { el.style.boxShadow = "none"; }, 2500);
        return;
      }
    }

    // If section has its own dedicated page, go there
    if (section.pageUrl) {
      router.push(section.pageUrl);
      return;
    }

    // Otherwise navigate to homepage with hash, then scroll after render
    sessionStorage.setItem("pendingScrollSection", sectionId);
    setScrolling(true);
    router.push("/");
  };

  const handleSearch = async (q?: string) => {
    const searchQuery = q || query;
    if (!searchQuery.trim()) return;
    setQuery(searchQuery);
    setLoading(true);
    setAnswer("");
    setError("");
    setDetectedSection(null);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery, session_id: sessionId }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setAnswer(data.answer);
        if (data.session_id) setSessionId(data.session_id);
        setDetectedSection(detectSection(data.answer));
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hive-search" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Sparkles size={14} />
            AI-Powered Search
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Ask HiveRift AI
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">
            Get instant answers about our services, pricing, and solutions — and we'll take you right to the relevant section.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 bg-white border-2 border-gray-200 rounded-2xl p-2 shadow-lg focus-within:border-emerald-500 transition-all duration-300">
            <div className="flex items-center pl-2 text-gray-400">
              <Search size={20} />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Ask anything about HiveRift..."
              className="flex-1 bg-transparent outline-none text-gray-800 font-medium placeholder:text-gray-400 text-base py-2 px-2"
            />
            {query && (
              <button
                onClick={() => { setQuery(""); setAnswer(""); setError(""); setDetectedSection(null); setSessionId(null); }}
                className="text-gray-400 hover:text-gray-600 px-2"
              >
                <X size={18} />
              </button>
            )}
            <button
              onClick={() => handleSearch()}
              disabled={loading || !query.trim()}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
              {loading ? "Searching..." : "Ask AI"}
            </button>
          </div>

          {/* Suggested Questions */}
          {!answer && !loading && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSearch(q)}
                  className="text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-full transition-all duration-200"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot size={20} className="text-emerald-600 animate-pulse" />
              </div>
              <div>
                <p className="font-bold text-gray-700">HiveRift AI is thinking...</p>
                <p className="text-sm text-gray-400 mt-1">Searching our knowledge base</p>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-5">
              <p className="text-red-600 font-semibold text-sm">{error}</p>
            </div>
          )}

          {/* Answer */}
          {answer && !loading && (
            <div className="mt-6 bg-white border-2 border-emerald-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">HiveRift AI</p>
                  <p className="text-xs text-emerald-600 font-semibold">Answer found</p>
                </div>
              </div>

              <p className="text-gray-700 font-medium leading-relaxed text-base whitespace-pre-wrap">{answer}</p>

              {/* Navigation buttons */}
              {detectedSection && (
                <div className="mt-5 flex flex-col gap-2">
                  {/* Primary: scroll/navigate to section on homepage */}
                  <button
                    onClick={() => handleNavigateToSection(detectedSection)}
                    className="w-full flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 group"
                  >
                    <span>📍 View "{detectedSection.label}" section</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Secondary: if section has dedicated page, offer that too */}
                  {detectedSection.pageUrl && pathname !== detectedSection.pageUrl && (
                    <button
                      onClick={() => router.push(detectedSection.pageUrl!)}
                      className="w-full flex items-center justify-between bg-white hover:bg-emerald-50 border-2 border-emerald-200 text-emerald-700 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 group"
                    >
                      <span>🔗 Open full {detectedSection.label} page</span>
                      <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
