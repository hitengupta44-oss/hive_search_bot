import { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Filter
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = ["All", "Web Development", "Digital Marketing", "SEO", "Mobile Apps", "Business Growth", "Tech & AI"];

const blogPosts = [
  {
    id: 1,
    category: "Web Development",
    title: "Why Your Rs. 5,000 Website Is Costing You More Than You Think",
    desc: "Cheap websites may save money upfront but lose you customers daily. Here's the real cost of a bad website for Indian businesses.",
    readTime: "4 min read",
    author: "HiveRift Team",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    category: "Digital Marketing",
    title: "How Indian SMEs Can Get 10x More Leads Without Doubling Their Budget",
    desc: "Smart digital marketing doesn't mean spending more — it means spending right. Here's the playbook for Indian SMEs in 2026.",
    readTime: "5 min read",
    author: "Marketing Desk",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    category: "SEO",
    title: "Local SEO for Indian Businesses: How to Rank #1 in Your City",
    desc: "Local SEO is the most underused growth tool for Indian small businesses. Here's a step-by-step guide to ranking in your city.",
    readTime: "4 min read",
    author: "SEO Specialist",
    date: "Jan 08, 2026",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    category: "Mobile Apps",
    title: "Does Your Business Actually Need a Mobile App? Here's How to Decide",
    desc: "Not every business needs a mobile app — but the ones that do see massive growth. Here's an honest guide to deciding if an app is right.",
    readTime: "5 min read",
    author: "App Team",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    category: "Business Growth",
    title: "Why 8 Out of 10 Indian Startups Fail Online",
    desc: "Most Indian startups make the same 5 digital mistakes. Here's what they are — and how to avoid them before they cost you.",
    readTime: "4 min read",
    author: "Growth Lead",
    date: "Jan 02, 2026",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    category: "Tech & AI",
    title: "AI for Indian Businesses in 2026: What's Actually Useful",
    desc: "AI is everywhere in 2026 — but which AI tools actually help Indian businesses grow? Here's an honest breakdown.",
    readTime: "5 min read",
    author: "Tech Lab",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  }
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[500px] overflow-hidden mt-16 md:mt-20 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2h8ZW58MHx8fHwxNzM5ODMwNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Insights & Updates"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full mb-6">
              <Sparkles size={14} className="text-emerald-400" />
              <span className="text-sm font-black text-emerald-400 tracking-widest uppercase">
                Insights & Updates
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Insights, Ideas & <span className="text-emerald-400">Real Talk</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
              Practical advice for Indian businesses navigating websites, marketing, apps, and technology — written by the team that builds it every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-slate-100 sticky top-20 bg-white/80 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-widest mr-4 flex-shrink-0">
              <Filter size={16} /> Filter By:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${activeCategory === cat ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-slate-50/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-xs font-black text-emerald-600 tracking-widest uppercase shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-6">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 flex-grow">
                    {post.desc}
                  </p>

                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">
                        {post.author[0]}
                      </div>
                      <span className="text-xs font-black text-slate-900">{post.author}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white group-hover:bg-emerald-600 transition-colors"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 font-bold text-xl">No posts found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-emerald-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Get Growth Hacks in Your Inbox</h2>
              <p className="text-emerald-100 text-lg font-medium mb-10 max-w-2xl mx-auto">
                No spam. Just high-ROI tech and marketing advice for Indian business owners. Sent twice a month.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="flex-grow px-6 py-4 rounded-2xl bg-white text-slate-900 font-bold outline-none border-none"
                />
                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
            <Sparkles size={160} className="absolute -bottom-10 -right-10 text-white/10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
