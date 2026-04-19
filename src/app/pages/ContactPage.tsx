import { useState } from "react";
import { motion } from "motion/react";
import Swal from "sweetalert2"; // SweetAlert Import
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  User,
  Building2,
  Globe,
  Award,
  Zap,
  Landmark
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const offices = [
  {
    country: "India (HQ)",
    address: "Karol Bagh, New Delhi, India 110005",
    flag: "🇮🇳",
    icon: Building2,
    label: "Headquarters"
  },
  {
    country: "USA - Michigan",
    address: "1234 East Grand River Avenue, Suite 250, Lansing, MI 48906, USA",
    flag: "🇺🇸",
    icon: Landmark,
    label: "United States Office"
  },
  {
    country: "Canada - Ontario",
    address: "265 Freure Drive, Cambridge, ON N1S 0C1, Canada",
    flag: "🇨🇦",
    icon: Globe,
    label: "Canada Office"
  },
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@hiverift.com",
    secondary: "For Business Inquiries",
    action: "mailto:info@hiverift.com",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Phone,
    title: "Call Us (India)",
    primary: "+91 8814930229",
    secondary: "India Office",
    action: "tel:+918814930229",
    color: "from-emerald-600 to-teal-600",
  },
  {
    icon: Phone,
    title: "Call Us (USA)",
    primary: "+1 9728337525",
    secondary: "USA Office",
    action: "tel:+19728337525",
    color: "from-teal-500 to-emerald-500",
  },
];

const processSteps = [
  {
    icon: Phone,
    title: "Initial Contact",
    description: "Our Business Development Manager will connect with you through the contact details you provide on our website.",
  },
  {
    icon: MessageSquare,
    title: "Requirement Discussion",
    description: "A detailed discussion of your requirements will be followed by expert suggestions on what's best for your business.",
  },
  {
    icon: Zap,
    title: "Execution",
    description: "Next, we will commence executing the plans and suggestions prepared specifically for your project.",
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    
    // Comprehensive Validation
    if (!formData.name.trim()) {
      Swal.fire({ icon: 'error', title: 'Name Required', text: 'Please enter your full name.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      Swal.fire({ icon: 'error', title: 'Invalid Email', text: 'Please enter a valid email address.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      Swal.fire({ icon: 'error', title: 'Invalid Phone', text: 'Please enter a valid 10-digit phone number.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.service) {
      Swal.fire({ icon: 'error', title: 'Service Required', text: 'Please select a service.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      Swal.fire({ icon: 'error', title: 'Details Required', text: 'Please provide at least 10 characters for project details.', confirmButtonColor: "#10b981" });
      setIsSubmitting(false);
      return;
    }

    try {
      // Use FormData for typical PHP compatibility
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("company", formData.company.trim());
      data.append("service", formData.service);
      data.append("message", formData.message.trim());

      const response = await fetch("https://hiverift.com/api/sendmail.php", {
        method: "POST",
        body: data,
      });

      const result = await response.json().catch(() => ({ status: false, message: "Response was not in JSON format." }));

      // Handle both status: true and result.success
      if (response.ok && (result.status === true || result.status === "success" || result.success === true)) {
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out. We have received your message and will get back to you shortly.",
          icon: "success",
          confirmButtonColor: "#10b981",
          timer: 5000,
          timerProgressBar: true,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Server Error: Could not send message.");
      }
    } catch (error: any) {
      Swal.fire({
        title: "Submission Failed",
        text: error.message || "Could not connect to the server. Please try again later.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
    {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden mt-20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzM5ODMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/85 to-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 h-full relative z-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 md:mb-6">
              <Mail size={14} className="text-emerald-400 md:hidden" />
              <Mail size={16} className="text-emerald-400 hidden md:block" />
              <span className="text-xs md:text-sm font-semibold text-white tracking-wide">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              Transform your business with innovative digital solutions. We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-4">
Tell us, we Build            </h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.title}
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300"
                    >
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${method.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={32} className="text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-1`}>
                        {method.primary}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">{method.secondary}</p>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h2>
                  <p className="text-gray-600 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
               <input
  type="tel"
  id="phone"
  name="phone"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  }}
  required
  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm"
  placeholder="9876543210"
/>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white shadow-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>

                    <div className="relative">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 flex justify-between">
                        <span>Project Details *</span>
                        <span className={`text-xs ${formData.message.length >= 10 ? 'text-emerald-600' : 'text-gray-400'}`}>
                          {formData.message.length} characters
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none shadow-sm"
                        placeholder="Tell us about your project... (min 10 characters)"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* What to Expect */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What do we have for you?</h2>
                  <div className="space-y-6">
                    {processSteps.map((step, index) => {
                      return (
                        <div key={step.title} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CEO Quote */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <User size={32} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Founder & CEO</p>
                      <p className="text-white/90">HiveRift</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed italic mb-4">
                    "The goal of transforming businesses with cutting-edge technology is what fuels our plans, efforts, and execution."
                  </p>
                  <div className="flex items-center gap-2">
                    <Award size={20} />
                    <p className="text-sm">Committed to Excellence Since 2019</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-100">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">24h</div>
                    <p className="text-gray-700 font-medium">Response Time</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-teal-100">
                    <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                    <p className="text-gray-700 font-medium">Confidentiality</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
 <section className="pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full mb-4">
              <Globe size={16} className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">
                Global Presence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Sun Never Sets on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">HiveRift</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across continents, we're always here to serve you
            </p>
          </motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
  {offices.map((office, index) => {
    const OfficeIcon = office.icon; // Dynamic icon based on office
    return (
      <motion.div
        key={office.country}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 flex flex-col justify-between group"
      >
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
              {office.flag}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
              {office.country}
            </h3>
          </div>
          
          <div className="flex items-start gap-3 text-gray-600">
            <div className="bg-emerald-50 p-2 rounded-lg">
              <MapPin size={20} className="text-emerald-600" />
            </div>
            <p className="text-sm lg:text-base leading-relaxed pt-1">
              {office.address}
            </p>
          </div>
        </div>

        {/* Bottom Status Icon Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 text-emerald-600">
            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md">
              <OfficeIcon size={16} />
            </div>
            <span className="text-xs lg:text-sm font-bold uppercase tracking-wider">
              {office.label}
            </span>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>
        </div>
      </section>

      {/* CEO Message Section */}
         <section className="pb-12 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <User size={40} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Founder & CEO</h3>
                  <p className="text-lg text-emerald-600 font-semibold">HiveRift</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At HiveRift, each client is our top priority. We ensure that every interaction with us is satisfying and meets your expectations. We welcome your valuable feedback and suggestions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You can forward your concerns to{" "}
                  <a href="mailto:ceo@hiverift.com" className="text-emerald-600 font-semibold hover:underline">
                    ceo@hiverift.com
                  </a>{" "}
                  at any time and expect a prompt response. We are committed to providing you with our best services at all times.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4 border-t border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">Prompt Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold">Client-Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}