import { useState, useEffect } from "react";
import { Menu, X, Server, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Server className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold">ServerTech</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#specs" className="text-gray-600 hover:text-primary transition-colors">
              Specifications
            </a>
            <Button
              variant="default"
              className="flex items-center"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Quote <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        } overflow-hidden bg-white/90 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a
            href="#services"
            className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#features"
            className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#specs"
            className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
          >
            Specifications
          </a>
          <Button
            variant="default"
            className="w-full mt-4"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;