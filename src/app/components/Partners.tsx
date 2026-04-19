import { motion } from "motion/react";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

// Custom Arrow Components
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-15px] md:left-[-45px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border border-emerald-100 rounded-full shadow-md hover:bg-emerald-50 hover:border-emerald-300 text-emerald-600 transition-all duration-300"
      aria-label="Previous Slide"
    >
      <ChevronLeft size={24} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-15px] md:right-[-45px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white border border-emerald-100 rounded-full shadow-md hover:bg-emerald-50 hover:border-emerald-300 text-emerald-600 transition-all duration-300"
      aria-label="Next Slide"
    >
      <ChevronRight size={24} />
    </button>
  );
};

const partners = [
  {
    name: "Google Cloud Partner",
    logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
    category: "Cloud & Infrastructure",
  },
  {
    name: "Microsoft Partner",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    category: "Enterprise Solutions",
  },
  {
    name: "AWS Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    category: "Cloud Services",
  },
  {
    name: "Meta Business Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1280px-Meta-Logo.png",
    category: "Digital Marketing",
  },
  {
    name: "Zoho Partner",
    logo: "https://www.zoho.com/sites/zweb/images/ogimage/zoho-logo.png",
    category: "Business Software",
  },
  {
    name: "digitalocean",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/250px-DigitalOcean_logo.svg.png",
    category: "cloud hosting",
  },
  {
    name: "hostinger",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hostinger_Logotype.png",
    category: "web hosting",
  },
];

export function Partners() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4, // Default (Desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full mb-3 md:mb-4">
            <Award size={14} className="text-emerald-600 md:hidden" />
            <Award size={16} className="text-emerald-600 hidden md:block" />
            <span className="text-xs md:text-sm font-semibold text-emerald-700 tracking-wide uppercase">
              Trusted Partnerships
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Technology Partners</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Backed by world-class technology partnerships to deliver excellence
          </p>
        </motion.div>

        {/* Partner Logos Slider Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto partners-slider relative px-8 md:px-12
            [&_.slick-dots]:bottom-[-45px] md:[&_.slick-dots]:bottom-[-55px]
            [&_.slick-dots_li_button:before]:text-[10px] [&_.slick-dots_li_button:before]:text-emerald-500
            [&_.slick-dots_li.slick-active_button:before]:text-teal-500"
        >
          {mounted ? (
            <Slider key={mounted ? "slider-on" : "slider-off"} {...settings}>
              {partners.map((partner) => (
              <div key={partner.name} className="px-2 md:px-3">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-gray-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-36 md:h-48">
                  <div className="w-full h-16 md:h-20 flex items-center justify-center mb-3 md:mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const textFallback = document.createElement('div');
                        textFallback.className = 'font-bold text-gray-700 text-center text-sm md:text-base';
                        textFallback.textContent = partner.name;
                        e.currentTarget.parentElement?.appendChild(textFallback);
                      }}
                    />
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 text-center font-medium">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-36 md:h-48 bg-gray-50 animate-pulse rounded-2xl border-2 border-gray-100"></div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}