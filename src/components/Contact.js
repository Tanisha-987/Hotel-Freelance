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
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          Ready to experience luxury? Contact us for reservations or any inquiries.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <MapPin className="text-amber-500" size={24} />
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p className="text-gray-400">123 Heera Street, Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <Phone className="text-amber-500" size={24} />
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <Mail className="text-amber-500" size={24} />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-400">contact@theheeradivine.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Last Name"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your Email"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Phone Number"
                required
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option>Room Reservation</option>
                <option>General Inquiry</option>
                <option>Event Booking</option>
                <option>Feedback</option>
              </select>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your message..."
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 font-semibold rounded transition ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
