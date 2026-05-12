"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 px-4">
              Let's discuss how we can help you achieve your digital goals. Get a free consultation today!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <span>Get Started Now</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 md:hidden" />
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 hidden md:block" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}