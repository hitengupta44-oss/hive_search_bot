"use client";

import { motion, useMotionValue } from "motion/react";
import { Star, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CEO",
    location: "Mumbai",
    rating: 5,
    text: "HiveRift built our startup website in under 2 weeks. The SEO setup alone increased our organic traffic by 150% in 3 months. Best investment we made.",
  },
  {
    name: "Priya Sharma",
    position: "Marketing Director",
    location: "Delhi",
    rating: 5,
    text: "We moved from page 5 to #1 on Google for our main keywords in 4 months. The team is responsive, professional, and genuinely cares about results.",
  },
  {
    name: "Sanjay Deshmukh",
    position: "Owner",
    location: "Pune",
    rating: 5,
    text: "Our restaurant chain now gets 180% more online orders thanks to HiveRift's local SEO and Google Ads. The ROI has been incredible.",
  },
  {
    name: "Anita Verma",
    position: "Founder",
    location: "Bangalore",
    rating: 5,
    text: "They built our e-commerce store and within one month our conversion rate improved by 40%. The Business Pro package was perfect for our budget.",
  },
  {
    name: "Vikram Singh",
    position: "Director",
    location: "Jaipur",
    rating: 5,
    text: "Transparent pricing, fast delivery, and zero surprises. That is what I appreciated most. The website looks premium and works flawlessly on mobile.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragX = useMotionValue(0);

  // Auto-play for mobile (since it's 1 card per view)
  useEffect(() => {
    const timer = setInterval(() => {
      if (dragX.get() === 0) { // Don't auto-slide if user is dragging
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [dragX]);

  const onDragEnd = (e: any, { offset, velocity }: any) => {
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
    } else if (offset.x > swipeThreshold) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="py-5 md:py-10  lg:py-15 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-gray-900 mb-6"
          >
            Trusted by Businesses <span className="text-emerald-600">Across India</span>
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Real clients. Real results. Here is what they say after working with HiveRift.
          </p>
        </div>

        {/* Desktop View: 4 Cards in Responsive Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {testimonials.slice(0, 4).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl hover:shadow-emerald-500/10 transition-all group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{item.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{item.name}</div>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter flex items-center gap-1">
                    {item.position} • {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: 1 Card Slider with Drag Support */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              style={{ x: dragX }}
              animate={{ x: `-${currentIndex * 100}%` }}
              onDragEnd={onDragEnd}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex items-stretch cursor-grab active:cursor-grabbing"
            >
              {testimonials.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl min-h-[350px] flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">"{item.text}"</p>
                    </div>
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.name[0]}
                      </div>
                      <div>
                        <div className="text-base font-bold text-gray-900">{item.name}</div>
                        <div className="text-xs font-bold text-emerald-600 uppercase flex items-center gap-1">
                          {item.position} • {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${currentIndex === i ? "w-8 bg-emerald-600" : "w-2 bg-emerald-200"}`}
              />
            ))}
          </div>
        </div>

        {/* Trustpilot Widget */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-white px-6 py-4 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="flex items-center gap-1.5">
              <Star size={24} className="fill-green-500 text-green-500" />
              <span className="text-xl font-black text-gray-900 tracking-tighter">Trustpilot</span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-green-500 flex items-center justify-center text-white text-[8px] font-bold rounded-sm">★</div>
                ))}
              </div>
              <p className="text-[10px] font-black text-gray-900 uppercase">
                4.9 / 5 <span className="text-gray-400 font-medium whitespace-nowrap">| 250+ reviews</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}