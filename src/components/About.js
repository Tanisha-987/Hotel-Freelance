import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const [counters, setCounters] = useState({
    years: 0,
    rooms: 0,
    service: 0,
    satisfaction: 0
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      startCounters();
    }
  }, [isInView]);

  const startCounters = () => {
    const targetValues = { years: 15, rooms: 50, service: 24, satisfaction: 100 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targetValues).forEach((key) => {
      let current = 0;
      const target = targetValues[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  const features = [
    {
      icon: <Award size={40} color="gold" />,
      title: "Award Winning",
      description: "Recognized for excellent hospitality."
    },
    {
      icon: <Users size={40} color="gold" />,
      title: "Expert Staff",
      description: "Trained team focused on guest comfort."
    },
    {
      icon: <Heart size={40} color="gold" />,
      title: "Personalized Service",
      description: "We care about your unique experience."
    },
    {
      icon: <Shield size={40} color="gold" />,
      title: "Safety First",
      description: "We follow top hygiene and safety protocols."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading + Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">About The Heera Divine</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Welcome to <span className="text-amber-400 font-semibold">The Heera Divine</span>, your serene escape into elegance and warmth.
            For over 15 years, we've been redefining hospitality with personalized service, elegant luxury rooms, 24/7 service, and unbeatable guest satisfaction.
            Discover an unforgettable stay where comfort meets class.
          </p>
        </motion.div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-16"
        >
          {[
            { value: counters.years, suffix: "+", label: "Years of Excellence" },
            { value: counters.rooms, suffix: "+", label: "Luxury Rooms" },
            { value: counters.service, suffix: "/7", label: "Room Service" },
            { value: counters.satisfaction, suffix: "%", label: "Guest Satisfaction" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-amber-400">
                {item.value}{item.suffix}
              </div>
              <div className="text-gray-300 mt-2 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Image + Rating */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <img
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Hotel Lobby"
            className="w-full max-w-xl rounded-2xl shadow-lg"
          />
          <div className="bg-amber-500 text-black mt-[-20px] py-2 px-6 rounded-full font-semibold text-sm shadow-lg">
            5.0★ Guest Rating
          </div>
        </motion.div>

        {/* Image Gallery - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Gallery</h3>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-2 min-w-full">
              {[
                "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[280px] h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose The Heera Divine?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center shadow hover:scale-105 transform transition duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
