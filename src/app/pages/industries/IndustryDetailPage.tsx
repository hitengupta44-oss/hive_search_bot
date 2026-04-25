import { useParams, Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap,
  ShoppingBag,
  ArrowLeft,
  Settings,
  Globe,
  Database,
  Plane,
  Building2,
  Phone,
  Truck,
  FileText,
  Sparkles
} from "lucide-react";

interface IndustryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
    icon: any;
  }[];
  benefits: string[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
  technologies: string[];
}

const techLogos: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "AWS": "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "HL7/FHIR": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/HL7-FHIR_logo.svg/512px-HL7-FHIR_logo.svg.png",
  "WebRTC": "https://www.vectorlogo.zone/logos/webrtc/webrtc-icon.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Shopify": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
  "Stripe": "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Blockchain": "https://www.vectorlogo.zone/logos/ethereum/ethereum-icon.svg",
  "AI/ML": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
};

const industriesData: Record<string, IndustryData> = {
  healthcare: {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Digital Solutions for Modern Healthcare",
    description: "Transform patient care and operational efficiency with cutting-edge healthcare technology solutions. We help healthcare providers deliver better outcomes through innovative digital platforms.",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920",
    challenges: [
      "Patient data management and security",
      "Regulatory compliance (HIPAA, GDPR)",
      "Interoperability between systems",
      "Telemedicine and remote patient monitoring",
      "Electronic Health Records (EHR) integration"
    ],
    solutions: [
      {
        title: "Patient Management Systems",
        description: "Comprehensive platforms for managing patient records, appointments, and care coordination",
        icon: Users
      },
      {
        title: "Telemedicine Platforms",
        description: "Secure video consultation and remote monitoring solutions",
        icon: Zap
      },
      {
        title: "Data Security & Compliance",
        description: "HIPAA-compliant systems with advanced encryption and access controls",
        icon: Shield
      }
    ],
    benefits: [
      "Improved patient outcomes and satisfaction",
      "Reduced operational costs by 30-40%",
      "Enhanced data security and compliance",
      "Streamlined workflows and communication",
      "Better resource utilization"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HL7/FHIR", "WebRTC"]
  },
  finance: {
    id: "finance",
    title: "Finance & Banking",
    subtitle: "Secure Digital Banking Solutions",
    description: "Empower your financial institution with secure, scalable, and user-friendly digital banking solutions. From mobile banking to fraud detection, we build systems that customers trust.",
    heroImage: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1920",
    challenges: [
      "Security and fraud prevention",
      "Regulatory compliance (PCI-DSS, SOX)",
      "Real-time transaction processing",
      "Customer experience and engagement",
      "Legacy system modernization"
    ],
    solutions: [
      {
        title: "Mobile Banking Apps",
        description: "Secure and intuitive mobile banking experiences with biometric authentication",
        icon: Users
      },
      {
        title: "Fraud Detection Systems",
        description: "AI-powered fraud detection and prevention systems",
        icon: Shield
      },
      {
        title: "Payment Gateways",
        description: "Fast and secure payment processing infrastructure",
        icon: Zap
      }
    ],
    benefits: [
      "99.99% uptime and reliability",
      "Reduced fraud by up to 60%",
      "Improved customer satisfaction scores",
      "Faster time-to-market for new features",
      "Seamless integration with existing systems"
    ],
    technologies: ["React Native", "Java", "MongoDB", "Azure", "Blockchain", "AI/ML"]
  },
  retail: {
    id: "retail",
    title: "Retail & E-Commerce",
    subtitle: "Transform Your Retail Experience",
    description: "Build seamless omnichannel retail experiences that drive sales and customer loyalty. Our e-commerce solutions help retailers thrive in the digital age.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920",
    challenges: [
      "Omnichannel customer experience",
      "Inventory management",
      "Payment processing and security",
      "Personalization and recommendations",
      "Supply chain optimization"
    ],
    solutions: [
      {
        title: "E-Commerce Platforms",
        description: "Full-featured online stores with advanced product management",
        icon: Users
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking across all channels",
        icon: TrendingUp
      },
      {
        title: "AI-Powered Recommendations",
        description: "Personalized product recommendations to increase conversions",
        icon: Zap
      }
    ],
    benefits: [
      "30-50% increase in online sales",
      "Improved inventory turnover",
      "Better customer insights and analytics",
      "Reduced cart abandonment rates",
      "Seamless omnichannel experience"
    ],
    technologies: ["React", "Shopify", "WooCommerce", "Magento", "Stripe", "AI/ML"]
  },
  education: {
    id: "education",
    title: "Education",
    subtitle: "Digital Learning Solutions",
    description: "Empower educators and students with innovative e-learning platforms and educational technology. Create engaging, accessible, and effective learning experiences.",
    heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1920",
    challenges: [
      "Remote learning infrastructure",
      "Student engagement and retention",
      "Assessment and grading automation",
      "Content management and delivery",
      "Accessibility and inclusivity"
    ],
    solutions: [
      {
        title: "Learning Management Systems",
        description: "Comprehensive LMS platforms for course delivery and management",
        icon: Users
      },
      {
        title: "Virtual Classrooms",
        description: "Interactive online classroom solutions with real-time collaboration",
        icon: Zap
      },
      {
        title: "Assessment Tools",
        description: "Automated grading and analytics for better learning outcomes",
        icon: TrendingUp
      }
    ],
    benefits: [
      "Increased student engagement by 40%",
      "Scalable learning infrastructure",
      "Better learning outcome tracking",
      "Reduced administrative overhead",
      "Accessible education for all"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Canvas LMS"]
  },
  "real-estate": {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Smart Property Solutions",
    description: "Modernize your real estate business with digital solutions for property management, virtual tours, and customer relationship management.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920",
    challenges: [
      "Property listing management",
      "Virtual property tours",
      "Lead generation and nurturing",
      "Document management",
      "Market analytics and insights"
    ],
    solutions: [
      {
        title: "Property Management Platforms",
        description: "Comprehensive systems for managing properties, tenants, and maintenance",
        icon: Users
      },
      {
        title: "Virtual Tour Solutions",
        description: "3D virtual tours and augmented reality property viewing",
        icon: Zap
      },
      {
        title: "CRM Systems",
        description: "Lead management and client relationship tools",
        icon: TrendingUp
      }
    ],
    benefits: [
      "50% faster property sales cycles",
      "Reduced operational costs",
      "Better lead conversion rates",
      "Enhanced customer experience",
      "Data-driven market insights"
    ],
    technologies: ["React", "Three.js", "Node.js", "MongoDB", "AWS", "Matterport"]
  },
  manufacturing: {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Industry 4.0 Solutions",
    description: "Optimize your manufacturing operations with IoT, automation, and data analytics solutions for the smart factory of the future.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920",
    challenges: [
      "Production optimization",
      "Supply chain management",
      "Quality control and assurance",
      "Predictive maintenance",
      "Inventory and resource management"
    ],
    solutions: [
      {
        title: "IoT & Automation",
        description: "Connected devices and automated workflows for smart manufacturing",
        icon: Zap
      },
      {
        title: "Predictive Analytics",
        description: "AI-powered insights for maintenance and optimization",
        icon: TrendingUp
      },
      {
        title: "Supply Chain Management",
        description: "End-to-end visibility and optimization of supply chains",
        icon: Shield
      }
    ],
    benefits: [
      "20-30% increase in productivity",
      "Reduced downtime and maintenance costs",
      "Improved product quality",
      "Better resource utilization",
      "Real-time operational insights"
    ],
    technologies: ["React", "IoT", "Python", "TensorFlow", "AWS IoT", "PostgreSQL"]
  },
  logistics: {
    id: "logistics",
    title: "Logistics",
    subtitle: "Smart Transportation & Delivery",
    description: "Streamline your logistics operations with intelligent routing, real-time tracking, and automated warehouse management solutions.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920",
    challenges: [
      "Route optimization",
      "Real-time tracking and visibility",
      "Warehouse management",
      "Last-mile delivery efficiency",
      "Fleet management"
    ],
    solutions: [
      {
        title: "Route Optimization",
        description: "AI-powered route planning for faster, cost-effective deliveries",
        icon: TrendingUp
      },
      {
        title: "Real-Time Tracking",
        description: "GPS tracking and delivery status updates",
        icon: Zap
      },
      {
        title: "Warehouse Automation",
        description: "Automated inventory and warehouse management systems",
        icon: Shield
      }
    ],
    benefits: [
      "25-35% reduction in delivery costs",
      "Improved delivery times",
      "Better fleet utilization",
      "Enhanced customer satisfaction",
      "Real-time operational visibility"
    ],
    technologies: ["React", "Google Maps API", "Node.js", "MongoDB", "IoT", "Machine Learning"]
  },
  hospitality: {
    id: "hospitality",
    title: "Hospitality",
    subtitle: "Guest Experience Excellence",
    description: "Enhance guest experiences and streamline operations with digital solutions for hotels, restaurants, and hospitality businesses.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920",
    challenges: [
      "Reservation and booking management",
      "Guest experience personalization",
      "Staff coordination",
      "Revenue management",
      "Online reputation management"
    ],
    solutions: [
      {
        title: "Booking Management",
        description: "Integrated reservation systems with dynamic pricing",
        icon: Users
      },
      {
        title: "Guest Experience Apps",
        description: "Mobile apps for seamless guest services and communication",
        icon: Zap
      },
      {
        title: "Revenue Optimization",
        description: "AI-powered pricing and revenue management systems",
        icon: TrendingUp
      }
    ],
    benefits: [
      "Increased booking conversions",
      "Higher guest satisfaction scores",
      "Optimized pricing and revenue",
      "Streamlined operations",
      "Better staff productivity"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Analytics"]
  },
  "food-restaurant": {
    id: "food-restaurant",
    title: "Food & Restaurant",
    subtitle: "Digital Ordering & Management Solutions",
    description: "Empower your restaurant with seamless online ordering, delivery management, and loyalty programs to drive customer engagement and revenue.",
    heroImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920",
    challenges: [
      "Online order fragmentation",
      "High third-party delivery commissions",
      "Customer data ownership",
      "Inventory and kitchen management",
      "Loyalty and retention programs"
    ],
    solutions: [
      {
        title: "Direct Ordering Platforms",
        description: "Build your own website and apps to avoid high commissions",
        icon: ShoppingBag
      },
      {
        title: "Kitchen Display Systems",
        description: "Streamline orders between front-of-house and kitchen",
        icon: Zap
      },
      {
        title: "POS Integration",
        description: "Seamlessly integrate online orders with your physical POS",
        icon: Settings
      }
    ],
    benefits: [
      "Reduced commission costs by 60%",
      "Increased repeat orders via loyalty",
      "Full ownership of customer data",
      "Faster order processing times",
      "Better inventory control"
    ],
    technologies: ["React", "Firebase", "Node.js", "MongoDB", "Stripe", "PostgreSQL"]
  },
  energy: {
    id: "energy",
    title: "Energy & Utilities",
    subtitle: "Smart Grid & Sustainable Energy Solutions",
    description: "Modernize energy infrastructure with smart grid solutions and sustainable energy management systems. We help utility providers optimize distribution and enhance consumer engagement.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1920",
    challenges: [
      "Smart grid integration and management",
      "Renewable energy source optimization",
      "Real-time energy consumption monitoring",
      "Infrastructure security and resilience",
      "Regulatory compliance and reporting"
    ],
    solutions: [
      {
        title: "Smart Metering Systems",
        description: "Advanced metering infrastructure for real-time tracking and automated billing.",
        icon: Zap
      },
      {
        title: "Grid Analytics",
        description: "AI-powered platforms for predictive maintenance and load balancing.",
        icon: TrendingUp
      },
      {
        title: "Renewable Portals",
        description: "Dashboards for managing solar, wind, and other green energy assets.",
        icon: Shield
      }
    ],
    benefits: [
      "25% reduction in energy wastage",
      "Improved grid reliability and uptime",
      "Faster response to power outages",
      "Seamless integration of green energy",
      "Data-driven consumption insights"
    ],
    technologies: ["IoT", "Python", "React", "AWS IoT Core", "PostgreSQL", "Time Series DB"]
  },
  insurance: {
    id: "insurance",
    title: "Insurance",
    subtitle: "Modern Digital Insurance Solutions",
    description: "Transform your insurance business with digital platforms that automate claims processing, enhance risk assessment, and improve customer engagement.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920",
    challenges: [
      "Manual and slow claims processing",
      "Accurate risk assessment and underwriting",
      "Customer retention and personalized offerings",
      "Legacy system integration",
      "Fraud detection and prevention"
    ],
    solutions: [
      {
        title: "Claims Automation",
        description: "AI-driven platforms to speed up claim settlements and reduce paperwork.",
        icon: Zap
      },
      {
        title: "Customer Portals",
        description: "Self-service mobile and web apps for policy management and renewals.",
        icon: Users
      },
      {
        title: "Fraud Analytics",
        description: "Advanced algorithms to detect suspicious patterns and prevent insurance fraud.",
        icon: Shield
      }
    ],
    benefits: [
      "40% faster claims settlement",
      "Improved underwriting accuracy",
      "Higher customer satisfaction scores",
      "Reduced operational overhead",
      "Enhanced data-driven decision making"
    ],
    technologies: ["React", "Node.js", "AI/ML", "MongoDB", "AWS", "Python"]
  },
  automotive: {
    id: "automotive",
    title: "Automotive",
    subtitle: "Connected Vehicle Solutions",
    description: "Drive innovation in the automotive industry with connected car technologies, dealership management systems, and customer engagement platforms.",
    heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920",
    challenges: [
      "Vehicle connectivity and IoT",
      "Dealership management",
      "Customer experience",
      "Predictive maintenance",
      "Supply chain optimization"
    ],
    solutions: [
      {
        title: "Connected Car Platforms",
        description: "IoT solutions for vehicle connectivity and telematics",
        icon: Zap
      },
      {
        title: "Dealership Management",
        description: "Comprehensive CRM and inventory management for dealerships",
        icon: Users
      },
      {
        title: "Predictive Maintenance",
        description: "AI-powered vehicle health monitoring and maintenance alerts",
        icon: Shield
      }
    ],
    benefits: [
      "Enhanced vehicle safety and performance",
      "Improved customer satisfaction",
      "Better inventory management",
      "Reduced maintenance costs",
      "Data-driven business insights"
    ],
    technologies: ["React", "IoT", "AWS", "Machine Learning", "MongoDB", "APIs"]
  },
  government: {
    id: "government",
    title: "Government",
    subtitle: "Digital Governance Solutions",
    description: "Modernize public services with secure, accessible, and efficient digital platforms for citizen engagement and government operations.",
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e443d1f0?q=80&w=1920",
    challenges: [
      "Citizen service delivery",
      "Data security and privacy",
      "Regulatory compliance",
      "Legacy system modernization",
      "Transparency and accountability"
    ],
    solutions: [
      {
        title: "Citizen Portals",
        description: "Self-service platforms for government services and information",
        icon: Users
      },
      {
        title: "Secure Data Management",
        description: "Compliant data storage and management systems",
        icon: Shield
      },
      {
        title: "Workflow Automation",
        description: "Streamlined processes for government operations",
        icon: Zap
      }
    ],
    benefits: [
      "Improved citizen satisfaction",
      "Reduced processing times",
      "Enhanced transparency",
      "Better resource allocation",
      "Secure and compliant systems"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Security Tools", "Blockchain", "AWS GovCloud"]
  }
};

export function IndustryDetailPage() {
  const { industryId } = useParams();
  const navigate = useNavigate();

  const industry = industryId ? (industriesData as any)[industryId] : null;

  if (!industry) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col items-center justify-center h-[70vh] px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Page <span className="text-emerald-600">Not Found</span>
            </h1>
            <p className="text-gray-600 mb-10 text-lg md:text-xl">The industry detail page you're looking for was not found.</p>
            <Link
              to="/"
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl inline-flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{industry.title} Industry Solutions | HiveRift</title>
        <meta name="description" content={`Empowering the ${industry.title} industry with cutting-edge digital solutions and AI.`} />
        <meta name="keywords" content={`${industry.title}, digital transformation, software solutions, HiveRift`} />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={industry.heroImage} 
            alt={industry.title}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Screenshot style gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-emerald-900/40 transform-gpu"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Badge like in screenshot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-full mb-8">
              <Sparkles size={14} className="text-emerald-400" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">
                Industry Excellence
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none"
            >
              HiveRift — <br/>
              <span className="relative inline-block mt-2">
                <span className="text-emerald-500">{industry.title}</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-500/30 rounded-full -z-10"></span>
                <span className="absolute -bottom-1 left-0 w-3/4 h-1 bg-emerald-500 rounded-full"></span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-bold opacity-90"
            >
              {industry.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-black hover:bg-emerald-500 transition-all shadow-xl">
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Challenges Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                  Core <span className="text-emerald-600">Challenges</span>
                </h2>
                <div className="w-20 h-2 bg-emerald-600 rounded-full"></div>
                <p className="text-gray-600 text-lg font-medium">Navigating industry bottlenecks requires deep expertise and smart tech.</p>
              </div>

              <div className="grid gap-6">
                {industry.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-emerald-200 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors">
                      <Settings className="text-emerald-600 group-hover:text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{challenge}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Solutions Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                  HiveRift <span className="text-emerald-600">Solutions</span>
                </h2>
                <div className="w-20 h-2 bg-emerald-600 rounded-full"></div>
                <p className="text-gray-600 text-lg font-medium">Strategic digital roadmaps tailored for sustainable growth.</p>
              </div>

              <div className="grid gap-6">
                {industry.solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div
                      key={index}
                      className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-black text-gray-900">{solution.title}</h3>
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">{solution.description}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-black text-white mb-16 underline underline-offset-8 decoration-emerald-500"
          >
            Strategic <span className="text-emerald-400">Benefits</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industry.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl border border-gray-700 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-500">
                  <CheckCircle2 size={28} className="text-emerald-400 group-hover:text-white" />
                </div>
                <p className="text-white font-bold text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technolgies & CTA */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight uppercase">Tech Stack We Use</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              {industry.technologies.map((tech) => (
                <span key={tech} className="flex items-center gap-3 px-6 py-3 bg-white text-gray-700 rounded-2xl font-bold text-sm border border-gray-100 hover:border-emerald-500 hover:text-emerald-700 transition-all shadow-sm group">
                  {techLogos[tech] && (
                    <img 
                      src={techLogos[tech]} 
                      alt={tech} 
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-emerald-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight leading-tight">Ready to Transform Your {industry.title} Operations?</h3>
                  <p className="text-emerald-50 font-medium opacity-90">Let's build a scalable digital future together.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-black text-sm hover:scale-105 transition-transform shadow-lg">
                    Free Consultation
                  </Link>
                  <Link to="/contact" className="px-8 py-4 bg-emerald-800/30 backdrop-blur-sm border border-white/20 text-white rounded-xl font-black text-sm hover:bg-emerald-800 transition-colors">
                    Contact Sales
                  </Link>
                </div>
              </div>
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
