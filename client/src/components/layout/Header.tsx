
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="w-full">
      {/* Contact Info Bar */}
      <div className="bg-[#FA061A] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:(877)-307-8131" className="text-sm md:text-base hover:text-gray-200 transition-colors">
              <i className="fas fa-phone mr-2"></i>(877)-307-8131
            </a>
            <a href="mailto:info@nextgenmepfp.com" className="text-sm md:text-base hover:text-gray-200 transition-colors">
              <i className="fas fa-envelope mr-2"></i>info@nextgenmepfp.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#F6050A] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/">
              <img 
                src="/next-gen-final.jpeg" 
                alt="NEXTGEN MEPfp Logo" 
                className="h-10 md:h-16 w-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="flex items-center">
              <button 
                className="md:hidden text-white p-2" 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Home</Link>
                <Link to="/why-choose-us" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Why Choose Us</Link>
                <Link to="/services" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Services</Link>
                <Link to="/projects" className="px-6 py-2 text-white hover:bg-red-700 hover:scale-105 font-medium rounded-full transition-all duration-300">Projects</Link>
                <Link to="/contact" className="px-6 py-2 bg-[#FA061A] text-white rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-[100px] left-0 w-full bg-[#F6050A] shadow-lg z-50">
              <div className="flex flex-col p-4 space-y-3">
                <button onClick={() => handleNavClick("/")} className="text-white py-2 text-left hover:bg-red-700 px-4 rounded">Home</button>
                <button onClick={() => handleNavClick("/why-choose-us")} className="text-white py-2 text-left hover:bg-red-700 px-4 rounded">Why Choose Us</button>
                <button onClick={() => handleNavClick("/services")} className="text-white py-2 text-left hover:bg-red-700 px-4 rounded">Services</button>
                <button onClick={() => handleNavClick("/projects")} className="text-white py-2 text-left hover:bg-red-700 px-4 rounded">Projects</button>
                <button onClick={() => handleNavClick("/contact")} className="text-white py-2 text-left hover:bg-red-700 px-4 rounded">Contact Us</button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
