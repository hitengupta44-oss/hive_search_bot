"use client";

import { motion } from "motion/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

const industries = [
  {
    name: "Banking & Financial Services",
    slug: "finance",
    image: "https://images.unsplash.com/photo-1760555960699-dc19c4104301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jaWFsJTIwc2VydmljZXN8ZW58MXx8fHwxNzcwODgzNTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Digital banking and secure payment ecosystems."
  },
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare",
    image: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGhvc3BpdGFsfGVufDF8fHx8MTc3MDgxOTYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Next-gen patient care and data management."
  },
  {
    name: "Retail & E-Commerce",
    slug: "retail",
    image: "https://images.unsplash.com/photo-1605513524042-426bace35fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzA4ODM1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Seamless omnichannel shopping experiences."
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    image: "https://images.unsplash.com/photo-1695603414636-987030c7a890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcwNzc1NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Smart factory and supply chain optimization."
  },
  {
    name: "Energy & Utilities",
    slug: "energy",
    image: "https://images.unsplash.com/photo-1685376594043-844022374fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjB1dGlsaXRpZXMlMjBwb3dlcnxlbnwxfHx8fDE3NzA4ODM1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Intelligent grid and power management solutions."
  },
  {
    name: "Education & E-Learning",
    slug: "education",
    image: "https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzA4YTU3NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "Scalable platforms for future-ready education."
  }
];

export function EnhancedIndustries() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-5 md:py-10 lg:py-15 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-4 uppercase tracking-[0.2em]"
          >
            Our Expertise
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Trusted Across <span className="text-emerald-600">Multiple Industries</span>
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium leading-relaxed px-4">
            Delivering scalable, secure, and smart digital solutions tailored to industry-specific needs.
          </p>

          {/* Navigation Buttons - Centered below text */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 rounded-full shadow-lg hover:bg-emerald-50 hover:border-emerald-200 text-emerald-600 transition-all duration-300 transform active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-100 rounded-full shadow-lg hover:bg-emerald-50 hover:border-emerald-200 text-emerald-600 transition-all duration-300 transform active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/container">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {industries.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[calc(25%-18px)] snap-center group relative overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-[380px] md:h-[450px]"
              >
                <Link href={`/industries/${item.slug}`} className="block h-full w-full relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent group-hover:via-gray-900/60 transition-all duration-500"></div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="md:translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-emerald-400 group-hover:text-emerald-300 transition-colors uppercase tracking-tight leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-xs md:text-sm mb-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2 font-medium">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs group-hover:gap-3 transition-all duration-300">
                        <span>Learn More</span>
                        <ChevronRight size={14} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
