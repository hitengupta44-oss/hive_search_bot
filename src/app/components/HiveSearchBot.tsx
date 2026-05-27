"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, Loader2, Bot, ChevronRight, Sparkles, ExternalLink } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const SECTION_MAP: {
  keywords: string[];
  sectionId: string;
  label: string;
  pageUrl?: string;
}[] = [
  {
    keywords: ["blog", "article", "post", "read", "insight", "news", "latest post", "write"],
    sectionId: "blog",
    label: "Blog",
    pageUrl: "/blog",
  },
  {
    keywords: ["service", "web dev", "web development", "mobile app", "software", "machine learning", "cloud", "devops", "ecommerce", "data annotation", "digital marketing", "ui design", "ux design", "what do you do", "what do you offer", "what does hiverift"],
    sectionId: "services",
    label: "Services",
    pageUrl: "/services",
  },
  {
    keywords: ["price", "pricing", "cost", "plan", "package", "affordable", "rate", "charge", "fee", "₹", "rupee", "budget", "how much", "quote"],
    sectionId: "pricing",
    label: "Pricing",
    pageUrl: "/pricing",
  },
  {
    keywords: ["case stud", "portfolio", "past project", "previous work", "client work", "success story", "example"],
    sectionId: "case-studies",
    label: "Case Studies",
    pageUrl: "/case-studies",
  },
  {
    keywords: ["testimonial", "review", "feedback", "what client say", "what people say", "customer review", "trust"],
    sectionId: "testimonials",
    label: "Testimonials",
  },
  {
    keywords: ["faq", "frequently asked", "common question", "question about", "how long does it take", "do you work with small"],
    sectionId: "faq",
    label: "FAQ",
  },
  {
    keywords: ["partner", "technology partner", "google cloud", "aws", "microsoft", "meta", "zoho", "digitalocean", "hostinger", "tools you use"],
    sectionId: "partners",
    label: "Partners",
  },
  {
    keywords: ["industr", "sector", "healthcare", "finance", "banking", "retail", "education", "manufacturing", "energy", "real estate", "which industry"],
    sectionId: "industries",
    label: "Industries",
    pageUrl: "/industries",
  },
  {
    keywords: ["contact", "reach out", "call", "email", "whatsapp", "talk to", "consult", "get in touch", "hire", "phone number", "office"],
    sectionId: "cta",
    label: "Contact Us",
    pageUrl: "/contact",
  },
  {
    keywords: ["work process", "how do you work", "how does it work", "process", "methodology", "steps", "workflow", "how you build"],
    sectionId: "work-process",
    label: "How We Work",
  },
  {
    keywords: ["stat", "how many project", "how many client", "achievement", "number", "how big", "team size", "years", "experience"],
    sectionId: "stats",
    label: "Our Stats",
  },
  {
    keywords: ["about", "who are you", "who is hiverift", "company", "founded", "team", "history", "background"],
    sectionId: "about",
    label: "About Us",
    pageUrl: "/about",
  },
  {
    keywords: ["career", "job", "hiring", "vacancy", "join", "work at", "open position", "internship"],
    sectionId: "careers",
    label: "Careers",
    pageUrl: "/careers",
  },
  {
    keywords: ["solution", "enterprise", "startup", "smb", "growth solution", "business solution"],
    sectionId: "solutions",
    label: "Solutions",
    pageUrl: "/solutions",
  },
];

// Detect from QUERY (what user typed) — much more reliable than parsing bot answer
function detectSectionFromQuery(query: string): typeof SECTION_MAP[0] | null {
  const lower = query.toLowerCase().trim();
  for (const mapping of SECTION_MAP) {
    if (mapping.keywords.some((kw) => lower.includes(kw))) {
      return mapping;
    }
  }
  return null;
}

// Fallback: detect from bot ANSWER only if query detection failed
function detectSectionFromAnswer(answer: string): typeof SECTION_MAP[0] | null {
  const lower = answer.toLowerCase();
  const strictMap: { phrases: string[]; sectionId: string }[] = [
    { phrases: ["visit our blog", "read our blog", "check our blog", "our blog section", "latest blog"], sectionId: "blog" },
    { phrases: ["our pricing page", "view our pricing", "check our pricing", "pricing section"], sectionId: "pricing" },
    { phrases: ["our services page", "view our services", "check our services"], sectionId: "services" },
    { phrases: ["contact us", "get in touch", "reach out to us", "contact our team"], sectionId: "cta" },
    { phrases: ["our case studies", "view our portfolio", "our portfolio page"], sectionId: "case-studies" },
    { phrases: ["our testimonials", "client testimonials", "read reviews"], sectionId: "testimonials" },
    { phrases: ["our faq", "check our faq", "frequently asked questions section"], sectionId: "faq" },
    { phrases: ["our industries", "industries we serve", "industry page"], sectionId: "industries" },
    { phrases: ["about us page", "learn about hiverift", "our about page"], sectionId: "about" },
    { phrases: ["our careers", "careers page", "open positions", "job openings"], sectionId: "careers" },
  ];

  for (const item of strictMap) {
    if (item.phrases.some((p) => lower.includes(p))) {
      return SECTION_MAP.find((s) => s.sectionId === item.sectionId) || null;
    }
  }
  return null;
}

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.style.transition = "box-shadow 0.4s ease";
    el.style.boxShadow = "0 0 0 4px rgba(16, 185, 129, 0.5)";
    setTimeout(() => { el.style.boxShadow = "none"; }, 2500);
  }
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

  useEffect(() => {
    if (scrolling && pathname === "/") {
      const pendingSection = sessionStorage.getItem("pendingScrollSection");
      if (pendingSection) {
        setTimeout(() => {
          scrollToSection(pendingSection);
          sessionStorage.removeItem("pendingScrollSection");
          setScrolling(false);
        }, 700);
      }
    }
  }, [pathname, scrolling]);

  const handleNavigateToSection = (section: typeof SECTION_MAP[0]) => {
    if (section.pageUrl) {
      router.push(section.pageUrl);
      return;
    }
    if (pathname === "/") {
      scrollToSection(section.sectionId);
      return;
    }
    sessionStorage.setItem("pendingScrollSection", section.sectionId);
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

    const sectionFromQuery = detectSectionFromQuery(searchQuery);

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
        setDetectedSection(sectionFromQuery || detectSectionFromAnswer(data.answer));
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
              <button onClick={() => { setQuery(""); setAnswer(""); setError(""); setDetectedSection(null); setSessionId(null); }} className="text-gray-400 hover:text-gray-600 px-2">
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

          {!answer && !loading && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button key={q} onClick={() => handleSearch(q)} className="text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-full transition-all duration-200">
                  {q}
                </button>
              ))}
            </div>
          )}

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

          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-5">
              <p className="text-red-600 font-semibold text-sm">{error}</p>
            </div>
          )}

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
              {detectedSection && (
                <div className="mt-5 flex flex-col gap-2">
                  <button
                    onClick={() => handleNavigateToSection(detectedSection)}
                    className="w-full flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 group"
                  >
                    <span>📍 View "{detectedSection.label}" section</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  {detectedSection.pageUrl && (
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
