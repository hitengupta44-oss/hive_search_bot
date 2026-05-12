"use client";

import { motion } from "motion/react";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";


export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
       />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4 mt-20">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Error Icon with Theme Glow */}
            <div className="inline-flex p-6 rounded-full bg-emerald-50 mb-8 relative">
               <AlertCircle size={80} className="text-emerald-500 relative z-10" strokeWidth={1.5} />
               <div className="absolute inset-0 bg-emerald-200 blur-2xl opacity-30 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Oops! Page Not Found
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 transition-all active:scale-95 group">
                  <Home size={20} />
                  Back to Home
                </button>
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-white border-2 border-emerald-100 text-emerald-700 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 hover:border-emerald-200 transition-all active:scale-95"
              >
                <ArrowLeft size={20} />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}