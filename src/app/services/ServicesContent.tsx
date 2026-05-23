"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Code,
  Brain,
  Database,
  TrendingUp,
  ShoppingCart,
  Palette,
  Cloud
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "High-performance web ecosystems built for global brands.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1080",
    category: "Development",
    highlighted: true,
    icon: Globe
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortDescription: "Native & Hybrid mobile experiences that redefine user engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1080",
    category: "Development",
    highlighted: false,
    icon: Smartphone
  },
  {
    id: "software-development",
    title: "Software Engineering",
    shortDescription: "Tailored software built for automation, efficiency, and ROI.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080",
    category: "Development",
    highlighted: false,
    icon: Code
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription: "Transforming raw data into predictive intelligence and insights.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1080",
    category: "AI & Data",
    highlighted: false,
    icon: Brain
  },
  {
    id: "data-annotation",
    title: "Data Annotation",
    shortDescription: "High-precision training data prepared for the next generation of AI.",
    image: "https://i.pinimg.com/1200x/3f/bd/39/3fbd39179ec2be6cd25a41cfdfe94b9a.jpg",
    category: "AI & Data",
    highlighted: false,
    icon: Database
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Data-backed strategies that scale your brand visibility and ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",
    category: "Marketing",
    highlighted: true,
    icon: TrendingUp
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortDescription: "Launch & scale online stores with enterprise commerce infrastructure.",
    image: "https://i.pinimg.com/1200x/76/30/85/7630856095ac7979117823645648bcb5.jpg",
    category: "Design & Cloud",
    highlighted: false,
    icon: ShoppingCart
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    shortDescription: "Pixel-perfect interfaces that resonate with users and drive engagement.",
    image: "https://i.pinimg.com/736x/68/aa/61/68aa613db13accf414562a2ec1fd72d7.jpg",
    category: "Design & Cloud",
    highlighted: false,
    icon: Palette
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription: "Scalable cloud ecosystems with fully automated delivery pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080",
    category: "Design & Cloud",
    highlighted: false,
    icon: Cloud
  }
];

const categories = ["All Services", "Development", "AI & Data", "Marketing", "Design & Cloud"];

export default function ServicesContent() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24 md:pt-36">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920" 
            alt="HiveRift Services"
            className="w-full h-full object-cover scale-105 animate-slow-zoom opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950 to-emerald-950/30"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/30 backdrop-blur-md border border-emerald-500/30 rounded-full mt-4 text-emerald-400">
              <Sparkles size={14} />
              <span className="text-sm font-semibold text-white tracking-wide uppercase">
                Explore Our Ecosystem
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none"
            >
              Comprehensive <br/>
              <span className="relative inline-block mt-2">
                <span className="text-emerald-500">Digital Solutions</span>
                {/* <span className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-500/20 rounded-full -z-10"></span> */}
                {/* <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-emerald-500 rounded-full"></span> */}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mt-6 leading-relaxed font-bold opacity-90 max-w-2xl"
            >
              Empowering businesses with high-end engineering, intelligent data models, and growth-driven marketing strategies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List Section */} 
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 border ${activeCategory === category
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-xl"
                    : "bg-white text-gray-400 border-gray-100 hover:border-emerald-200 hover:text-emerald-600"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link href={`/services/${service.id}`}>
                      <div className="relative h-full rounded-2xl bg-white border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                        {/* Image Header */}
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute  to-transparent"></div>
                          
                          {/* Floating Icon */}
                          <div className="absolute bottom-6 left-8">
                            <div className="inline-flex p-4 bg-white/90 backdrop-blur-md rounded-2xl text-emerald-600 shadow-xl border border-white/20">
                              <Icon size={24} strokeWidth={2.5} />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-10 pt-4">
                          <div className="flex items-center gap-3 mb-4">
                             <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest px-2 py-1 bg-emerald-50 rounded-lg">
                                {service.category}
                             </span>
                             {service.highlighted && (
                                <span className="flex items-center gap-1 text-[10px] font-black text-yellow-600 uppercase tracking-widest px-2 py-1 bg-yellow-50 rounded-lg">
                                  ⭐ Featured
                                </span>
                             )}
                          </div>

                          <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-gray-500 font-medium leading-relaxed mb-10 line-clamp-2">
                            {service.shortDescription}
                          </p>

                          <div className="inline-flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                            View Details <ArrowRight size={14} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
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
