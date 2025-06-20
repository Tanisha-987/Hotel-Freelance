import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Room Reservation',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');

    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'Room Reservation',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-xl text-center mb-8">Ready to experience luxury? Contact us for reservations or any inquiries.</p>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border rounded p-2 bg-gray-700 text-white"
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border rounded p-2 bg-gray-700 text-white"
                placeholder="Your last name"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded p-2 bg-gray-700 text-white"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border rounded p-2 bg-gray-700 text-white"
                placeholder="+91 9876543210"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Subject</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full border rounded p-2 bg-gray-700 text-white"
              >
                <option>Room Reservation</option>
                <option>General Inquiry</option>
                <option>Event Booking</option>
                <option>Feedback</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border rounded p-2 bg-gray-700 text-white"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded text-white ${isSubmitting ? 'bg-gray-600' : 'bg-amber-600 hover:bg-amber-700'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
