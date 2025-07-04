import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { CONTACT_INFO } from '../../data/userInfo';
import emailjs from '@emailjs/browser'; // <-- EmailJS import

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_0v9tvdr',     // e.g., 'service_xxxxx'
      'template_5kh9pau',    // e.g., 'template_yyyyy'
      formData,
      '_C_BoPlqQ4_OTw6c8'      // e.g., 'rRasd34dfQdaS'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error.text);
      alert('Oops! Something went wrong. Please try again later.');
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Contact Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Feel free to reach out if you're looking for a passionate student developer for 
              your project, or if you have any questions about my work.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-600">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors flex items-center justify-center"
              >
                Send Message <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
