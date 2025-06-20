import React, { useState, useEffect } from 'react';
import { Star, Award, Users, Calendar, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToRooms = () => {
    const element = document.getElementById('rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Welcome to
            <span className="block text-amber-400">The Heera Divine</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Experience luxury redefined with world-class amenities and exceptional hospitality
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={scrollToRooms}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105"
            >
              Book Your Stay
            </button>
            <button 
              onClick={scrollToAbout}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105"
            >
              Explore Rooms
            </button>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { icon: Star, value: "5.0", label: "Rating" },
              { icon: Award, value: "50+", label: "Awards" },
              { icon: Users, value: "10K+", label: "Happy Guests" },
              { icon: Calendar, value: "15+", label: "Years" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="text-amber-400" size={32} />
                </div>
                <div className="text-3xl font-bold">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToRooms}>
        <ChevronDown className="text-white hover:text-amber-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
