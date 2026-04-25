import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Smartphone,
  Code,
  Brain,
  Database,
  TrendingUp,
  ShoppingCart,
  Palette,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development",
    description: "High-performance, scalable web ecosystems built for global brands.",
    features: [
      "Custom Web Applications",
      "Next.js & React Architectures",
      "Enterprise CMS Integration",
    ],
    category: "Development",
    highlighted: true,
  },
  {
    id: "mobile-dev",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native & Hybrid mobile experiences that redefine user engagement.",
    features: [
      "iOS & Android Native",
      "React Native Solutions",
      "App Store Strategy",
    ],
    category: "Development",
    highlighted: false,
  },
  {
    id: "software-dev",
    icon: Code,
    title: "Software Engineering",
    description: "Complex ERP & CRM solutions tailored for automation and ROI.",
    features: [
      "Process Automation",
      "Legacy Modernization",
      "Custom Workflow Design",
    ],
    category: "Development",
    highlighted: false,
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Transforming raw data into predictive power and intelligent insights.",
    features: [
      "Predictive Analytics",
      "Custom ML Models",
      "NLP & Vision Systems",
    ],
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "data-annotation",
    icon: Database,
    title: "Data Annotation",
    description: "High-precision training data prepared for the next generation of AI.",
    features: [
      "99%+ Label Accuracy",
      "Image & Video Tagging",
      "QA Validation Cycles",
    ],
    category: "AI & Data",
    highlighted: false,
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Results-driven strategies that scale your brand visibility and ROI.",
    features: [
      "Data-backed SEO",
      "High-ROI PPC Campaigns",
      "Growth Marketing Maps",
    ],
    category: "Marketing",
    highlighted: true,
  },
];

const categories = ["All Services", "Development", "AI & Data", "Marketing"];

export function Services() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
            <Sparkles size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em]">
              Excellence in Execution
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            Our Core <br className="md:hidden" />
            <span className="text-emerald-600">Digital Expertise</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            From revolutionary AI models to high-conversion digital platforms, we engineer the solutions that define modern business performance.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 border ${activeCategory === category
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-xl shadow-emerald-600/20"
                  : "bg-white text-gray-400 border-gray-100 hover:border-emerald-200 hover:text-emerald-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative h-full p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 group-hover:-translate-y-2">
                    {/* Icon Container */}
                    <div className="mb-8">
                      <div className="inline-flex p-5 bg-emerald-50 rounded-3xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <Icon size={32} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 font-medium leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Feature Dots */}
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <CheckCircle2 size={18} className="text-emerald-500" strokeWidth={3} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Simple Bottom Link */}
                    <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                      Explore Service <ArrowRight size={16} />
                    </Link>
                    
                    {/* Highlighted Badge */}
                    {service.highlighted && (
                      <div className="absolute top-8 right-8">
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-emerald-100">
                          Primary
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <Link to="/services" className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-emerald-600 transition-all shadow-2xl flex-inline items-center gap-3">
            Explore All 20+ Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}