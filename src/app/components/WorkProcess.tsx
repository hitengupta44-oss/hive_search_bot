"use client";

import { motion } from "motion/react";
import { 
  Search, 
  Target, 
  Rocket, 
  Activity, 
  Sparkles,
  ChevronRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Research & Analysis",
    description: "Deep dive into your business, competitors, and target audience to find the best opportunities.",
    icon: Search,
    color: "bg-blue-600"
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "Creating a custom, data-backed strategy tailored to your specific business goals.",
    icon: Target,
    color: "bg-emerald-600"
  },
  {
    number: "03",
    title: "Agile Execution",
    description: "Implementing the plan with precision using cutting-edge tools and methodologies.",
    icon: Rocket,
    color: "bg-purple-600"
  },
  {
    number: "04",
    title: "Real-time Monitoring",
    description: "Tracking performance metrics and optimizing campaigns for maximum conversion.",
    icon: Activity,
    color: "bg-orange-600"
  },
  {
    number: "05",
    title: "Scale & Growth",
    description: "Scaling the most effective strategies to maximize your ROI and business growth.",
    icon: Sparkles,
    color: "bg-teal-600"
  }
];

export function WorkProcess() {
  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-1 tracking-tight leading-tight">How We Work</h2>
          <p className="text-[12px] sm:text-sm text-gray-500 font-bold max-w-2xl mx-auto">Our proven 5-step process designed to deliver exceptional results.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative group p-6 rounded-[2rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="flex flex-col items-center lg:items-start mb-4">
                  <div className="relative mb-2">
                    <div className={`w-16 h-16 rounded-[1.2rem] ${step.color} flex items-center justify-center text-white shadow-xl shadow-gray-200 group-hover:rotate-12 transition-all duration-500`}>
                      <step.icon size={28} />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -left-2 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-[9px] font-black ring-4 ring-white">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-black text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-bold leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Arrow Connector (Desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-2 translate-x-1/2">
                    <ChevronRight className="text-gray-200" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
