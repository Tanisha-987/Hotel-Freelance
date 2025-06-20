import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    rooms: 0,
    service: 0,
    satisfaction: 0
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        startCounters();
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    { icon: <Award size={40} color="gold" />, title: "Award Winning", description: "Recognized for excellent hospitality." },
    { icon: <Users size={40} color="gold" />, title: "Expert Staff", description: "Trained team focused on guest comfort." },
    { icon: <Heart size={40} color="gold" />, title: "Personalized Service", description: "We care about your unique experience." },
    { icon: <Shield size={40} color="gold" />, title: "Safety First", description: "We follow top hygiene and safety protocols." }
  ];

  return (
    <section ref={sectionRef} style={{ padding: "40px", backgroundColor: "#1a1a1a", color: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>About The Heera Divine</h2>
          <p style={{ fontSize: "16px", marginBottom: "16px" }}>
            Welcome to The Heera Divine Hotel. We offer a perfect blend of luxury and comfort. For over 15 years, we've been known for excellent service.
          </p>
          <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            Our rooms, staff, and hospitality aim to make your stay comfortable and memorable.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {[
              { value: counters.years, suffix: "+", label: "Years of Excellence" },
              { value: counters.rooms, suffix: "+", label: "Luxury Rooms" },
              { value: counters.service, suffix: "/7", label: "Room Service" },
              { value: counters.satisfaction, suffix: "%", label: "Guest Satisfaction" }
            ].map((item, index) => (
              <div key={index} style={{ flex: "1", minWidth: "150px", textAlign: "center", transition: "transform 0.3s", '&:hover': { transform: 'scale(1.05)' } }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "gold" }}>
                  {item.value}{item.suffix}
                </div>
                <div style={{ fontSize: "14px" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <img 
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Hotel Lobby"
            style={{ width: "100%", maxWidth: "600px", borderRadius: "20px" }}
          />
          <div style={{ backgroundColor: "gold", color: "#1a1a1a", padding: "10px 20px", marginTop: "-30px", width: "120px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", position: "relative", left: "-20px" }}>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>5.0★</div>
            <div style={{ fontSize: "12px" }}>Guest Rating</div>
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", fontWeight: "bold" }}>
            Why Choose The Heera Divine?
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {features.map((feature, index) => (
              <div key={index} style={{ width: "250px", padding: "20px", textAlign: "center", border: "1px solid #eee", borderRadius: "10px", transition: "transform 0.3s", '&:hover': { transform: 'scale(1.05)' } }}>
                <div style={{ marginBottom: "10px" }}>{feature.icon}</div>
                <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>{feature.title}</h4>
                <p style={{ fontSize: "14px" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
