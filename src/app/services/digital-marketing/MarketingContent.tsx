"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Sparkles,
  Settings,
  Layers,
  Rocket,
  Search,
  Share2,
  BarChart3
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

const techLogos: Record<string, string> = {
  "Google Analytics": "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
  "SEMrush": "https://i.pinimg.com/1200x/16/4e/65/164e65248f341545cac0854fc49163a6.jpg",
  "HubSpot": "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
  "Mailchimp": "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg",
  "Meta Ads": "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg",
  "Google Ads": "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg"
};

const features = [
  { title: "SEO Strategy", desc: "Rank higher on Google with core-web-vital optimized search strategies." },
  { title: "Social Media Marketing", desc: "Engage and build high-trust communities on LinkedIn, Meta, and Instagram." },
  { title: "PPC & Lead Gen", desc: "High-ROI paid search campaigns designed for immediate lead capture." },
  { title: "Content Marketing", desc: "Authority-building content that converts visitors into brand advocates." },
  { title: "Email Automation", desc: "Personalized drip campaigns that nurture leads through the sales funnel." },
  { title: "Conversion Optimization", desc: "Data-driven A/B testing to maximize every dollar of your marketing spend." }
];

const technologies = ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Ads", "Google Ads"];

const processSteps = [
  {
    number: "01",
    title: "Audit",
    description: "Deep analysis of your current presence and competitors.",
    icon: Settings
  },
  {
    number: "02",
    title: "Strategy",
    description: "Crafting multi-channel roadmaps and content calendars.",
    icon: Layers
  },
  {
    number: "03",
    title: "Execution",
    description: "Launching campaigns across search, social, and email.",
    icon: Zap
  },
  {
    number: "04",
    title: "Measure",
    description: "Continuous optimization based on conversion data.",
    icon: Rocket
  },
];

export default function MarketingContent() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 md:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920" 
            alt="Digital Marketing"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-emerald-950/40"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-full mb-8 text-emerald-400">
              <Sparkles size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Growth Oriented Analytics
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none"
            >
              Strategic <br/>
              <span className="relative inline-block mt-2">
                <span className="text-emerald-500">Digital Marketing</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-500/20 rounded-full -z-10"></span>
                <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-emerald-500 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mt-6 leading-relaxed font-bold opacity-90 max-w-2xl"
            >
              Scale your brand visibility and lead generation with data-backed multi-channel marketing. Drive measurable growth in the digital first world.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-black hover:bg-emerald-500 transition-all shadow-xl flex items-center gap-2">
                Accelerate Growth <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Marketing <span className="text-emerald-600">Ecosystem</span>
            </h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-16">Campaign <span className="text-emerald-500">Lifecycle</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl border border-gray-700 flex flex-col items-center group"
                >
                  <div className="text-5xl font-black text-emerald-500/20 mb-4 group-hover:text-emerald-500 transition-colors">{step.number}</div>
                  <Icon className="text-emerald-400 mb-6" size={32} />
                  <h3 className="text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm font-medium">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 tracking-tight uppercase">Marketing Tech Suite</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {technologies.map((tech) => (
              <div key={tech} className="flex items-center gap-3 px-6 py-3 bg-white text-gray-700 rounded-2xl font-bold text-sm border border-gray-100 hover:border-emerald-500 hover:text-emerald-700 transition-all shadow-sm group">
                {techLogos[tech] && (
                  <img src={techLogos[tech]} alt={tech} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                )}
                {tech}
              </div>
            ))}
          </div>

          {/* Slim CTA Strip */}
          <div className="bg-emerald-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight">Ready to boost your brand visibility?</h3>
                <p className="text-emerald-50 font-medium opacity-90">Drive measurable results with our data-driven marketing.</p>
              </div>
              <Link href="/contact" className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-black text-sm hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                Hire Marketing Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
