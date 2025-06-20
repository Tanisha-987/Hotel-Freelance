import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration 500 ${isScrolled ? 'bg-gray-800 shadow-xl' : 'bg-gray-900 shadow-lg'}`}>
      <div className={`bg-amber-600 text-white transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 cursor-pointer">
              <Phone size={14} className="animate-pulse" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Mail size={14} className="animate-bounce" />
              <span>info@heeradivinehotel.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <MapPin size={14} className="animate-pulse" />
            <span>Luxury Location, City Center</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-200">The Heera Divine</h1>
              <p className="text-sm text-gray-400">Luxury Hotel & Resort</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Rooms', id: 'rooms' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-200 hover:text-amber-400 font-medium transition-all duration-300 py-2 px-4 rounded-lg"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Rooms', id: 'rooms' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-200 hover:text-amber-400 font-medium transition-all duration-300 py-2 px-4 rounded-lg"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
