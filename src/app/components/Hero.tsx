
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900"
            >
              Results-Driven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 block mt-1 sm:mt-2">
                Digital Marketing
              </span>{" "}
              Experts
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              HiveRift empowers brands with ROI-focused Digital Marketing, SEO, and Web Development services. We combine strategy, creativity, and technology to deliver measurable business growth.
            </motion.p>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3"
            >
              {[
                "Website Development",
                "Digital Marketing",
                "SEO & Content Strategy",
                "Tech SEO & Strategy"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800">{service}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 sm:pt-4"
            >
              {/* Primary CTA */}
              <Button
                asChild // Ye important hai taaki Button Link ki tarah behave kare
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto"
              >
                <Link to="/contact"> {/* Ab ye har page se contact par bhej dega */}
                  <Phone className="mr-2" size={18} />
                  Get Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Link to="/case-studies" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-full transition-all w-full sm:w-auto"
                >
                  View Case Studies
                </Button>
              </Link>
            </motion.div>

            {/* Client Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md">
                    <Users size={18} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-gray-900">387+ Happy Clients</div>
                <div className="text-xs text-gray-500">& Counting</div>
              </div>
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
              {/* Left Image - Professional Woman */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758876202014-6b2062bed4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwc21pbGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NzA5MDE2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional Business Woman"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right Image - Team Collaboration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative h-[180px] sm:h-[240px] lg:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NzA5MDE2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />

                {/* Top Rated Badge */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white rounded-full shadow-lg px-2.5 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                  <Award className="text-amber-500" size={14} />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Top rated company</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom: Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl sm:shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                {/* Left: Stats */}
                <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Stat 1 */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">125%</div>
                    <div className="text-white/95 text-sm sm:text-base lg:text-xl font-medium leading-tight">Increase in reach for clients</div>
                  </div>

                  {/* Stat 2 */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight">280%</div>
                    <div className="text-white/95 text-sm sm:text-base lg:text-xl font-medium leading-tight">Growth in digital presence</div>
                  </div>
                </div>

                {/* Right: Circular Badge */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* White Circle Background */}
                    <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>

                    {/* Inner Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">98%</div>
                      <div className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold mt-1 sm:mt-2">Success rate</div>
                    </div>

                    {/* Decorative Ring */}
                    <div className="absolute inset-2 sm:inset-3 border-2 border-emerald-100 rounded-full"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}