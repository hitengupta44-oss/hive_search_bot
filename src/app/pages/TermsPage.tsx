import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Scale, FileText, Calendar, Mail, ShieldCheck } from "lucide-react";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[450px] overflow-hidden mt-[80px] md:mt-20 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnRyYWN0JTIwbGVnYWx8ZW58MHx8fHwxNzM5ODMwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Terms & Conditions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-slate-900/95"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6 max-w-fit mx-auto">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">Legal Guidelines</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Terms & <span className="text-emerald-400">Conditions</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black text-white/60 uppercase tracking-widest">
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><Calendar size={14} className="text-emerald-400" /> Updated: Jan 2026</span>
              <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><FileText size={14} className="text-emerald-400" /> Effective: Jan 1, 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-12">
            
            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
              <h3 className="text-xl font-black text-gray-900 mb-4">1. Introduction & Acceptance</h3>
              <p>Welcome to HiveRift (operated by KhatuShyam Technologies, registered in India). By accessing our website (hiverift.com) or engaging our services, you agree to these Terms & Conditions in full. If you do not agree, please do not use our services.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">2. Services</h3>
              <p>HiveRift provides website development, mobile app development, custom software, digital marketing, SEO, UI/UX design, cloud & DevOps, AI/ML solutions, and related IT services. All service scope, deliverables, timelines, and pricing are defined in the individual project agreement / proposal accepted by the client.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">3. Payment Terms</h3>
              <p>A non-refundable advance of 50% of the total project cost is required before work begins. The remaining balance is due upon project completion or as per milestones agreed in the project proposal. All prices are exclusive of GST. GST at 18% is applicable on all services as per Indian tax law.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">4. Refund Policy</h3>
              <p>The initial 50% advance payment is non-refundable as it covers planning, resource allocation, and initial work. If HiveRift fails to deliver the agreed scope, a partial or full refund may be considered at our discretion after review.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">5. Intellectual Property</h3>
              <p>Upon receipt of full payment, all client-specific work product (designs, code, content) created by HiveRift for the client becomes the client's property. HiveRift retains the right to display completed work in our portfolio unless a written NDA is in place.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">6. Confidentiality & NDA</h3>
              <p>HiveRift treats all client information as confidential. We sign Non-Disclosure Agreements (NDAs) before any project discussion begins, upon client request. Client data shared with us is used solely for project delivery.</p>
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4">10. Governing Law</h3>
              <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.</p>
            </div>

            <div className="pt-12 border-t border-slate-100">
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl text-emerald-600  mb-2">Have questions?</h4>
                  <p className="text-slate-400">Reach out to our legal team for clarifications.</p>
                </div>
                <a href="mailto:info@hiverift.com" className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black flex items-center gap-3 hover:bg-emerald-700 transition-colors">
                  <Mail size={20} /> info@hiverift.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
