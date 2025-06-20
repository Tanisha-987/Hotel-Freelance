import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // Adjust this if header height changes
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Info Bar */}
      <div className="w-full text-center text-sm text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-2 hidden sm:block">
        <span className="text-gray-300">
          📞 Call us at <strong className="text-amber-400">+91 98765 43210</strong> or 📧 email{' '}
          <strong className="text-amber-400">info@heeradivinehotel.com</strong>
        </span>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-extrabold text-2xl">H</span>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white leading-tight">The Heera Divine</h1>
            <p className="text-sm text-gray-300 -mt-1">Luxury Hotel & Resort</p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Rooms', id: 'rooms' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              className="text-white text-lg font-semibold hover:text-amber-400 transition"
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md transition-all duration-300"
      >
        <nav className="flex flex-col gap-4 py-4 px-6">
          {[
            { name: 'Home', id: 'home' },
            { name: 'Rooms', id: 'rooms' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-white text-lg font-semibold hover:text-amber-400 transition"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
