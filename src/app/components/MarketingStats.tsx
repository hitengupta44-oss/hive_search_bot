"use client";

import { motion } from "motion/react";
import { Users, Star, Award, Briefcase } from "lucide-react";

const stats = [
  {
    label: "Projects Delivered",
    value: "250+",
    icon: Briefcase,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    label: "Global Clients",
    value: "150+",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    label: "Customer Satisfaction",
    value: "4.9/5",
    icon: Star,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    label: "Years of Excellence",
    value: "5+",
    icon: Award,
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

export function MarketingStats() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-slate-50/50 border border-slate-100 rounded-[3rem] p-5 lg:p-8">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left side: Trusted info */}
            <div className="lg:col-span-2 space-y-3">
              <h2 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                Trusted by Brands Worldwide
              </h2>
              <p className="text-gray-500 font-bold text-xs lg:text-sm leading-relaxed">
                We combine strategy, creativity, and technology to help businesses scale faster with impactful digital solutions and performance-driven results.
              </p>

              <div className="flex items-center -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-emerald-600 flex items-center justify-center text-white text-xs font-black shadow-sm">
                  +200
                </div>
              </div>
            </div>

            {/* Right side: Stats cards */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm text-center space-y-3">
                  <div className={`w-12 h-12 ${stat.bgColor} ${stat.color} rounded-2xl flex items-center justify-center mx-auto`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter leading-tight">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
