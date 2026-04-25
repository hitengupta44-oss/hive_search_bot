import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    id: "education-platform",
    title: "EdTech Learning Platform",
    category: "Education & E-Learning",
    industry: "Education",
    description: "Developed a comprehensive e-learning platform that revolutionized remote education for 50,000+ students across multiple countries.",
    image: "https://i.pinimg.com/1200x/da/e1/73/dae173068008ea21c428910307599554.jpg",
    gradient: "from-emerald-500 to-teal-500",
    metrics: [
      { label: "Active Users", value: "50K+", icon: Users },
      { label: "Engagement Rate", value: "85%", icon: TrendingUp },
      { label: "Course Completion", value: "92%", icon: Award },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "WebRTC"],
    challenge: "A leading educational institution needed a scalable platform to deliver interactive courses, track student progress, and facilitate real-time virtual classrooms.",
    solution: "We built a mobile-first learning management system with video conferencing, interactive assessments, progress tracking, and AI-powered personalized learning paths.",
    results: [
      "Increased student engagement by 85%",
      "Reduced administrative workload by 60%",
      "Improved course completion rates to 92%",
      "Scaled to 50,000+ concurrent users",
    ],
  },
  {
    id: "telemedicine-app",
    title: "Telemedicine Healthcare App",
    category: "Healthcare & Life Sciences",
    industry: "Healthcare",
    description: "Built a HIPAA-compliant telemedicine platform connecting 10,000+ patients with healthcare providers through secure video consultations.",
    image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGFwcCUyMHRlbGVtZWRpY2luZXxlbnwxfHx8fDE3NzA4OTI4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-600 to-teal-600",
    metrics: [
      { label: "Consultations", value: "10K+", icon: Users },
      { label: "Wait Time", value: "-70%", icon: Clock },
      { label: "Patient Satisfaction", value: "4.8/5", icon: Award },
    ],
    technologies: ["React", "Flutter", "Python", "MongoDB", "Twilio", "HIPAA"],
    challenge: "A healthcare network required a secure, user-friendly platform for remote patient consultations, prescription management, and medical records access.",
    solution: "We developed an end-to-end telemedicine solution with video consultations, e-prescriptions, appointment scheduling, health records integration, and secure messaging.",
    results: [
      "Reduced patient wait times by 70%",
      "Enabled 10,000+ remote consultations monthly",
      "Achieved 4.8/5 patient satisfaction rating",
      "Full HIPAA compliance certification",
    ],
  },
  {
    id: "retail-ecommerce",
    title: "Omnichannel Retail Platform",
    category: "Retail & E-Commerce",
    industry: "Retail",
    description: "Transformed a traditional retail business with an omnichannel e-commerce platform, increasing online sales by 300%.",
    image: "https://images.unsplash.com/photo-1768987439382-894ea4e2a736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGFwcCUyMG1vYmlsZSUyMHJldGFpbHxlbnwxfHx8fDE3NzA4OTI4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-500 to-emerald-500",
    metrics: [
      { label: "Sales Growth", value: "+300%", icon: TrendingUp },
      { label: "Monthly Orders", value: "25K+", icon: Users },
      { label: "Customer Retention", value: "89%", icon: Award },
    ],
    technologies: ["Next.js", "Shopify", "Stripe", "Google Analytics", "AI/ML"],
    challenge: "A retail chain needed to compete with online giants by creating a seamless shopping experience across physical stores and digital channels.",
    solution: "We created a unified commerce platform integrating POS systems, inventory management, mobile app, and personalized recommendations using AI.",
    results: [
      "Achieved 300% increase in online sales",
      "Processing 25,000+ orders monthly",
      "Customer retention rate of 89%",
      "Reduced cart abandonment by 45%",
    ],
  },
  {
    id: "fintech-dashboard",
    title: "Financial Analytics Dashboard",
    category: "Banking & Financial Services",
    industry: "FinTech",
    description: "Delivered a real-time financial analytics platform processing $500M+ in transactions with advanced fraud detection.",
    image: "https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZmluYW5jaWFsJTIwYXBwJTIwYmFua2luZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA4OTI4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-600 to-emerald-600",
    metrics: [
      { label: "Transactions", value: "$500M+", icon: TrendingUp },
      { label: "Fraud Detection", value: "99.8%", icon: Award },
      { label: "Response Time", value: "<50ms", icon: Clock },
    ],
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    challenge: "A fintech company needed a high-performance platform for real-time transaction monitoring, analytics, and AI-powered fraud detection.",
    solution: "We built a scalable dashboard with real-time data visualization, predictive analytics, automated reporting, and machine learning fraud detection algorithms.",
    results: [
      "Processing $500M+ in transactions",
      "99.8% fraud detection accuracy",
      "Sub-50ms query response times",
      "Reduced false positives by 75%",
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="py-5 md:py-10 lg:py-15 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-emerald-100 rounded-full mb-3 md:mb-4">
            <Award size={14} className="text-emerald-600 md:hidden" />
            <Award size={16} className="text-emerald-600 hidden md:block" />
            <span className="text-xs md:text-sm font-semibold text-emerald-700 tracking-wide">
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Case Studies by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">HiveRift</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore how we've helped businesses across industries achieve remarkable results through innovative digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="block group h-full">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="px-2.5 py-1 md:px-3 md:py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-semibold text-gray-700">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-xs md:text-sm text-emerald-600 font-semibold mb-3">{study.category}</p>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5 md:mb-6 flex-1">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6">
                      {study.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="text-center">
                            <div className="flex items-center justify-center mb-1 md:mb-2">
                              <Icon size={14} className="text-emerald-600 md:hidden" />
                              <Icon size={16} className="text-emerald-600 hidden md:block" />
                            </div>
                            <div className="text-lg md:text-2xl font-bold text-gray-900">{metric.value}</div>
                            <div className="text-[10px] md:text-xs text-gray-500">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* View Case Study Link */}
                    <Link 
                      to="/case-studies"
                      className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      <span>View All Case Studies</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}