"use client";

import { motion } from "motion/react";
import { TrendingUp, Users, Target, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CaseStudyHighlight() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-slate-50/50 border border-slate-100 rounded-[3rem] p-8 lg:p-12">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
              Case Study: <span className="text-emerald-600">Real Results for Our Clients</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Case Study Info */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1080"
                  alt="E-commerce Results"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-black text-gray-900 mb-1">E-commerce Brand</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industry: E-commerce</div>
                </div>
                <div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-tighter mb-1">Challenge</div>
                  <p className="text-xs font-bold text-gray-600 leading-relaxed">Low traffic, no leads and high ad spend with low conversion.</p>
                </div>
                <div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-tighter mb-1">Solution</div>
                  <p className="text-xs font-bold text-gray-900">SEO + Google Ads + CRO</p>
                </div>
                <div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-tighter mb-1">Duration</div>
                  <p className="text-xs font-bold text-gray-900">60 Days</p>
                </div>
              </div>
            </div>

            {/* Middle: Stats */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                { label: "Increase in Website Traffic", value: "300%", icon: TrendingUp },
                { label: "More Leads Generated", value: "5X", icon: Users },
                { label: "Return on Investment", value: "3X", icon: Target }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between group overflow-hidden relative">
                  <div className="relative z-10">
                    <div className="text-3xl font-black text-emerald-600 mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-gray-500 leading-tight">{stat.label}</div>
                  </div>
                  {/* Decorative Mini Chart Line */}
                  <div className="absolute bottom-0 right-0 w-24 h-12 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg viewBox="0 0 100 40" className="w-full h-full text-emerald-600 fill-none stroke-current stroke-2">
                      <path d="M0,35 Q20,30 40,20 T80,10 T100,5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Testimonial */}
            <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-4 right-4 text-emerald-50 opacity-20">
                <Quote size={80} />
              </div>
              <div className="relative z-10">
                <p className="text-sm font-bold text-gray-600 italic leading-relaxed mb-8">
                  "The team delivered beyond our expectations. Our traffic and leads grew significantly in just 60 days!"
                </p>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-50">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Rohit Sharma" />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900">Rohit Sharma</div>
                  <div className="text-xs font-bold text-gray-400">Founder, ShopKart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
