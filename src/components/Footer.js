import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook },
    { name: 'Twitter', icon: Twitter },
    { name: 'Instagram', icon: Instagram },
    { name: 'Linkedin', icon: Linkedin }
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Rooms & Suites', id: 'rooms' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' }
  ];

  const services = [
    'Room Service', 'Restaurant', 'Spa & Wellness', 
    'Event Hosting', 'Airport Transfer', 'Laundry Service'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div 
              className="flex items-center mb-6 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div className="ml-2">
                <h3 className="text-xl font-bold">The Heera Divine</h3>
                <p className="text-gray-400 text-sm">Luxury Hotel & Resort</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Experience luxury redefined with world-class amenities and exceptional hospitality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href="#"
                  className="bg-amber-600 p-2 rounded-lg transition-all duration-300"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <social.icon size={20} className={hoveredSocial === social.name ? 'animate-bounce' : ''} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-amber-400"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-amber-400">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400" size={18} />
                <div>
                  <p className="text-gray-400">123 Luxury Avenue</p>
                  <p className="text-gray-400">City Center, State 123456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400" size={18} />
                <p className="text-gray-400">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400" size={18} />
                <p className="text-gray-400">info@heeradivinehotel.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © 2024 The Heera Divine Hotel. Made with 
              <Heart className="text-red-500 mx-1" size={16} />
              All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                <a 
                  key={policy}
                  href="#" 
                  className="text-gray-400 hover:text-amber-400 text-sm"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
