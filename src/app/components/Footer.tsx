import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import logoImage from "figma:asset/7fe77d5a1d2e3ea35cd92869801d704f0f2dbc95.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-gray-300 border-t border-gray-900">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Core Services */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 border-b border-emerald-500/30 pb-2 w-fit">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Web Development", path: "/services/web-development" },
                { name: "Mobile Development", path: "/services/mobile-development" },
                { name: "Software Development", path: "/services/software-development" },
                { name: "AI & Machine Learning", path: "/services/ai-ml" },
                { name: "Digital Marketing", path: "/services/digital-marketing" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-[13px]">
                    <CheckCircle2 size={12} className="text-emerald-500" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tech Solutions */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 border-b border-emerald-500/30 pb-2 w-fit">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "UI/UX Design", path: "/services/ui-ux" },
                { name: "E-Commerce", path: "/services/ecommerce" },
                { name: "Cloud & DevOps", path: "/services/cloud-devops" },
                { name: "Data Annotation", path: "/services/data-annotation" },
                { name: "Case Studies", path: "/case-studies" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-[13px]">
                    <CheckCircle2 size={12} className="text-emerald-500" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 border-b border-emerald-500/30 pb-2 w-fit">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Industries", path: "/industries" },
                { name: "Our Methodology", path: "/solutions" },
                { name: "Company Overview", path: "/about" },
                { name: "Resources", path: "/about" },
                { name: "Guide to Digital PR", path: "/solutions" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-emerald-400 transition-colors flex items-center gap-2 text-[13px]">
                    <CheckCircle2 size={12} className="text-emerald-500" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Reach (Compact Format) */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 border-b border-emerald-500/30 pb-2 w-fit">
              Connect
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <div className="text-[12px] leading-tight space-y-2 text-gray-400">
                  <p><b className="text-white">🇮🇳 India:</b> New Delhi, 110005</p>
                  <p><b className="text-white">🇺🇸 USA:</b> Lansing, Michigan, 48906</p>
                  <p><b className="text-white">🇨🇦 Canada:</b> Cambridge, Ontario</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-emerald-500 shrink-0" />
                <div className="text-[12px] space-y-1">
                  <a href="tel:+918814930229" className="block hover:text-white transition-colors">+91 8814930229</a>
                  <a href="tel:+19728337525" className="block hover:text-white transition-colors">+1 972 833 7525</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-emerald-500 shrink-0" />
                <a href="mailto:info@hiverift.com" className="text-[12px] hover:text-white transition-colors">info@hiverift.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="my-10 border-gray-800" />

<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 py-8  border-gray-900">

  {/* 1. Branding */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs">
    <img
      src={logoImage}
      alt="HiveRift"
      className="h-10 w-auto mb-2"
    />
    <p className="text-xs text-gray-500 leading-snug">
      © 2026 HiveRift. Global Software Engineering Agency.
      Delivering Innovation Everywhere.
    </p>
  </div>


  {/* 2. Social Pills */}
  <div className="flex flex-wrap justify-center gap-3">
    {[
      { name: "LinkedIn", url: "https://www.linkedin.com/company/hiverift-softwares" },
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61576054306888" },
      { name: "Instagram", url: "https://www.instagram.com/hiverift.global/" },

    ].map((social, i) => (
      <a
        key={i}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-full border border-gray-800
        text-sm text-gray-400 hover:border-emerald-500
        hover:text-white hover:bg-emerald-500/10
        transition-all duration-300 whitespace-nowrap"
      >
        {social.name}
      </a>
    ))}
  </div>


  {/* 3. Partners / Payment */}
  <div className="flex justify-center lg:justify-end items-center">
    <div className=" md:h-10 h-8 lg:border-l border-gray-800 lg:pl-6">
      <img
        src="https://themexriver.com/wp/reliable/wp-content/uploads/2025/07/payment.webp"
        alt="Partners"
        className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition"
      />
    </div>
  </div>

</div>

      </div>
    </footer>
  );
}