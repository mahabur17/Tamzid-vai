// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'হোম', to: '/#' }, 
    { name: 'কোর্সসমূহ', to: '/#courses' },
    { name: 'প্রতিষ্ঠান রিভিউ', to: '/#college-info' },
    { name: 'রিভিউ', to: '/#reviews' },
    { name: 'যোগাযোগ', to: '/#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // স্ক্রল করলে মেনু বন্ধ হওয়ার লজিক
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // একদম ১০০% কাজ করবে এমন WhatsApp লিংক
  const whatsappLink = "https://api.whatsapp.com/send?phone=8801957747041";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6faf7]/90 backdrop-blur-md shadow-sm border-b border-outline-variant/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-20 relative">
        
        {/* Logo */}
        <Link smooth to="/#" className="text-2xl font-black text-primary tracking-tight">
          তামজীদ ইসলাম
        </Link>
        
        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              smooth
              to={link.to}
              className="text-on-surface-variant hover:text-primary transition-colors font-semibold" 
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Actions: WhatsApp Icon + Hamburger Menu */}
        <div className="flex md:hidden items-center gap-3">
          
          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full shadow-[0_4px_10px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_15px_rgba(37,211,102,0.6)] active:scale-95 transition-all duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512" 
              className="w-6 h-6 fill-current"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </a>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-primary rounded-xl hover:bg-primary/5 transition-colors focus:outline-none relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <span className={`material-symbols-outlined text-3xl absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
              menu
            </span>
            <span className={`material-symbols-outlined text-3xl absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
              close
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-b border-outline-variant/10 md:hidden transition-all duration-300 ease-in-out transform origin-top ${
        isMenuOpen 
          ? 'opacity-100 scale-y-100 visible h-auto'
          : 'opacity-0 scale-y-0 invisible h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col py-4 px-6 space-y-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              smooth 
              to={link.to} 
              onClick={handleLinkClick} 
              className="text-on-surface-variant hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all font-semibold block text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}