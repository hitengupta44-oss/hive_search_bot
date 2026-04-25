
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Phone
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen pt-28 pb-12 sm:pt-32 sm:pb-16 lg:py-24">
          {/* Left Side - Content (Order 2 on mobile, Order 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                WEB DEVELOPMENT & DIGITAL MARKETING
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
            >
              Results-Driven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 block">
                Digital Solutions
              </span>{" "}
              for Indian Businesses
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              HiveRift helps startups, SMEs, and enterprises grow faster with professional websites, powerful digital marketing, and custom software — all built in India, for India.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 sm:pt-4"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>

              <Link to="/case-studies" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-bold rounded-xl transition-all w-full sm:w-auto"
                >
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Hero Trust Bar - Redesigned for Premium Look */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 items-center gap-3 sm:gap-4 pt-10"
            >
              {[
                { value: "387+", label: "Happy Clients", icon: Users },
                { value: "98%", label: "Success Rate", icon: Award },
                { value: "5+", label: "Years Exp.", icon: TrendingUp },
                { value: "10+", label: "Countries", icon: BarChart3 }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-md border border-emerald-100 p-3 sm:px-5 sm:py-3 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-emerald-600 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-xl font-black text-gray-900 leading-none mb-0.5">{item.value}</div>
                    <div className="text-[8px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Images & Stats (Order 1 on mobile, Order 2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2"
          >
            {/* Top: Image Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <motion.div className="relative h-[240px] lg:h-[320px] rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758876202014-6b2062bed4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwc21pbGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzA5MDE2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Indian Business Leader"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div className="relative h-[240px] lg:h-[320px] rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NzA5MDE2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="HiveRift Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Stats Card */}
            <motion.div
              className="bg-gray-900 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between gap-8">
                <div className="space-y-8">
                  <div className="space-y-1">
                    <div className="text-5xl lg:text-7xl font-black text-white">125%</div>
                    <div className="text-emerald-400 text-sm lg:text-lg font-bold uppercase tracking-widest">Reach Growth</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-5xl lg:text-7xl font-black text-white">280%</div>
                    <div className="text-emerald-400 text-sm lg:text-lg font-bold uppercase tracking-widest">Presence Growth</div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-full flex flex-col items-center justify-center p-4 text-center ring-8 ring-emerald-500/20">
                    <div className="text-4xl lg:text-6xl font-black text-gray-900">98%</div>
                    <div className="text-[10px] lg:text-xs font-black text-emerald-600 uppercase tracking-tighter">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}