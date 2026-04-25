import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router";
import logoImage from "figma:asset/7fe77d5a1d2e3ea35cd92869801d704f0f2dbc95.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center">
            <img src={logoImage} alt="HiveRift" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              Services
            </Link>
            <Link
              to="/solutions"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              Solutions
            </Link>
            <Link
              to="/industries"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              Industries
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              Case Studies
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap"
            >
              Blog
            </Link>
            <div className="relative group py-2">
              <Link
                to="/contact"
                className="text-gray-700 group-hover:text-emerald-600 group-hover:underline underline-offset-8 decoration-2 decoration-emerald-500/30 transition-all font-bold text-sm xl:text-base whitespace-nowrap flex items-center gap-1"
              >
                Contact
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                <Link 
                  to="/contact" 
                  className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/careers" 
                  className="block px-6 py-3 text-sm font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border-t border-gray-50"
                >
                  Careers
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 bg-white shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col px-6 space-y-2 overflow-y-auto max-h-[80vh]">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Solutions", path: "/solutions" },
                { name: "Industries", path: "/industries" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Pricing", path: "/pricing" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
                { name: "Careers", path: "/careers" }
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-800 hover:text-emerald-600 transition-colors font-bold text-lg py-4 border-b border-gray-50 flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-emerald-500 transition-colors" size={16} />
                </Link>
              ))}
              
              <div className="pt-6 pb-4">
                <Button
                  onClick={() => {
                    navigate("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white w-full py-6 rounded-2xl font-black text-lg shadow-lg"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}