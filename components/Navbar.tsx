import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import grizzlyLogo from '../grizzly.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#story' },
    { name: 'Signatures', href: '#signatures' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
             <img
               src={grizzlyLogo}
               alt="Grizzly Café Logo"
               className={`h-10 w-10 sm:h-14 sm:w-14 object-contain rounded-md transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100 sm:scale-110 shadow-xl'}`}
             />
             <span className={`font-serif font-bold text-lg sm:text-2xl tracking-tight leading-none ${isScrolled ? 'text-grizzly-dark' : 'text-white'}`}>
               GRIZZLY <span className="text-grizzly-red">CAFÉ</span>
             </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-grizzly-red ${
                  isScrolled ? 'text-grizzly-dark' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-grizzly-dark' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Full Screen */}
      <div
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close button */}
        <div className="absolute top-6 right-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-grizzly-dark"
          >
            <X size={32} />
          </button>
        </div>

        <div className="h-full flex flex-col items-center justify-center gap-6">
          <img src={grizzlyLogo} alt="Grizzly Café" className="h-20 w-20 mb-4" />
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-grizzly-dark hover:text-grizzly-red font-serif font-bold text-3xl py-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">Surrey, BC</p>
            <p className="text-grizzly-red font-bold mt-1">Open Today: 7AM - 7PM</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;