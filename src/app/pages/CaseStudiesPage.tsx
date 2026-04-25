import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, Award, Clock, CheckCircle2, Sparkles, Code, Target, Rocket, Globe } from "lucide-react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const caseStudies = [
  {
    id: "legal-consultancy-delhi",
    title: "Delhi Legal Consultancy — Brand Website + SEO",
    category: "Professional Services",
    industry: "Legal",
    description: "Transformed a 15+ year old offline consultancy into a digital leader, ranking #1 for high-intent keywords in Delhi NCR.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbmN5JTIwbGF3JTIwb2ZmaWNlfGVufDF8fHx8MTcwODkxMjQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-600 to-teal-600",
    metrics: [
      { label: "Organic Visits", value: "1,200/mo", icon: TrendingUp },
      { label: "New Revenue", value: "Rs. 4.2L", icon: Award },
      { label: "Marketing ROI", value: "11x", icon: Rocket },
    ],
    technologies: ["WordPress", "SEO", "Google My Business", "Google Ads"],
    challenge: "A Delhi legal consultancy with 15+ years of experience had no digital presence. Referrals were their only source of clients. They had no website and zero online visibility — and competitors were already ranking on Google.",
    solution: "Built a professional 8-page website, optimised for legal services keywords in Delhi and NCR. Set up Google My Business and ran a 3-month SEO campaign targeting high-intent keywords like 'corporate lawyer Delhi'.",
    delivered: [
      "8-page custom website",
      "On-page SEO for 25 keywords",
      "Google My Business optimisation",
      "Monthly content marketing retainer",
      "Google Ads (Rs. 20K/month spend)",
    ],
    results: [
      "Organic traffic from 0 to 1,200 visits/month",
      "#1 ranking for 8 target keywords",
      "22 qualified leads in first 3 months",
      "Rs. 4.2L new business in 6 months",
    ],
    investment: "Business Pro Website (Rs. 41,299) + Marketing Retainer (Rs. 29,499/mo)",
  },
  {
    id: "jaipur-handicrafts-ecommerce",
    title: "Jaipur Handicrafts Brand — E-Commerce Website",
    category: "Retail & E-Commerce",
    industry: "Handicrafts",
    description: "Enabled a local handicrafts business to reach customers across India with a tailored e-commerce infrastructure.",
    image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHNob3B8ZW58MXx8fHwxNzA4OTEyNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-500 to-emerald-500",
    metrics: [
      { label: "Monthly Orders", value: "340+", icon: TrendingUp },
      { label: "Revenue/mo", value: "Rs. 6.3L", icon: Award },
      { label: "Repeat Rate", value: "42%", icon: Users },
    ],
    technologies: ["WooCommerce", "Razorpay", "Stripe", "Instagram Shopping", "FB Shop"],
    challenge: "A family-run handicrafts business in Jaipur was selling exclusively at local fairs. They wanted to reach customers across India but had no e-commerce infrastructure.",
    solution: "Built a full WooCommerce store with Razorpay integration for Indian payments and Stripe for international. Included 200+ items and automated order management.",
    delivered: [
      "Custom WooCommerce store",
      "200+ product uploads with SEO",
      "Razorpay + Stripe integration",
      "Mobile-optimised design",
      "Instagram & FB Shop integration",
    ],
    results: [
      "Monthly orders from 0 to 340 in 60 days",
      "Rs. 6.3L monthly revenue by month 3",
      "Cart abandonment reduced by 44%",
      "42% repeat customer rate",
    ],
    investment: "E-Commerce Package (Rs. 29,499) + Marketing (Rs. 17,699/mo)",
  },
  {
    id: "pune-realestate-crm",
    title: "Pune-Based Real Estate Firm — Custom CRM",
    category: "Real Estate",
    industry: "Real Estate",
    description: "Automated lead management for a mid-sized firm, reducing response time from 4 hours to just 8 minutes.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwYnVpbGRpbmclMjBhcGFydG1lbnR8ZW58MXx8fHwxNzA4OTEyNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-500 to-teal-500",
    metrics: [
      { label: "Response Time", value: "8 min", icon: Clock },
      { label: "Conversion", value: "3x", icon: TrendingUp },
      { label: "Addl. Revenue", value: "Rs. 38L", icon: Award },
    ],
    technologies: ["React", "Node.js", "WhatsApp API", "PostgreSQL", "Analytics"],
    challenge: "A mid-sized Pune firm was managing 500+ monthly enquiries through Excel sheets and personal notebooks. Leads were falling through the cracks.",
    solution: "Built a custom CRM with automated lead capture, lead scoring, and WhatsApp follow-up sequences, plus a manager dashboard for real-time tracking.",
    delivered: [
      "Custom CRM (React + Node.js)",
      "WhatsApp Business API integration",
      "Automated follow-up sequences",
      "Lead scoring algorithm",
      "Manager analytics dashboard",
    ],
    results: [
      "Response time reduced by 96%",
      "Lead conversion improved from 3.2% to 9.7%",
      "40% increase in team productivity",
      "Rs. 38L additional revenue in 6 months",
    ],
    investment: "Custom CRM Development (Rs. 1,76,999) + Support AMC",
  },
  {
    id: "ludhiana-garments-erp",
    title: "Ludhiana Garments Manufacturer — Custom ERP",
    category: "Manufacturing",
    industry: "Garments",
    description: "Modernized a production unit with 120+ employees, reducing inventory wastage by 52% through real-time tracking.",
    image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMGFwcGFyZWwlMjBtYW51ZmFjdHVyaW5nfGVufDB8fHx8MTczOTgzMDQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-600 to-emerald-600",
    metrics: [
      { label: "Efficiency", value: "+38%", icon: TrendingUp },
      { label: "Waste Reduction", value: "52%", icon: Target },
      { label: "Payroll Speed", value: "97%", icon: Clock },
    ],
    technologies: ["React", "Python", "PostgreSQL", "Cloud Hosting", "Mobile App"],
    challenge: "A garment unit in Ludhiana was running on Tally and WhatsApp groups. They had no real-time visibility on production or material stock, causing delays.",
    solution: "Designed a cloud ERP covering production, inventory, HR, and payroll, with a mobile dashboard for management accessible 24/7.",
    delivered: [
      "Cloud ERP (React + Python)",
      "Production planning module",
      "Inventory & procurement module",
      "HR, attendance & payroll module",
      "Mobile app for supervisors",
    ],
    results: [
      "Production efficiency up by 38%",
      "Material wastage reduced by half",
      "Order fulfilment 4 days faster",
      "Payroll from 3 days to 2 hours",
    ],
    investment: "Custom ERP (Rs. 3,20,000) + 12-Month AMC",
  },
  {
    id: "mumbai-edtech-app",
    title: "Mumbai EdTech Startup — Student Learning App",
    category: "Education & E-Learning",
    industry: "Education",
    description: "Built a mobile-first learning ecosystem that boosted course completion rates from 19% to 78% in 3 months.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsZWFybmluZ3xlbnwxfHx8fDE3MDg5MTI0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-emerald-500 to-teal-500",
    metrics: [
      { label: "Active Users", value: "8,400", icon: Users },
      { label: "Completion Rate", value: "78%", icon: CheckCircle2 },
      { label: "Revenue/mo", value: "Rs. 12.6L", icon: Award },
    ],
    technologies: ["React Native", "Zoom API", "Razorpay", "Node.js", "AWS"],
    challenge: "An EdTech startup was using YouTube and WhatsApp to distribute content. Students had no tracking, and completion rates were below 20%.",
    solution: "Developed a cross-platform React Native app with modules, live classes, progress tracking, and parent dashboards.",
    delivered: [
      "React Native app (Android + iOS)",
      "Live class integration (Zoom)",
      "Quiz & assignment engine",
      "Razorpay subscription billing",
      "Full Store deployment",
    ],
    results: [
      "Active users up to 8,400 in 3 months",
      "Completion rates improved by 4x",
      "Rs. 12.6L monthly recurring revenue",
      "4.7/5 app store rating",
    ],
    investment: "App Package (Rs. 1,17,999) + 6-Month Support",
  },
  {
    id: "surat-diamond-merchant",
    title: "Surat Diamond Merchant — Luxury Digital Showroom",
    category: "Luxury & Retail",
    industry: "Luxury",
    description: "Digitized a high-value inventory for international buyers, securing Rs. 1.2Cr estimated pipeline in 90 days.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBkaWFtb25kfGVufDF8fHx8MTcwODkxMjQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-teal-600 to-emerald-600",
    metrics: [
      { label: "International", value: "4 Countries", icon: Globe },
      { label: "Est. Pipeline", value: "Rs. 1.2Cr", icon: TrendingUp },
      { label: "Inventory", value: "100%", icon: CheckCircle2 },
    ],
    technologies: ["Next.js", "Private Vault API", "HD Image Zoom", "WhatsApp VIP"],
    challenge: "A diamond house in Surat wanted to showcase high-value inventory to international buyers without sending low-quality WhatsApp photos and security risks.",
    solution: "Built a high-end luxury website with a private viewing vault, HD zoom for diamond certificates, and inquiry-to-WhatsApp automation for VIP clients.",
    delivered: [
      "Luxury custom website",
      "Private inventory vault",
      "HD diamond certificate viewer",
      "WhatsApp VIP integration",
      "Global high-end SEO",
    ],
    results: [
      "14 high-value inquiries in month 1",
      "International clients from 4 countries",
      "100% cloud-synced secure inventory",
      "Estimated Rs. 1.2Cr pipeline in 3 months",
    ],
    investment: "Luxury Pro Website (Rs. 89,999) + Maintenance Retainer",
  },
];

export function CaseStudiesPage() {
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden mt-20 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNlbGVicmF0aW9uJTIwdGVhbSUyMHN1Y2Nlc3N8ZW58MHx8fHwxNzM5ODMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Case Studies Success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6"
            >
              <Sparkles size={16} className="text-emerald-400" />
              <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">
                Success Stories
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6 leading-[1.1]"
            >
              Proven <span className="text-emerald-400">Impact</span> <br />
              Beyond Code
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-12 font-medium"
            >
              Discover how HiveRift transforms ambitious business goals into measurable digital success through tailored technology and strategic execution.
            </motion.p>

            {/* Hero Stats Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { label: "Successful Projects", value: "250+" },
                { label: "Global Reach", value: "10+ Countries" },
                { label: "Client Retention", value: "99%" },
                { label: "Average Growth", value: "111%" },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-emerald-500/50 pl-4">
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-50 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-gray-700 uppercase tracking-tight">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-1">
                      {study.title}
                    </h3>
                    <p className="text-[11px] text-emerald-600 font-bold mb-2 uppercase tracking-wide">{study.category}</p>
                    <p className="text-gray-600  leading-relaxed mb-5 line-clamp-2">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {study.metrics.map((metric, idx) => {
                        const Icon = metric.icon;
                        return (
                          <div key={idx} className="text-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center justify-center mb-1">
                              <Icon size={12} className="text-emerald-600" />
                            </div>
                            <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                            <div className="text-[9px] text-gray-500 font-medium truncate">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                            +{study.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <details className="group/details mt-auto">
                      <summary className="flex items-center justify-between cursor-pointer text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                        <span>View Full Case Study</span>
                        <ArrowRight size={18} className="group-hover/details:translate-x-1 transition-transform duration-300" />
                      </summary>
                      
                      <div className="mt-4 space-y-6 pt-4 border-t border-gray-200">
                        {/* Challenge */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Target size={18} className="text-red-500" />
                            <h4 className="font-bold text-gray-900">The Challenge</h4>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Our Solution */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Code size={18} className="text-emerald-600" />
                            <h4 className="font-bold text-gray-900">Our Solution</h4>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        {/* What We Delivered */}
                        {study.delivered && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <CheckCircle2 size={18} className="text-blue-500" />
                              <h4 className="font-bold text-gray-900">What We Delivered</h4>
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-2">
                              {study.delivered.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Results */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Rocket size={18} className="text-blue-600" />
                            <h4 className="font-bold text-gray-900">Results Achieved</h4>
                          </div>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                                <span className="text-emerald-500 font-bold">•</span>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Investment */}
                        {study.investment && (
                          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                              Investment & Package
                            </div>
                            <div className="text-sm text-emerald-900 font-bold">
                              {study.investment}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] rounded font-bold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with innovative digital solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
