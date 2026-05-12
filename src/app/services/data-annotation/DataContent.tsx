"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Database,
  Shield,
  Sparkles,
  Settings,
  Layers,
  Rocket,
  FileSearch,
  Target,
  Zap
} from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";

const techLogos: Record<string, string> = {
  "Labelbox": "https://www.vectorlogo.zone/logos/labelbox/labelbox-icon.svg",
  "Amazon SageMaker": "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "CVAT": "https://raw.githubusercontent.com/opencv/cvat/develop/cvat-ui/src/assets/cvat-logo.svg",
  "LabelImg": "https://raw.githubusercontent.com/tzutalin/labelImg/master/resources/icons/app.png",
  "Scale AI": "https://www.vectorlogo.zone/logos/scale/scale-icon.svg"
};

const features = [
  { title: "Computer Vision Labeling", desc: "Pixel-perfect bounding boxes, polygons, and semantic segmentation for visual AI." },
  { title: "NLP Text Tagging", desc: "Entity recognition, sentiment analysis, and intent classification for language models." },
  { title: "Audio & Speech Transcription", desc: "High-accuracy phonetic and speaker-specific labeling for voice-enabled systems." },
  { title: "Video Object Tracking", desc: "Frame-by-frame temporal tracking for autonomous systems and surveillance AI." },
  { title: "LIDAR & 3D Point Cloud", desc: "Complex 3D spatial annotation for advanced robotics and self-driving technology." },
  { title: "Quality Validation", desc: "Multi-layered human-in-the-loop verification to ensure 99.9% label accuracy." }
];

const technologies = ["Labelbox", "Amazon SageMaker", "CVAT", "LabelImg", "Scale AI"];

const processSteps = [
  {
    number: "01",
    title: "Preprocessing",
    description: "Cleaning and anonymizing raw data for the labeling team.",
    icon: Settings
  },
  {
    number: "02",
    title: "Gold Set Setup",
    description: "Defining strict annotation guidelines and benchmark labels.",
    icon: Layers
  },
  {
    number: "03",
    title: "Bulk Labeling",
    description: "Scaling production with expert human-in-the-loop annotators.",
    icon: Zap
  },
  {
    number: "04",
    title: "QC & Deliver",
    description: "Final quality checks and dataset export in your format.",
    icon: Rocket
  },
];

export default function DataContent() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 md:pt-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef0109121c64?q=80&w=1920" 
            alt="Data Annotation"
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
                Human in the Loop Precision
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none"
            >
              Precision Data <br/>
              <span className="relative inline-block mt-2">
                <span className="text-emerald-500">Annotation</span>
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
              Training world-class AI models requires world-class ground truth data. We provide high-accuracy labeling services across vision, text, and audio.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link href="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-black hover:bg-emerald-500 transition-all shadow-xl flex items-center gap-2">
                Request Dataset Audit <ArrowRight size={18} />
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
              Annotation <span className="text-emerald-600">Expertise</span>
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
                  <Database size={24} />
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
          <h2 className="text-3xl md:text-5xl text-white mb-16">The Accuracy <span className="text-emerald-500">Pipeline</span></h2>
          
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
          <h2 className="text-3xl font-black text-gray-900 mb-12 tracking-tight uppercase">Annotation Infrastructure</h2>
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
                <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight">Need high-quality training data?</h3>
                <p className="text-emerald-50 font-medium opacity-90">Our labeling experts deliver 99%+ accuracy for your AI models.</p>
              </div>
              <Link href="/contact" className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-black text-sm hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                Hire Labeling Team
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
