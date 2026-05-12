"use client";


import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Phone,
  HelpCircle,
  Target,
  Trophy
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
          {/* Left Side - Content (Order 2 on mobile, Order 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1"
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                LIMITED TIME OFFER
              </div>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                <Trophy className="w-4 h-4" />
                FREE WEBSITE
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-gray-900 tracking-tight"
            >
              Grow Your <span className="text-emerald-600">Business</span> <br />
              with <span className="text-emerald-600">Result-Driven</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Digital Marketing
              </span>
            </motion.h1>

            {/* Description / Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold leading-relaxed max-w-2xl">
                Get a <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-4">FREE</span> High-Converting Website <br className="hidden sm:block" />
                with Our Digital Marketing Services
              </p>

              {/* Features Checklist */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                {[
                  "No Hidden Cost",
                  "SEO Optimized",
                  "Mobile Friendly"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm sm:text-base font-bold text-gray-600">
                    <CheckCircle2 className="text-emerald-500" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 sm:pt-6"
            >
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-7 text-lg font-black rounded-full shadow-xl shadow-emerald-200 hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>

              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-7 text-lg font-black rounded-full transition-all w-full sm:w-auto"
                >
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Mockup Image (Order 1 on mobile, Order 2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl lg:max-w-3xl">
              {/* Floating 100% Free Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-4 sm:-right-10 z-20"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-4 text-center ring-8 ring-emerald-500/10 border border-emerald-100">
                  <div className="text-xl sm:text-3xl font-black text-emerald-600">100%</div>
                  <div className="text-[8px] sm:text-[10px] font-black text-gray-900 uppercase tracking-tighter leading-tight">
                    FREE WEBSITE <br />
                    <span className="text-gray-400 font-bold">With Selected Plans</span>
                  </div>
                </div>
              </motion.div>

              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(16,185,129,0.2)] border-8 border-white bg-white">
                <ImageWithFallback
                  src="/hero_hiverift_mockup.png"
                  alt="Digital Marketing Mockup"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-400/20 rounded-full blur-[100px] -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Quick Answers Section (AEO Optimized) - Full Width Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 lg:mt-8 pb-8"
        >
          <div className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-[2.5rem] p-5 sm:p-8 shadow-inner">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 tracking-tight">Quick Answers </h2>
              <p className="text-sm sm:text-base text-gray-500 font-bold max-w-2xl mx-auto">Instant answers to the most common questions about our services.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  q: "What is digital marketing?",
                  a: "Digital marketing is the process of promoting your business online using SEO, social media, and ads to generate leads and sales.",
                  icon: HelpCircle
                },
                {
                  q: "Why is a website important?",
                  a: "A website builds trust, increases visibility, and helps convert visitors into paying customers for your business.",
                  icon: TrendingUp
                },
                {
                  q: "How can you help my business?",
                  a: "We create a website, drive targeted traffic, and generate quality leads using proven strategies that deliver results.",
                  icon: Users
                },
                {
                  q: "How long does it take to see results?",
                  a: "SEO takes 3-6 months for strong results, while paid ads can start generating leads and sales within days.",
                  icon: Target
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                      <item.icon size={20} className="text-emerald-600 group-hover:text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-black text-gray-900 mb-1 leading-tight group-hover:text-emerald-600 transition-colors h-10 flex items-center">{item.q}</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-3 flex-grow">{item.a}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] hover:gap-4 transition-all">
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}