"use client";

import { motion } from "motion/react";
import { Award } from "lucide-react";

const partners = [
  {
    name: "Google Cloud",
    logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
    category: "Cloud Partner",
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    category: "Gold Partner",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    category: "Infrastructure",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1280px-Meta-Logo.png",
    category: "Business Partner",
  },
  {
    name: "Zoho",
    logo: "https://www.zoho.com/sites/zweb/images/ogimage/zoho-logo.png",
    category: "Software Partner",
  },
  {
    name: "DigitalOcean",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/250px-DigitalOcean_logo.svg.png",
    category: "Hosting Partner",
  },
  {
    name: "Hostinger",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hostinger_Logotype.png",
    category: "Web Solutions",
  },
];

export function EnhancedPartners() {
  // Double the array for infinite scroll effect
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 mb-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-4"
        >
          <Award size={16} className="text-emerald-600" />
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Trusted Ecosystem</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Technology Partners</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Continuous Scrolling Row */}
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -100 * partners.length] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollingPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="inline-block px-4 md:px-8 w-[200px] md:w-[300px]"
            >
              <div className="h-24 md:h-32 bg-slate-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center  hover:grayscale-0 hover:bg-white hover:border-emerald-200 hover:shadow-xl transition-all duration-500">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-8 md:max-h-12 w-auto object-contain mb-2"
                />
                <span className="text-[10px] md:text-xs font-medium text-gray-400">{partner.category}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
